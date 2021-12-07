from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils import timezone
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token


# Create your models here.

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

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
    create_uid = models.ForeignKey(
        User, related_name="member_create_uid", on_delete=models.DO_NOTHING, null=True)
    update_uid = models.ForeignKey(
        User, related_name="member_update_ud", on_delete=models.DO_NOTHING, null=True)

    def __str__(self):
        return f'{ self.first_name } {self.last_name}'

    def get_absolute_url(self):
        return reverse("model_detail", kwargs={"pk": self.pk})

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = timezone.now()
        self.updated_at = timezone.now()
        return super(Member, self).save(*args, **kwargs)


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
    create_uid = models.ForeignKey(
        User, related_name="team_create_uid", on_delete=models.DO_NOTHING, null=True)
    update_uid = models.ForeignKey(
        User, related_name="team_update_ud", on_delete=models.DO_NOTHING, null=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("model_detail", kwargs={"pk": self.pk})

    # Override save method.

    def save(self, *args, **kwargs):
        if not self.id:
            self.created_at = timezone.now()
        self.updated_at = timezone.now()
        super(Team, self).save(*args, **kwargs)


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
    start_date = models.DateField("Start Date", null=True)
    due_to = models.DateField("Due to", null=True)
    assignee = models.ForeignKey(
        Member, related_name="tasks", on_delete=models.SET_NULL, null=True)
    stage = models.ForeignKey(
        TaskStage, related_name="tasks", on_delete=models.DO_NOTHING, null=True)
    order = models.IntegerField("order", null=True)
    labels = models.ManyToManyField(Label, related_name='labels')
    create_uid = models.ForeignKey(
        User, related_name="task_create_uid", on_delete=models.DO_NOTHING, null=True)
    update_uid = models.ForeignKey(
        User, related_name="task_update_ud", on_delete=models.DO_NOTHING, null=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("model_detail", kwargs={"pk": self.pk})

    # override save method to update the order of the task.
    def save(self, *args, **kwargs):
        if self.order is None:
            try:
                last_task = Task.objects.latest('order')
                self.order = last_task.order + 1
            except Task.DoesNotExist:
                self.order = 1
        if self.id is None:
            # update created_at with current time.
            self.created_at = timezone.now()
        # update updated_at with current time.
        self.updated_at = timezone.now()
        super(Task, self).save(*args, **kwargs)
