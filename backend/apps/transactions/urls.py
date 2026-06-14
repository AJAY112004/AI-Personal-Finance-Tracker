from django.urls import path
from . import views

urlpatterns = [
    path('god/', views.god, name='god'),
]