from django.db import models

class Category(models.Model):
    category = models.TextField()
    def __str__(self):
        return self.category

class Name(models.Model):
    name = models.TextField()
    testNames_id = models.ForeignKey(Category, related_name='testNames', on_delete=models.CASCADE, default=1)
    def __str__(self):
        return self.name

class Reference(models.Model):
    refLink = models.TextField()
    refYear = models.TextField()
    refFinderEmail = models.TextField()
    refTitle = models.TextField()
    refPub = models.TextField()
    refVol = models.TextField()
    refPages = models.TextField()
    refAuthors = models.TextField() # Must put in as APA format
    references_id = models.ForeignKey(Name, related_name='references', on_delete=models.CASCADE, default=2)
    def __str__(self):
        return self.ref

# Create your models here.
