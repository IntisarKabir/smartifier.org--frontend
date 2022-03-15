# Dockerfile

# base image
FROM node:alpine

WORKDIR /home/intisarkabir/workspace/smartifier-frontend
COPY . ./

# install dependencies
RUN npm install

# start app
CMD npm run dev