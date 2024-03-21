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
    refLink = models.TextField() # URL or DOI
    refYear = models.TextField() # Date Published
    refFinderEmail = models.TextField() # Who found/wrote the reference
    refTitle = models.TextField() # Article Title
    refPub = models.TextField() # Publisher Name
    refVol = models.TextField() # Volume
    refIssue = models.TextField() # Issue
    refPages = models.TextField() # Pages
    refAuthors = models.TextField() # String of all authors associated w/ reference
    refType = models.TextField() # Type of reference
    references_id = models.ForeignKey(Name, related_name='references', on_delete=models.CASCADE, default=2)
    def __str__(self):
        return self.ref

# Create your models here.
