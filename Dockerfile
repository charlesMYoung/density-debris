FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN apk add --no-cache libc6-compat
RUN yarn config set registry https://registry.npmmirror.com/;
RUN yarn
RUN yarn run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80