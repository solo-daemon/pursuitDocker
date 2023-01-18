from rest_framework import serializers
from pursuit_app.models import Section
from pursuit_app.models import Round

class SectionSerializer(serializers.ModelSerializer) :

    
    class Meta :
        model = Section
        fields = '__all__'
