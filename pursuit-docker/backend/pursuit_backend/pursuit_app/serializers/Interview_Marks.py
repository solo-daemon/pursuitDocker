from rest_framework import serializers
from pursuit_app.models import Interview_Marks

class Interview_MarksSerializer(serializers.ModelSerializer) :

    class Meta :
        model = Interview_Marks
        fields = '__all__'