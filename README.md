# Задача: Реализовать приложение учета филиальной сети предприятия.
## Сущности:
    • Головная организация
    • Филиал

## Атрибуты сущностей:

## Головная организация:
    • Полное наименование
    • Сокращенное наименование
    • ИНН
    • КПП
    • Учредитель(ФИО)
    • Адрес
    • Телефон

## Филиал:
    • Адрес офиса
    • Телефон
    • Должностное лицо(ФИО)

## Интерфейсы:
    1. Форма авторизации
    2. Просмотр организаций в виде списка
    3. Просмотр организаций в виде дерева
    4. Форма добавления / редактирования головной организации
    5. Форма добавления / редактирования филиального подразделения

## Роли и права:
Предусмотреть 2 роли пользователя, "администратор" и "сотрудник". Роль "сотрудник" - имеет права только на просмотр структуры без прав управления, "администратор" - полный уровень прав.

## Тех. требования: 
Реализовать SPA на Angular2+. В качестве хранилища использовать какой либо вид storage(mobx, ngrx). Отправка запросов на сервер не предусмотрена, имитировать отправку запроса без реальных вызовов.