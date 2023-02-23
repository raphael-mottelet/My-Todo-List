from django.urls import path

from . import views


urlpatterns = [
    path('list/', views.ListTodoView.as_view(), name='task_list'),
    path('add/', views.CreateTodoView.as_view(), name='add_todo'),
    path('<pk>/update/', views.UpdateTodoView.as_view(), name='update_todo'),
    path('<pk>/destroy/', views.DestroyTodoView.as_view(), name='destroy_todo'),


]