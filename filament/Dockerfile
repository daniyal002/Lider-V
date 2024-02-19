# Используем базовый образ Node.js с Alpine Linux
FROM node:20-alpine

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем зависимости и файлы package.json/yarn.lock
COPY package*.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем все остальные файлы проекта в контейнер
COPY . .

# Собираем проект с помощью Vite
RUN yarn build

# Запускаем сервер Vite в режиме production
CMD ["yarn", "start"]
