from hvad.contrib.restframework import TranslatableModelSerializer
from .models import Project


class ProjectSerializer(TranslatableModelSerializer):
    class Meta:
        model = Project
        fields = ('title', 'description', 'tags', 'created', 'updated')
