<h1 align="center">Центр Лидеров <img src="https://cdn-icons-png.flaticon.com/512/3135/3135815.png" alt="Logo" height="50"></h1>

## Описание
<p align="justify">Рекрутеры в процессе отбора кандидатов должны постоянно отслеживать их прогресс, что при большом количестве соискателей становится затруднительным без специальных программных продуктов. Наш сервис по трекингу кандидатов - Центр Лидеров решает всю боль рекрутера, так как предоставляет возможность добавления кандидатов, изменения их статуса, избирательного отслеживания соискателей по категориям, а также загрузки более подробной информации в формате pdf со сторонних ресурсов, что значительно ускоряет процесс рекрутинга и делает его более прозрачным.<p>

## Демонстрация работы
<img src="/LeadersCenter.gif" alt="Logo">

## Используемые технологии

![HTML](https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&amp;logo=HTML5&amp;logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6.svg?style=flat&amp;logo=CSS3&amp;logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3.svg?style=flat&amp;logo=Bootstrap&amp;logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&amp;logo=JavaScript&amp;logoColor=black)
![React](https://img.shields.io/badge/React-61DAFB.svg?style=flat&amp;logo=React&amp;logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933.svg?style=flat&amp;logo=Node.js&amp;logoColor=white)
![Express](https://img.shields.io/badge/Express-339933.svg?style=flat&amp;logo=Express&amp;logoColor=000000)
![Sequelize](https://img.shields.io/badge/Sequelize-222222.svg?style=flat&amp;logo=Sequelize&amp;logoColor=61DAFB)
![PostgreSQL](https://img.shields.io/badge/PostgresSQL-DCDCDC.svg?style=flat&amp;logo=PostgreSQL&amp;logoColor=4169E1)

## Установка и запуск
  
<p align="justify">После клонирования репозитория, необходимо создать файл .env, который необходимо:<p>
  
  - заполнить согласно инструкций из файла .env_example

```
npm install
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
npm run dev
```

## Развитие проекта

- добавить возможность добавления комментариев кандидату от себя, а также от собеседующих лиц
- добавить возможность рассылки уведомлений кандидатам о смене статуса
- полностью переписать проект на React
