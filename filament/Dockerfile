# Используем официальный образ Node.js в качестве базового образа
FROM node:latest

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Удаляем package-lock.json и node_modules
RUN rm -rf package-lock.json node_modules

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы из текущего каталога (кроме тех, которые указаны в .dockerignore) в рабочую директорию контейнера
COPY . .

# Собираем проект с помощью Vite
RUN npm run build

# Определяем команду для запуска приложения
CMD ["npm","run","start"]
