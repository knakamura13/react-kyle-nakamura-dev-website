from node:14

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundel app source
COPY . /usr/src/app/

EXPOSE 3000
CMD ["npm", "start"]
