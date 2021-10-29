# Generated by Django 3.2.8 on 2021-10-26 04:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tasks_api', '0003_auto_20211021_1205'),
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256, verbose_name='Title')),
                ('desc', models.TextField(verbose_name='Description')),
                ('priority', models.CharField(choices=[('low', 'Low'), ('normal', 'Normal'), ('high', 'High'), ('critical', 'Critical')], default='normal', max_length=10, verbose_name='Priority')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated At')),
                ('due_to', models.DateTimeField(null=True, verbose_name='Due to')),
                ('stage', models.CharField(choices=[('draft', 'Draft'), ('assigned', 'Assigned'), ('in_progress', 'In Progress'), ('pending', 'Pending'), ('completed', 'Completed')], default='draft', max_length=20, verbose_name='Stages')),
                ('assignee', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='tasks_api.member')),
            ],
        ),
    ]