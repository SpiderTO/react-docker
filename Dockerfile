FROM node:18-alpine

WORKDIR /app

COPY . /app

RUN npm ci 

RUN npm run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "dist"]
