FROM node:16-alpine AS build

WORKDIR /client

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM nginx

COPY --from=build /client/build /usr/share/nginx/html

EXPOSE 3000

CMD ["npm", "start"]

