# Generated by Django 3.2.8 on 2021-11-08 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks_api', '0021_rename_photo_member_avatar'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='cover',
            field=models.CharField(max_length=256, null=True, verbose_name='Cover'),
        ),
        migrations.AlterField(
            model_name='member',
            name='avatar',
            field=models.CharField(max_length=256, verbose_name='Avatar'),
        ),
    ]