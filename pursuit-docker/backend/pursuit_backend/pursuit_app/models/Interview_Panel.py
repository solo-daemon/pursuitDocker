from django.db import models
from pursuit_app.models.Interview import Interview
from pursuit_app.models.Img_Member import Img_Member

class Interview_Panel(models.Model) :

    interview = models.OneToOneField( Interview , on_delete = models.CASCADE , related_name='panel' , null=True ,)
    img_member = models.ForeignKey( Img_Member , on_delete = models.CASCADE , )
    location = models.CharField( 'location' , max_length=255 , )
    status = models.BooleanField( 'status' , default = True , )

    def __str__(self):
        return str(self.id)
   