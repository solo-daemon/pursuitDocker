from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from pursuit_app.models import Interview_Remarks
from pursuit_app.serializers import Interview_RemarksSerializer

class Interview_RemarksViewSet(viewsets.ModelViewSet) :
    queryset = Interview_Remarks.objects.all()
    serializer_class = Interview_RemarksSerializer
    # permission_classes = [IsAuthenticated]
    # authentication_classes = [SessionAuthentication ,]