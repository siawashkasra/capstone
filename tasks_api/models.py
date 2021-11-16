from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse


# Create your models here.

# Class Member.
class Member(models.Model):

    first_name = models.CharField('First Name', null=True, max_length=256)
    last_name = models.CharField('Last Name', null=True, max_length=256)
    email = models.EmailField('Emali', null=False)
    avatar = models.CharField("Avatar", max_length=256)
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
    class Meta:
        ordering = ('-created_at', )

    cover = models.ImageField(upload_to='teams', null=True, blank=True)
    name = models.CharField("Name", null=False, max_length=256)
    desc = models.TextField("Description", null=False)
    members = models.ManyToManyField(Member, related_name='team')
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


# Class Lable.
class Label(models.Model):

    class Meta:
        ordering = ('label', )

    value = models.CharField("Value", max_length=256, null=False)
    label = models.CharField("Label", max_length=256, null=False)
    color = models.CharField("Color", max_length=256, null=False)

    def __str__(self):
        return "Label< " + self.label + "> " + " <Color: " + self.color + ">"


# Class Task.
class Task(models.Model):

    class Meta:
        ordering = ('order', )

    title = models.CharField("Title", null=False, max_length=256)
    desc = models.TextField("Description", null=False)
    created_at = models.DateTimeField(
        "Created At", null=False, auto_now_add=True,)
    updated_at = models.DateTimeField("Updated At", null=False, auto_now=True)
    due_to = models.DateField("Due to", null=True)
    assignee = models.ForeignKey(Member, on_delete=models.SET_NULL, null=True)
    stage = models.ForeignKey(
        TaskStage, related_name="tasks", on_delete=models.DO_NOTHING, null=True)
    order = models.IntegerField("order", null=True)
    labels = models.ManyToManyField(Label, related_name='labels')
    create_uid = models.ForeignKey(User, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("model_detail", kwargs={"pk": self.pk})
