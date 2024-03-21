FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN apk add --no-cache libc6-compat
RUN npm config set registry https://registry.npmmirror.com/;
RUN npm i
RUN npm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
EXPOSE 80