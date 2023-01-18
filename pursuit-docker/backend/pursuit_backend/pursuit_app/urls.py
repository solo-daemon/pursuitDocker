from rest_framework import routers
from django.urls import include, re_path

from pursuit_app.views import *


router=routers.DefaultRouter()
router.register(r'user',UserViewSet,"user")
router.register(r'student',StudentViewSet,"student")
router.register(r'question',QuestionViewSet,"question")
router.register(r'season',SeasonViewSet,"season")
router.register(r'round',RoundViewSet,"round")
router.register(r'section',SectionViewSet,"section")
router.register(r'question',QuestionViewSet,"question")
router.register(r'interview',InterviewViewSet,"interview")
router.register(r'interview_remarks',Interview_RemarksViewSet,"interview-remarks")
router.register(r'interview_marks',Interview_MarksViewSet,"interview-marks")
router.register(r'interview_panel',Interview_PanelViewSet,"interview-panel")
router.register(r'score',ScoreViewSet,"score")
# router.register(r'interview_section',Interview_SectionViewSet,"interview-section")

app_name = 'pursuit_app'
urlpatterns =router.urls 


