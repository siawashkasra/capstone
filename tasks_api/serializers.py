from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Label, Task, TaskStage, Team, Member
from drf_writable_nested.serializers import WritableNestedModelSerializer


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
class TeamSerializer(WritableNestedModelSerializer):
    # members = MemberSerializer(many=True)
    class Meta:
        model = Team
        fields = ['id', 'cover', 'name', 'desc', 'members']


# Class TaskStageSerializer.
class TaskStageSerializer(serializers.ModelSerializer):
    stage = serializers.CharField(source='get_stage_display')

    class Meta:
        model = TaskStage
        fields = ['id', 'stage', 'order', 'tasks']
        depth = 2


# Class LabelSerializer.
class LabelSerializer(serializers.ModelSerializer):

    class Meta:
        model = Label
        fields = "__all__"


# Class TaskSerializer.
class TaskSerializer(WritableNestedModelSerializer):
    assignee = MemberSerializer(many=False)
    stage = TaskStageSerializer(many=False)
    labels = LabelSerializer(many=True)

    class Meta:
        model = Task
        fields = ['id', 'title', 'desc', 'due_to',
                  'assignee', 'stage', 'order', 'labels']
        depth = 1
