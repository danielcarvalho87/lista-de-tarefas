# Estágio de construção (development/build)
FROM node:22-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio de produção (nginx)
FROM nginx:alpine

# Copia os arquivos construídos
COPY --from=builder /app/build /usr/share/nginx/html

# Copia configuração customizada do nginx (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80 (HTTP)
EXPOSE 20300

CMD ["nginx", "-g", "daemon off;"]
