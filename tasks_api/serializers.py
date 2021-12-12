from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Label, Task, TaskStage, Team, Member
from drf_writable_nested.serializers import WritableNestedModelSerializer


# Class UserSerializer.
class UserSerializer(serializers.ModelSerializer):


    password = serializers.CharField(write_only=True,)
    class Meta:
       model = User
       fields = ('id', 'username', 'email', 'password', 'is_superuser')

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        if 'password' in validated_data:
              user.set_password(validated_data['password'])
              user.save()
        return user

        


# Class GroupSerializer.
class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


# Class MemberSerializer.
class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields =['id', 'first_name', 'last_name', 'email', 'avatar', 'about', 'user']
        # depth = 1


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
        fields = ['id', 'title', 'desc', 'start_date', 'due_to',
                  'assignee', 'stage', 'order', 'labels']
        depth = 1
