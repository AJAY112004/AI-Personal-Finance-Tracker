from django.http import HttpResponse

def bye(request):
    return HttpResponse("Add Function")