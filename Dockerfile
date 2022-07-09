FROM node:16.13.1

RUN mkdir -p /nest
ADD . /nest
WORKDIR /nest

RUN npm i -g @nestjs/cli