from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import action


from pursuit_app.models import Round
from pursuit_app.serializers import RoundSerializer

class RoundViewSet(viewsets.ModelViewSet) :
    queryset = Round.objects.all()
    serializer_class = RoundSerializer

    @action(
        methods=['GET' ,] ,
        detail = False ,
        url_name = 'round-info' ,
        url_path = 'round_info' ,
    )
    def RoundInfo(self,request) : 
        pass
    

    
