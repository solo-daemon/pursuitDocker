from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated,AllowAny
from rest_framework.authentication import SessionAuthentication
from pursuit_app.serializers import QuestionSerializer
from pursuit_app.models import Question

class QuestionViewSet(viewsets.ModelViewSet) :

    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    # permission_classes = [AllowAny]
    # authentication_classes = [SessionAuthentication ,]