from django.db import models


class Project(model.Models):
    """ Store data related to the project
    """
    title = model.CharField(max_length=255)
    slug = model.SlugField()

    summary = model.CharField(max_length=255)
    description = model.TextField()

    # TODO: add related customer and order

    # standard fields
    created = model.DateTimeField(auto_now_add=True)
    updated = model.DateTimeField(auto_now=True)
