# Generated by Django 3.2.8 on 2021-11-03 07:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks_api', '0020_rename_colorl_label_color'),
    ]

    operations = [
        migrations.RenameField(
            model_name='member',
            old_name='photo',
            new_name='avatar',
        ),
    ]
