# Estágio de desenvolvimento
FROM node:18-alpine

WORKDIR /src              # Define o diretório de trabalho como /src
COPY package*.json ./     # Copia os arquivos de dependência
RUN npm install           # Instala as dependências
COPY . .                  # Copia todo o conteúdo da pasta local "src" para /src

CMD ["npm", "start"]      # Inicia a aplicação
