1. nstall:
   npm install -g json-server
   json-server --version
   1.0.0-beta.3
   json-server -w src/db.json

npm i styled-components prop-types react-hook-form yu react-router redux redux-thunk react-redux

2. Подключение font-awesome

3. Подготовка БД - bd.json

Схема проекта: БД, сущности:

1. Область хранения базы данных:

   - база данных json-server
   - BFF
   - redux store

2. Сущности приложения:

   - пользователь: БД (список пользователей), BFF (сессия текущего), store (отображение в браузере)
   - роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), store (использование на клиенте)
   - статья: БД (список статей), store (отображение в браузере)
   - комментарии: БД (список комментариев), store (отображение в браузере)

3. Таблица БД:

   - пользователи: -users: id / login / password / registered_at / role_id
   - роли пользователя: -roles: id / name
   - статьи: -posts: id / title / image_url / content / published_at
   - комментрии: -comments: id / author_id / post_id / content

4. Схема состояния на BFF:

   - ссесия текущего пользователя: login / password / role

5. Схема для redux store:
   - user: id / login / role_id
   - posts: array post: id / title / imageUrl / publishedAt / commentsCount
   - post: id / title / imageUrl / content / publishedAt / comments : array comment: id / author / content / publishedAt
   - users: array user: id / login / registeredt / role
