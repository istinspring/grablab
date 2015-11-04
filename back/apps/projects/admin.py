from django.contrib import admin
from django.utils.html import format_html
from hvad.admin import TranslatableAdmin

from apps.projects.models import Project


class ProjectAdmin(TranslatableAdmin):
    list_display = [
        'translated_title',
        'translated_summary',
        'available_translations'
    ]
    ordering = ['created']

    def translated_title(self, obj):
        return obj.title

    def translated_summary(self, obj):
        return obj.summary

    def available_translations(self, obj):
        return format_html(self.all_translations(obj))

    available_translations.short_desciption = 'Available Translations'
    available_translations.allow_tags = True


admin.site.register(Project, ProjectAdmin)
