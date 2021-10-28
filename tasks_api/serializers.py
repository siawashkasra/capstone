from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Task, TaskStage, Team, Member


# Class UserSerializer.
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


# Class GroupSerializer.
class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


# Class MemberSerializer.
class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = "__all__"


# Class TeamSerializer.
class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'desc', 'members']
        depth = 1


# Class TaskSerializer.
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'title', 'desc', 'due_to', 'assignee', 'stage', 'order']
        depth = 1


# Class TaskStageSerializer.
class TaskStageSerializer(serializers.ModelSerializer):
    tasks = serializers.StringRelatedField(many=True)

    class Meta:
        model = TaskStage
        fields = ['id', 'stage', 'order', 'tasks']
        depth = 1
