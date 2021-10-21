from django.contrib.auth.models import User, Group
from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .models import Team, Member


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']
        


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class MemberSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Member
        fields = "__all__"
       


    
class TeamSerializer(serializers.HyperlinkedModelSerializer):
    # view_name='team-detail'
    class Meta:
        model = Team
        fields= "__all__"
