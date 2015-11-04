from rest_framework import viewsets, serializers
from .models import Project
from .serializers import (
    ProjectsListSerializer, ProjectDetailsSerializer)


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.filter(visible=True)
    serializers = {
        'default': ProjectDetailsSerializer,
        'list': ProjectsListSerializer,
        'retrieve': ProjectDetailsSerializer,
    }

    def get_serializer_class(self):
        cls = self.serializers.get(self.action, self.serializers['default'])
        return cls
