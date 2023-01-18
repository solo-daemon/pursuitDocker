from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from pursuit_app.serializers import SectionSerializer
from pursuit_app.models import Section

class SectionViewSet (viewsets.ModelViewSet) :
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
