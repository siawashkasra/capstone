# Generated by Django 3.2.8 on 2021-11-10 04:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks_api', '0026_alter_team_cover'),
    ]

    operations = [
        migrations.AlterField(
            model_name='team',
            name='cover',
            field=models.ImageField(blank=True, null=True, upload_to='teams'),
        ),
    ]