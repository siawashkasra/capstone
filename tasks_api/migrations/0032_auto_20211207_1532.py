# Generated by Django 3.2.8 on 2021-12-07 15:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('tasks_api', '0031_auto_20211121_0906'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='about',
            field=models.TextField(null=True, verbose_name='About'),
        ),
        migrations.AlterField(
            model_name='member',
            name='avatar',
            field=models.ImageField(blank=True, null=True, upload_to='members'),
        ),
        migrations.AlterField(
            model_name='task',
            name='assignee',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='tasks', to='tasks_api.member'),
        ),
    ]
