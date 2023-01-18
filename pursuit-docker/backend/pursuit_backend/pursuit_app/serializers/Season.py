from rest_framework import serializers
from . Round import RoundSerializer
from pursuit_app.models import Season
class SeasonSerializer (serializers.ModelSerializer) :

    class Meta :
        model = Season
        fields = '__all__'

class SeasonInfoSerializer (serializers.ModelSerializer) :

    rounds= RoundSerializer(many=True)
    class Meta :
        model = Season
        fields = '__all__'
