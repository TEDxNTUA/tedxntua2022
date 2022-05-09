from django.conf import settings
from django.shortcuts import render
from django.views import View

from project.team.models import TeamMember
from project.home.models import PreviousEvent

import re

def mobile (request):
    """ Return True if the request comes from a mobile device. """

    MOBILE_AGENT_RE = re.compile(r".*(iphone|mobile|androidtouch)", re.IGNORECASE)

    if MOBILE_AGENT_RE.match(request.META['HTTP_USER_AGENT']):
        return True
    else:
        return False

class AboutView(View):
    template_name = 'about/index.html'

    def get(self, request):
        if settings.TEDXNTUA_SHOW_UNPUBLISHED:
            members = TeamMember.objects.all()
        else:
            members = TeamMember.objects.published()

        teams = TeamMember.objects.values('team').distinct()
        previousEvents = PreviousEvent.objects.all()

        return render(request, self.template_name, {
            'members': members,
            'previousEvents': previousEvents,
            'teams': teams,
            'is_mobile': mobile(request),
        })
