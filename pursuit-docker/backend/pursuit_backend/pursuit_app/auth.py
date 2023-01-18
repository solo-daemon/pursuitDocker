from django.contrib.auth import backends
from django.contrib.auth import get_user_model
from pursuit_app.models import Img_Member

class UserBackend(backends.ModelBackend) :


    def authenticate(self, request , user_json , ) :
        if user_json is None :
            raise ValueError("user has not been provided")
        User = get_user_model()
        print("hello")
        print(user_json)
        try :
            existing_user = User.objects.get(
                enrollment_no = user_json["username"]
            )
            print("hello1")
        except User.DoesNotExist :

            is_not_imgian =True

            for x in user_json["person"]["roles"]:
               if(x["role"]=='Maintainer') :
                if(x["activeStatus"]=='ActiveStatus.IS_ACTIVE'):
                    is_not_imgian = False
            
            if  is_not_imgian :
                return None
            else :

                enrollment_no = user_json["username"]
                name = user_json["person"]["fullName"]
                year = user_json["student"]["currentYear"]
                is_staff=False
                if(user_json["student"]["currentYear"]>2) :
                    is_staff=True
                
                new_user = User.objects.create(
                    enrollment_no = enrollment_no ,
                    name = name ,
                    year = year ,
                    is_staff=is_staff ,
                    
                )
                
                print(new_user)
                user_ = User.objects.get(
                    enrollment_no = user_json["username"]
                )
                return user_

        fields_changed = False
        if existing_user.year != user_json["student"]["currentYear"] :
            existing_user.year = user_json["student"]["currentYear"]
            fields_changed = True
        
        if fields_changed :
            existing_user.save()
        
        return existing_user


    def get_user(self, user_id: int):
        User = get_user_model()
        try :
            User.objects.get(enrollment_no = user_id)
        except User.DoesNotExist :
            return None