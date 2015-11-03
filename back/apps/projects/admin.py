from django.contrib import admin
from hvad.admin import TranslatableAdmin

from apps.projects.models import Project


class ProjectAdmin(TranslatableAdmin):
    # list_display = ['title', 'summary']
    ordering = ['created']


admin.site.register(Project, ProjectAdmin)
