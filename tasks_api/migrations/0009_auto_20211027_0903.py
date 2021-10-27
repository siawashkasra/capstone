# Generated by Django 3.2.8 on 2021-10-27 09:03

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tasks_api', '0008_auto_20211026_0604'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='taskstage',
            options={'ordering': ('order',)},
        ),
        migrations.RemoveField(
            model_name='task',
            name='stage',
        ),
        migrations.AddField(
            model_name='taskstage',
            name='tasks',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='tasks_api.task'),
        ),
    ]
