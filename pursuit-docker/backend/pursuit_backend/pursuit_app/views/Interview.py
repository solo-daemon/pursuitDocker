from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from pursuit_app.models import Interview
from pursuit_app.serializers import InterviewSerializer

class InterviewViewSet(viewsets.ModelViewSet) :
    serializer_class = InterviewSerializer
    queryset = Interview.objects.all()
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [SessionAuthentication ,]
