from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import action
from pursuit_app.models import Season
from pursuit_app.models import Round
from pursuit_app.serializers import SeasonSerializer
from pursuit_app.serializers import SeasonInfoSerializer
from pursuit_app.serializers import RoundSerializer
from rest_framework.response import Response

class SeasonViewSet(viewsets.ModelViewSet) :
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer

    
    @action(
        methods=['get',] ,
        detail = True ,
        name='season_info'
    )   
    def season_info(self, request, pk) :
        print('test')
        data = Round.objects.filter(season=pk)
        data_serialized = RoundSerializer(data,many=True)
        return Response(data_serialized.data)

    @action(
        methods=['get',],
        detail = True ,
        name='season_modal',
    )
    def season_modal(self,request,pk=None,**kwargs) :
        data = Season.objects.filter(id=pk)
        data_serialized = SeasonInfoSerializer(data,many=True)
        return Response(data_serialized.data)
