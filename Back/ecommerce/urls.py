from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenVerifyView
)
from django.conf.urls.static import static
from django.conf import settings
from api.views import create_user, ClientesView  

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    path('create_user/', create_user, name='create_user'), 
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)








#SuperUser
#Manu
#Manu082723.


#User
#Manuzinha@0193oi2.
#12345oi.