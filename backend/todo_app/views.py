from django.shortcuts import render

from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView

from .models import Todo
from .serializers import TodoSerializer

class ListTodoView(ListAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer


class CreateTodoView(CreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class UpdateTodoView(UpdateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class DestroyTodoView(DestroyAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer

class TodoDetails(RetrieveAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer