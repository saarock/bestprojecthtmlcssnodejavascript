from django.shortcuts import render

# Create your views here.


class Alltehhtml:
    def index(self, request):
        try:
            print('yes')
            return render(request, 'index.html')
        except Exception as e:
            print(e)



    def handel_form(self, request):
        try:
            pass
        except Exception as e:
            print('handeling form')
            ger_all_message = request.POST
        


# Calling the class
alltehhtml = Alltehhtml()
