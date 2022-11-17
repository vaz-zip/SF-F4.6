Frontend:
- webpack
- react, установленный инструментом create-react-app
- react-router 
- взаимодействие с backend сервером django при помощи HTTP клиента axios  
Backend:
- django
- библиотека django rest framework 
- swagger 
 

Для работы приложения необходимы пакеты:  
pip install djangorestframework  
pip install django-cors-headers  
pip install coreapi pyyaml  
pip install django-rest-swagger  


В консоли переходим в директорию проекта и запускаем:  
python manage.py runserver
Во втором терминале производим установку и запуск React, Webpack

Клонировать репозиторий  
Восстановить модули: `npm install`   
Запуск: `npm start`  

API проекта будет по адресам:  
http://127.0.0.1:8000/api/openapi - page schema openapi  
http://127.0.0.1:8000/api/swagger-ui/ - page swagger-ui  
http://127.0.0.1:8000/api/categories/ - список всех категорий блюд  
http://127.0.0.1:8000/api/dishes/?category=Салаты -  Пример запроса блюд в категории 'Салаты'  
http://127.0.0.1:8000/api/recipe/ - список всех рецептов блюд  
http://127.0.0.1:8000/api/recipe/id - Рецепт блюда id  





  


