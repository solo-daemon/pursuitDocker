from rest_framework import serializers
from pursuit_app.models import Round
class RoundSerializer(serializers.ModelSerializer) :

    class Meta :
        model = Round
        fields = '__all__'

