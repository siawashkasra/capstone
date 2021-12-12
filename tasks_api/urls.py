from django.urls import path, include
from rest_framework import routers
from tasks_api import views
from django.conf.urls.static import static
from django.conf import settings
from rest_framework.authtoken import views as v


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet, basename='users')
router.register(r'groups', views.GroupViewSet)
router.register(r'members', views.MemberViewSet)
router.register(r'teams', views.TeamViewSet, basename='teams')
router.register(r'tasks', views.TaskViewSet, basename='tasks')
router.register(r'task-stages', views.TaskStageViewSet, basename='task-stages')
router.register(r'labels', views.LabelViewSet, basename='labels')


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.


urlpatterns = [
    path('api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-token-auth/', v.obtain_auth_token)
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
