from node:15

WORKDIR /usr/src/app

COPY . .
COPY package*.json ./

RUN npm install

EXPOSE 8080
CMD ["node", "app.js"]
