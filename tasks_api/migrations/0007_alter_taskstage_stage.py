# Generated by Django 3.2.8 on 2021-10-26 05:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks_api', '0006_alter_taskstage_stage'),
    ]

    operations = [
        migrations.AlterField(
            model_name='taskstage',
            name='stage',
            field=models.CharField(choices=[('draft', 'Draft'), ('assigned', 'Assigned'), ('in_progress', 'In Progress'), ('pending', 'Pending'), ('completed', 'Completed')], default='draft', max_length=20, verbose_name='Stages'),
        ),
    ]
