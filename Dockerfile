FROM node:alpine AS builder

RUN apk update --no-cache \
    && apk upgrade

WORKDIR /app

COPY package.json  ./

RUN yarn install 

COPY ./ ./

RUN yarn build

FROM nginx:alpine

RUN apk update --no-cache \
    && apk upgrade

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]