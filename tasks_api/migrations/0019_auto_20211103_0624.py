# Generated by Django 3.2.8 on 2021-11-03 06:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks_api', '0018_auto_20211103_0622'),
    ]

    operations = [
        migrations.AlterField(
            model_name='label',
            name='colorl',
            field=models.CharField(max_length=256, verbose_name='Color'),
        ),
        migrations.AlterField(
            model_name='label',
            name='label',
            field=models.CharField(max_length=256, verbose_name='Label'),
        ),
        migrations.AlterField(
            model_name='label',
            name='value',
            field=models.CharField(max_length=256, verbose_name='Value'),
        ),
    ]
