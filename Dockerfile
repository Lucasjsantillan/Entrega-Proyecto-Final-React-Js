#Etapa de building de la aplicación
FROM node:latest as builder

WORKDIR /app

COPY package*json ./

RUN npm install

COPY . .

RUN npm run build

#Etapa de servir la aplicación
FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

EXPOSE 80