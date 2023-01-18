from django.db import models
from pursuit_app.models.Interview import Interview
from pursuit_app.models.Img_Member import Img_Member

class Interview_Section(models.Model) :

    interview = models.ForeignKey( Interview , on_delete = models.CASCADE , related_name='section' , null=True ,)
    section_name =  models.CharField( 'section name' , max_length=255 , )

    def __str__(self):
        return str(self.section_name)