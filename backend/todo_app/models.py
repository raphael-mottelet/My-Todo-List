from django.db import models


class Todo(models.Model):
    title = models.CharField(max_length=200, blank=False)
    description = models.CharField(max_length=200, blank=True)
    status = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ('created',)

    class Meta:
        ordering = ('status', '-updated',)