# Generated by Django 3.2.8 on 2021-10-27 10:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tasks_api', '0012_auto_20211027_1003'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='stage',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='tasks', to='tasks_api.taskstage'),
        ),
    ]
