# Generated by Django 3.2.8 on 2021-11-18 06:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks_api', '0028_auto_20211116_1449'),
    ]

    operations = [
        migrations.AddField(
            model_name='task',
            name='start_date',
            field=models.DateField(null=True, verbose_name='Start Date'),
        ),
    ]
