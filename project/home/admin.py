from django.contrib import admin
from .models import *
# Register your models here.

@admin.register(PreviousEvent)
class PreviousEventsAdmin(admin.ModelAdmin):
    pass