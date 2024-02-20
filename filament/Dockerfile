# Используем официальный образ Node.js в качестве базового образа
FROM node:latest

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости с учетом кэша
RUN npm install

# Копируем только необходимые файлы
COPY . .

# Собираем проект с помощью Vite
RUN npm run build

EXPOSE 80

# Определяем команду для запуска приложения
CMD ["npm", "run", "start"]
