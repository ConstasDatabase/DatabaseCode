from django.shortcuts import render
from rest_framework import generics
from .models import Category, Name, Reference
from .serializer import CatSerializer, NameSerializer, RefSerializer
from .models import Name, Reference, Category



class CatViewSet(generics.ListCreateAPIView):
    serializer_class = CatSerializer
    queryset = Category.objects.all()
    """def perform_create(self, serializer):
        instance = serializer.save()
        serialized_data = self.serializer_class(instance).data
        return Response(serialized_data)

    """



class NameViewSet(generics.ListCreateAPIView):
    serializer_class = NameSerializer
    queryset = Name.objects.all()
    """def perform_create(self, serializer):
        instance = serializer.save()
        serialized_data = self.serializer_class(instance).data
        return Response(serialized_data)"""




class RefViewSet(generics.ListCreateAPIView):
    serializer_class = RefSerializer
    queryset = Reference.objects.all()

# Create your views here.
