from django.db import models
from versatileimagefield.fields import VersatileImageField
from versatileimagefield.image_warmer import VersatileImageFieldWarmer

#footer previous events
class PreviousEvent(models.Model):
    image = VersatileImageField(upload_to='prevEventsPhotos/', default=None)
    link = models.URLField()
    year = models.IntegerField()