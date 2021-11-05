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
class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ['id', 'name', 'desc', 'members']
        depth = 1


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

    # def create(self, validated_data):
    #         # assignee_data = validated_data.pop('assignee')
    #         # stage_data = validated_data.pop('stage')
    #         # labels = validated_data.pop('labels')
    #         print(validated_data)
    #         # task = Task.objects.create(**validated_data)
    #         # Task.objects.create(task=task, **assignee_data, **stage_data, **labels)
    #         # return task
