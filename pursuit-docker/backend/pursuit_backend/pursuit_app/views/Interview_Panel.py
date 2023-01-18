from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from pursuit_app.models import Interview_Panel
from pursuit_app.serializers import Interview_PanelSerializer

class Interview_PanelViewSet(viewsets.ModelViewSet) :
    queryset = Interview_Panel.objects.all()
    serializer_class = Interview_PanelSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [SessionAuthentication ,]