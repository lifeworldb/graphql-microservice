FROM node:14.9

WORKDIR /app

COPY package.json /app

RUN npm install

COPY /dist/. /app

EXPOSE 4000

CMD node main.js
