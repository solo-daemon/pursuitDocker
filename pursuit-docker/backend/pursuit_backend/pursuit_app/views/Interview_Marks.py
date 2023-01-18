from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from pursuit_app.models import Interview_Marks
from pursuit_app.serializers import Interview_MarksSerializer

class Interview_MarksViewSet(viewsets.ModelViewSet) :
    queryset = Interview_Marks.objects.all()
    serializer_class = Interview_MarksSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [SessionAuthentication ,]