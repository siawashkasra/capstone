from .models import Label, Member, TaskStage, Team, Task
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import LabelSerializer, TeamSerializer, MemberSerializer, UserSerializer, GroupSerializer, TaskSerializer, TaskStageSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db.models import Q


# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


class MemberViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows members to be viewed or edited.
    """
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(methods=['GET'], detail=True, permission_classes=[permissions.IsAuthenticated])
    def getMembersByTeam(self, request, pk):
        # serialize the data
        serializer = MemberSerializer(
            Member.objects.filter(team=pk), many=True)
        return Response(serializer.data)


class TeamViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows teams to be viewed or edited.
    """

    def get_queryset(self):
        return Team.objects.filter(Q(create_uid=self.request.user) | Q(members__in=[Member.objects.filter(user_id=self.request.user).get()])).distinct()

    serializer_class = TeamSerializer
    permission_classes = [permissions.IsAuthenticated]

    # Override create method
    def create(self, request, *args, **kwargs):
        serializer = TeamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(create_uid=self.request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

    def partial_update(self, request, pk=None):
        team = Team.objects.filter(id=pk).get()
        team.cover = request.data.get('cover')
        team.save()
        return Response(data={'status': 'stage has been updated!'}, status=201)


class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows tasks to be viewed or edited.
    """

    def get_queryset(self):
        return Task.objects.filter(Q(create_uid=self.request.user) | Q(assignee=Member.objects.filter(user_id=self.request.user).get())).distinct()

    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(methods=['patch'], detail=False,
            permission_classes=[permissions.IsAuthenticated])
    def reorder(self, request):
        for item in request.data:
            task = Task.objects.get(id=item.get('id'))
            task.order = item.get('order')
            task.save()

        return Response({'status': 'tasks has been reordered'})

    def partial_update(self, request, pk=None):
        task = Task.objects.filter(id=pk).get()
        taskStage = TaskStage.objects.filter(
            id=request.data.get('stage')).get()
        task.stage = taskStage
        task.save()
        return Response({'status': 'stage has been updated!'})

    @action(methods=['GET'], detail=False, permission_classes=[permissions.IsAuthenticated], url_path=r'by-stage/(?P<stage_id>\w+)')
    def getTasksByStage(self, request, stage_id=None):
        # serialize the data
        serializer = TaskSerializer(
            Task.objects.filter((Q(stage=stage_id)) & (Q(create_uid=self.request.user) | Q(assignee=Member.objects.filter(user_id=self.request.user).get()))).distinct(), many=True)
        return Response(serializer.data)

    # Override create method
    def create(self, request, *args, **kwargs):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(create_uid=self.request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class TaskStageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows task stages to be viewed or edited.
    """

    def get_queryset(self):
        return TaskStage.objects.all()

    serializer_class = TaskStageSerializer
    permission_classes = [permissions.IsAuthenticated]

    # Override create method
    def create(self, request, *args, **kwargs):
        serializer = TaskStageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(create_uid=self.request.user)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class LabelViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows labels to be viewed or edited.
    """

    def get_queryset(self):
        return Label.objects.all()

    serializer_class = LabelSerializer
    permission_classes = [permissions.IsAuthenticated]
