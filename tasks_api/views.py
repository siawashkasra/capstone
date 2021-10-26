from django.db import connections
from .models import Member, TaskStage, Team, Task
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import TeamSerializer, MemberSerializer, UserSerializer, GroupSerializer, TaskSerializer, TaskStageSerializer


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

    def get_queryset(self):
        return Task.objects.all()


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