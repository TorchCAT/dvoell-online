FROM node:16
WORKDIR /aue/
RUN npm install -g nodemon
COPY package.json package-lock.json ./
RUN npm install
COPY . .
CMD nodemon app.js
# https://hub.docker.com/_/node
# https://github.com/excalidraw/excalidraw/blob/master/Dockerfile
# https://docs.docker.com/engine/reference/builder/
