from django.db import models

# Create your models here.
class handel_form(models.Model):
    first_name = models.CharField(max_length=400)
    last_name = models.CharField(max_length=400)
    email = models.EmailField()
    passwprd = models.CharField(max_length=400)
