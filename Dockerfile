FROM node:argon

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# import app source & install dependencies
COPY ./src /usr/src/app/
RUN npm install

EXPOSE 8080
CMD [ "npm", "start" ]
