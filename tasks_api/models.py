from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse


# Create your models here.

# Class Member.
class Member(models.Model):

    first_name = models.CharField('First Name', null=True, max_length=256)
    last_name = models.CharField('Last Name', null=True, max_length=256)
    email = models.EmailField('Emali', null=False)
    photo = models.CharField("Photo", max_length=256)
    about = models.TextField("About")
    created_at = models.DateTimeField("Created At", auto_now_add=True)
    updated_at = models.DateTimeField("Update At", auto_now=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return f'{ self.first_name } {self.last_name}'

    def get_absolute_url(self):
        return reverse("model_detail", kwargs={"pk": self.pk})


# Class Team.
class Team(models.Model):

    name = models.CharField("Name", null=False, max_length=256)
    desc = models.TextField("Description", null=False)
    members = models.ManyToManyField(Member, related_name='teams_members')
    created_at = models.DateTimeField(
        "Created At", auto_now_add=True, null=True)
    updated_at = models.DateTimeField("Update At", auto_now=True, null=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("model_detail", kwargs={"pk": self.pk})


# Class TaskStage.
class TaskStage(models.Model):

    class Meta:
        ordering = ('order', )

    STAGES = (
        ('draft', 'Draft'),
        ('assigned', 'Assigned'),
        ('in_progress', 'In Progress'),
        ('pending', 'Pending'),
        ('completed', 'Completed')
    )

    stage = models.CharField("Stages", choices=STAGES,
                             max_length=20, null=False, default="draft")
    order = models.IntegerField("Order", null=True)

    def __str__(self):
        return self.stage

    def get_absolute_url(self):
        return reverse("model_detail", kwargs={"pk": self.pk})


# Class Task.
class Task(models.Model):

    PRIORITIES = (
        ('low', 'Low'),
        ('normal', 'Normal'),
        ('high', 'High'),
        ('critical', 'Critical')
    )

    title = models.CharField("Title", null=False, max_length=256)
    desc = models.TextField("Description", null=False)
    priority = models.CharField(
        "Priority", choices=PRIORITIES, max_length=10, default='normal')
    created_at = models.DateTimeField(
        "Created At", null=False, auto_now_add=True)
    updated_at = models.DateTimeField("Updated At", null=False, auto_now=True)
    due_to = models.DateTimeField("Due to", null=True)
    assignee = models.ForeignKey(Member, on_delete=models.SET_NULL, null=True)
    stage = models.ForeignKey(
        TaskStage, related_name="tasks", on_delete=models.DO_NOTHING, null=True)
    order = models.IntegerField("order", null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("model_detail", kwargs={"pk": self.pk})
