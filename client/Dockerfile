FROM node:16-alpine 

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm start

#FROM nginx

#COPY --from=build /client/build /usr/share/nginx/html

EXPOSE 3000

CMD ["npm", "start"]

