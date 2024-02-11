from .models import Category, Name, Reference
from rest_framework import serializers

class RefSerializer(serializers.ModelSerializer):

    class Meta:
        model = Reference
        fields = '__all__'

class NameSerializer(serializers.ModelSerializer):
    references = RefSerializer(many=True, read_only=True)
    
    class Meta:
        model = Name
        fields = '__all__'

class CatSerializer(serializers.ModelSerializer):
    testNames = NameSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = '__all__'