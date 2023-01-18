from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from pursuit_app.models import Interview_Panel

class Interview_PanelSerializer(serializers.ModelSerializer) :

    class Meta :
        model = Interview_Panel
        fields = '__all__'