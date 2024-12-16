# Sử dụng Node.js làm base image
FROM node:18 AS build

# Thiết lập thư mục làm việc trong container
WORKDIR /app

# Copy package.json và yarn.lock (yarn.lock quan trọng để cài đặt đúng các dependencies)
COPY package.json yarn.lock ./

# Cài đặt dependencies bằng Yarn
RUN yarn install

# Copy mã nguồn của ứng dụng vào container
COPY . .

# Build ứng dụng React
RUN yarn build
