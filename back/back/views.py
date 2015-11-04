# -*- coding: utf-8 -*-
from django.views.generic import TemplateView


class IndexPageView(TemplateView):
    template_name = "index2.html"

    def get_context_data(self, **kwargs):
        context = super(IndexPageView, self).get_context_data(**kwargs)
        return context
