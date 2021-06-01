FROM mhart/alpine-node:14

RUN mkdir -p /var/www/app

WORKDIR /var/www/app

EXPOSE 4200
