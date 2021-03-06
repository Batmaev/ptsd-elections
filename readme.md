Взлом выборов главы студсовета 
===
Контекст 
---
В декабре 2020 были выборы главы студсовета в студенческом сообществе Physical Studies & Research. Это новое название ФПФЭ МФТИ — факультета, на котором я учусь. 

Чтобы проголосовать на этих выборах, нужно было заполнить Google Форму. Она открывалась, только если ты вошёл в аккаунт Google, выданный университетом. 

МФТИ выдаёт всем студентам почту в домене @phystech.edu. 

Исходная информация 
---
Вот пост с итогами выборов https://vk.com/wall-38829279_2675    
К нему прикреплён файл, в котором есть список всех голосов. 

Голоса зашифрованы: вместо электронной почты там написали "идентификационный номер избирателя", который выглядит, как случайный набор букв и цифр.

На самом деле это SHA-1 хеш кусочка адреса электронной почты. Как я до этого додумался:
 1. Я посчитал число символов в "номере избирателя" и загуглил, какой алгоритм хеширования выдаёт строки длиной 40 символов
 2. Я знал, что моя почта 100% есть в этом файле, потому что я сам тоже голосовал. Я попробовал с поиграться со своей почтой, пока не получил хеш, который есть в таблице. Для этого нужно было отбросить часть после "@", то есть вместо строки "batmaev.vb@phystech.edu" хешировать строку "batmaev.vb"

Но этого было недостаточно, чтобы расшифровать все остальные голоса, потому что хеш-функции не обращаются.

Сам взлом
---
Но можно перебрать почты всех студентов, вычислить от них хеш и посмотреть, есть ли такой хеш в файле со списком голосов.

Я так и сделал, в итоге получилась таблица, где напротив каждого голоса стоит ФИО и электронная почта. 

Голосование больше не является тайным. 

Результаты — в файле Decrypted.xlsx.

Откуда мы взяли почты всех студентов для полного перебора
---
Взяли с contacts.google.com

Если зайти туда с @phystech.edu-аккаунта, то там будет раздел "Каталог" — это список всех @phystech.edu-аккаунтов. Их около 20 тысяч.

Оказалось, что проще всего их выгрузить, если добавить их в свои "Контакты", потому что в Google Контактах есть кнопка "экспортировать контакты", а кнопки "экспортировать каталог" почему-то нет.  
При экспорте получается файл csv.

Чтобы добавить аккаунт из "Каталога" к себе в "Контакты", нужно кликнуть на него и таким образом выделить.

[@lesha1337](https://github.com/lesha1337) написал скрипт, который автоматически кликает на чекбоксы в списке аккаунтов. Это было непросто, потому что этот список по чуть-чуть подгружается при прокручивании и никогда не загружается полностью.

Ну и вот, мы кликнули на все аккаунты, добавили их к себе в "Контакты", скачали, вычислили хеши и нашли соответствия