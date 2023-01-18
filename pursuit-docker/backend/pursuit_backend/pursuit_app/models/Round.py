from django.db import models
from pursuit_app.models.Season import Season

class Round(models.Model) :

    TEST = 'T'
    INTERVIEW = 'I'
    PROJECT = 'P'
    ROUND_TYPE = [
        (TEST,'Test'),
        (INTERVIEW,'Interview'),
        (PROJECT,'Project'),
    ]

    round_name = models.CharField( 'round name' , max_length = 255 , )
    round_type = models.CharField( 'round type' , max_length = 1 , choices = ROUND_TYPE,default=INTERVIEW , )
    season = models.ForeignKey( Season,on_delete = models.CASCADE , related_name='rounds')

    def __str__(self) :
        return self.round_name