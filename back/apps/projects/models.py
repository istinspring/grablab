# -*- coding: utf-8 -*-
from django.db import models
from django.contrib.postgres.fields import ArrayField

from hvad.models import TranslatableModel, TranslatedFields


class Project(TranslatableModel):
    """ Store data related to the project
    """
    translations = TranslatedFields(
        title = models.CharField(max_length=255, unique=True),
        summary = models.CharField(max_length=255),
        description = models.TextField()
    )
    tags = ArrayField(models.CharField(max_length=30), blank=True)

    # TODO: add related customer and order

    # object creation time and object update time
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return self.safe_translation_getter('title', str(self.pk))
