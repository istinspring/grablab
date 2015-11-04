from hvad.contrib.restframework import TranslatableModelSerializer
from .models import Project


class ProjectsListSerializer(TranslatableModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'summary', 'created', 'updated')


class ProjectDetailsSerializer(TranslatableModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'description', 'created', 'updated')
