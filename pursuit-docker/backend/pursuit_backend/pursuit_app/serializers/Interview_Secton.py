from pyexpat import model
from rest_framework import serializers
from pursuit_app.models import Interview_Section

class Interview_SectionSerializer(serializers.ModelSerializer) :

    class Meta :
        model = Interview_Section
        fields = '__all__'