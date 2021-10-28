from .models import Member, TaskStage, Team, Task
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import TeamSerializer, MemberSerializer, UserSerializer, GroupSerializer, TaskSerializer, TaskStageSerializer
from rest_framework.decorators import action
from rest_framework.response import Response


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


class TeamViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows teams to be viewed or edited.
    """

    def get_queryset(self):
        return Team.objects.all()

    serializer_class = TeamSerializer
    permission_classes = [permissions.IsAuthenticated]


class TaskViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows tasks to be viewed or edited.
    """
    
    @action(methods=['patch'], detail=False, 
    permission_classes=[permissions.IsAuthenticated]) 
    def reorder(self, request):
        for item in request.data:
            task = Task.objects.get(id= item.get('id'))
            task.order= item.get('order')
            task.save()
  
        return Response({'status': 'tasks has been reordered'})


    def get_queryset(self):
        query_set = Task.objects.all().order_by('order')
        stage = self.request.query_params.get('stage')

        if stage is not None:
            query_set = Task.objects.filter(stage=stage)
        return query_set

    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]


class TaskStageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows task stages to be viewed or edited.
    """

    def get_queryset(self):
        return TaskStage.objects.all()

    serializer_class = TaskStageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def partial_update(self, request, pk=None):
        print(request, pk)
