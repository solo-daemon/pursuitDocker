from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from pursuit_app.models import Interview_Section
from pursuit_app.serializers import Interview_SectionSerializer

class Interview_SectionViewSet(viewsets.ModelViewSet) :
    queryset = Interview_Section.objects.all()
    serializer_class = Interview_SectionSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [SessionAuthentication ,]