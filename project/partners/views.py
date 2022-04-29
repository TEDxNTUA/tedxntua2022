from django.conf import settings
from django.shortcuts import render
from django.views import View

from .models import Partner
from project.home.models import PreviousEvent


class PartnersView(View):
    template = 'partners/index.html'

    def get(self, request, *args, **kwargs):
        partners = Partner.objects.get_partners_by_type(
            unpublished=settings.TEDXNTUA_SHOW_UNPUBLISHED,
        )

        for id, category in partners.items():
            print(category)
        return render(request, self.template, {'partners': partners})


        # #for footer
        # previousEvents = PreviousEvent.objects.all()
        # return render(request, self.template, {'partners': partners, 'previousEvents': previousEvents})