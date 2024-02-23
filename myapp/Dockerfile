FROM node:17

WORKDIR /frontend

COPY package.json /frontend/

RUN npm install

COPY . /frontend/

#RUN npm run build

EXPOSE 443

CMD ["npm", "start"]