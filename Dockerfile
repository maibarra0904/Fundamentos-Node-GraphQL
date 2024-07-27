FROM node:20.11.1-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4000

CMD ["npm", "start"]