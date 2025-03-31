# Estágio de construção (development/build)
FROM node:22-alpine as builder

WORKDIR /
COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]
