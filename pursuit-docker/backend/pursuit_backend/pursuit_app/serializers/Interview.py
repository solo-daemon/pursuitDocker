from rest_framework import serializers
from pursuit_app.models import Interview
from pursuit_app.serializers.Interview_Panel import Interview_PanelSerializer

class InterviewSerializer(serializers.ModelSerializer) :

    class Meta :
        model = Interview
        fields = '__all__'

class InterviewDashboardSerializer(serializers.ModelSerializer) :
    panel = Interview_PanelSerializer()
    class Meta : 
        model=Interview
        fields = ['id','start_time','panel']