FROM node:6

RUN mkdir /app
WORKDIR /app

RUN apt-get update && apt-get install -y apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y yarn

COPY ./harden.sh /usr/local/bin/harden.sh
RUN /usr/local/bin/harden.sh

ADD . /app
RUN yarn install --production

ENV NODE_ENV production

EXPOSE 3001

CMD node /app/index.js

