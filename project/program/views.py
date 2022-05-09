from django.conf import settings
from django.shortcuts import render, redirect, get_object_or_404
from django.views import View

from .models import Presenter, Activity, Stage
from project.utils.url import is_url_same_domain
from project.home.models import PreviousEvent


class SpeakersView(View):
    template_name = 'program/listing.html'

    def get(self, request):
        if settings.TEDXNTUA_SHOW_UNPUBLISHED:
            items = Presenter.speakers.all()
        else:
            items = Presenter.speakers.published()
        host = Presenter.hosts.all()
        #for footer
        previousEvents = PreviousEvent.objects.all()
        return render(request, self.template_name, {
            'listing_type': 'speakers',
            'items': items,
            'placeholders': list(range(4)),
            'host':host,
            'previousEvents':previousEvents,
        })

class PerformersView(View):
    template_name = 'program/listing.html'

    def get(self, request):
        if settings.TEDXNTUA_SHOW_UNPUBLISHED:
            items = Presenter.performers.all()
        else:
            items = Presenter.performers.published()
        host = Presenter.hosts.all()
        #for footer
        previousEvents = PreviousEvent.objects.all()
        return render(request, self.template_name, {
            'listing_type': 'performers',
            'items': items,
            'placeholders': list(range(4)),
            'host':host,
            'previousEvents': previousEvents,
        })

class SideEventsView(View):
    template_name = 'program/listing.html'

    def get(self, request):
        # Side events view is special in that the listing shows the *activities*
        # instead of their presenters
        if settings.TEDXNTUA_SHOW_UNPUBLISHED:
            items = Presenter.side_presenters.all()
        else:
            items = Presenter.side_presenters.published()
        host = Presenter.hosts.all()
        #for footer
        previousEvents = PreviousEvent.objects.all()
        return render(request, self.template_name, {
            'listing_type': 'side_events',
            'items': items,
            'placeholders': list(range(4)),
            'host': host,
            'previousEvents': previousEvents,
        })


class PresenterView(View):
    template_name = 'program/presenter.html'

    def get(self, request, slug=None):
        if slug is None:
            return redirect('index')

        # Add link to previous page if it was on the same domain
        go_back_url = request.META.get('HTTP_REFERER')
        if not is_url_same_domain(request, go_back_url):
            go_back_url = ''

        if settings.TEDXNTUA_SHOW_UNPUBLISHED:
            presenter = get_object_or_404(Presenter, slug=slug)
            activities = presenter.activity_set.all()
        else:
            presenter = get_object_or_404(Presenter, slug=slug,
                    is_published=True)
            activities = presenter.activity_set.published()
        #for footer
        previousEvents = PreviousEvent.objects.all()
        return render(request, self.template_name, {
            'presenter': presenter,
            'activities': activities,
            'go_back_url': go_back_url,
            'previousEvents': previousEvents,
        })

class ScheduleView(View):
    template_name = 'program/schedule.html'

    def get(self, request):
        schedule = Activity.objects.get_schedule(
            unpublished=settings.TEDXNTUA_SHOW_UNPUBLISHED,
        )
        stages = Stage.get_verbose_names()
        #for footer
        previousEvents = PreviousEvent.objects.all()
        return render(request, self.template_name, {
            'schedule': schedule,
            'stages': stages,
            'previousEvents': previousEvents,
        })
