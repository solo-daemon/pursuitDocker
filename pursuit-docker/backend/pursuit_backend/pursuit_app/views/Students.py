from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from pursuit_app.serializers.Student import StudentSerializer
from pursuit_app.models.Student import Student
from pursuit_app.serializers import StudentInterviewDashboardSerializer
from pursuit_app.serializers import StudentTestDashboardSerializer
from rest_framework.decorators import action
from rest_framework.response import Response

class StudentViewSet(viewsets.ModelViewSet) :
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

    @action(
        methods=['GET' ,] ,
        detail = True ,
        name='interview_dashboard',
    )
    def interview_dashboard(self,request,pk) : 
        data = Student.objects.filter(status=pk)
        data_serialized = StudentInterviewDashboardSerializer(data,many=True)
        return Response(data_serialized.data)
    @action(
        methods=['GET' ,] ,
        detail = True ,
        name='test_dashboard',
    )
    def test_dashboard(self,request,pk) :
        data = Student.objects.filter(status=pk)
        data_serialized = StudentTestDashboardSerializer(data,many=True)
        return Response(data_serialized.data)
       

        
