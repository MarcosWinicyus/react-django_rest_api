from leads.models import Lead
from rest_framework import viewsets, permissions
from .serializers import LeadSearializer

# Lead Viewset
class LeadViewset( viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = LeadSearializer

    def get_queryset(self):
        return self.request.user.leads.all()
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

 