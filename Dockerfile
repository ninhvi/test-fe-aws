FROM node:18 AS build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

RUN yarn global add serve

CMD ["serve", "-s", "build", "-l", "8081"]
