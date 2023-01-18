from django.db import models

class Season( models.Model ) :

    DEVELOPER = 'D'
    DESIGNER = 'd'
    SEASON_TYPE=[
        (DEVELOPER,'Developer') ,
        (DESIGNER,'Designer') ,
    ]

    season_year = models.PositiveIntegerField( 'season year' , )
    season_name =models.CharField( 'season name' , max_length = 255 , )
    season_type =models.CharField( 'season type',max_length=1 , choices = SEASON_TYPE,default=DEVELOPER , )

    def __str__(self) :
        return self.season_name