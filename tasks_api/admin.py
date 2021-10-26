from django.contrib import admin
from .models import Task, TaskStage, Team, Member

# Register your models here.

admin.site.register(Member)
admin.site.register(Team)
admin.site.register(Task)
admin.site.register(TaskStage)

