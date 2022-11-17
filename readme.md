## Задание:
1. Создайте фуллстек-приложение с рецептами блюд, которое будет использовать Django Rest Framework, автодокументацию 
OpenAPI+Swagger и react-router.
2. Давать пользователю возможность создавать рецепты не нужно: достаточно распределить их по категориям и отображать 
в клиенте и в API.
3. Где отображать документацию API — решать вам.
4. У каждого блюда и каждой категории должна быть своя страница: с главной страницы можно перейти на любую из категорий, 
а из категории — на любой рецепт этой категории.

## В проекте применены
Frontend:
- сборщик пакетов webpack
- react, установленный инструментом create-react-app
- библиотека для маршрутизации react-router 
- взаимодействие с backend сервером django при помощи HTTP клиента axios  
Backend:
- сервер на основе фреймворка django
- библиотека django rest framework для организации api интерфейса
- инструмент для генерации документации к эндпоинтам swagger
- база данных SQLite

## Установка и запуск среды разработки backend Django

python: 3.9.7  
django: 4.0.3  
 

Затем инсталлируем необходимые для работы проекта пакеты:  
pip install djangorestframework  
pip install django-cors-headers  
pip install coreapi pyyaml  
pip install django-rest-swagger  


В консоли переходим в директорию проекта и стартуем проект:  
python manage.py runserver

API проекта будет доступно по адресам:  
http://127.0.0.1:8000/api/openapi - page schema openapi  
http://127.0.0.1:8000/api/swagger-ui/ - page swagger-ui  
http://127.0.0.1:8000/api/categories/ - список всех категорий блюд  
http://127.0.0.1:8000/api/dishes/?category=Салаты -  Пример запроса блюд в категории 'Салаты'  
http://127.0.0.1:8000/api/recipe/ - список всех рецептов блюд  
http://127.0.0.1:8000/api/recipe/id - Рецепт блюда id  


## Установка и запуск среды разработки frontend React + Webpack

Клонировать репозиторий  
Восстановить модули: `npm install`   
Запуск СЕРВЕРА DevServer: `npm start`  


  


