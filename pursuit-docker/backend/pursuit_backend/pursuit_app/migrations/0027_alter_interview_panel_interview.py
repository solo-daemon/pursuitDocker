# Generated by Django 4.1.1 on 2022-12-01 11:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pursuit_app', '0026_alter_interview_start_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interview_panel',
            name='interview',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='panel', to='pursuit_app.interview'),
        ),
    ]
