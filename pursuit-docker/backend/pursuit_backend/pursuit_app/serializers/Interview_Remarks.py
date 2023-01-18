from pyexpat import model
from rest_framework import serializers
from pursuit_app.models import Interview_Remarks

class Interview_RemarksSerializer(serializers.ModelSerializer) :

    class Meta :
        model = Interview_Remarks
        fields = '__all__'