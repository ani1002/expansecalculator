FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build Vite app
RUN npm run build

# Install static file server
RUN npm install -g serve

EXPOSE 8080

CMD ["sh", "-c", "serve -s dist -l $PORT"]