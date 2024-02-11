FROM node:17

WORKDIR /frontend

COPY package.json /frontend/

RUN npm install

COPY . /frontend/

EXPOSE 7990

CMD ["npm", "start"]