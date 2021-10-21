from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse



# Create your models here.

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


class Team(models.Model):
    name = models.CharField("Name", null=False, max_length=256)
    desc = models.TextField("Description", null=False)
    members = models.ManyToManyField(Member, related_name='teams_members')
    created_at = models.DateTimeField("Created At", auto_now_add=True, null=True)
    updated_at = models.DateTimeField("Update At", auto_now=True, null=True)


    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("model_detail", kwargs={"pk": self.pk})
    