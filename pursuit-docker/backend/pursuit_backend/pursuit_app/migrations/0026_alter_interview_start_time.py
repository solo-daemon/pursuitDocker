# Generated by Django 4.1.1 on 2022-11-29 09:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pursuit_app', '0025_alter_interview_marks_interview_score'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interview',
            name='start_time',
            field=models.PositiveBigIntegerField(verbose_name='start time'),
        ),
    ]
