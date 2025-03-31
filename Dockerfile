FROM node:22-alpine

WORKDIR /  # Define a raiz como diretório de trabalho
COPY package*.json ./
RUN npm install
COPY . .

CMD ["npm", "start"]
