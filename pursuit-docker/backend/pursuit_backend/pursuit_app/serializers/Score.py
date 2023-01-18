from rest_framework import serializers
from pursuit_app.models import Scores

class ScoreSerializer(serializers.ModelSerializer) :

    class Meta :
        model = Scores
        fields = '__all__'

