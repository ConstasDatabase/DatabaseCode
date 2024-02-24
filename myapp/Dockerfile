FROM node:17

WORKDIR /frontend

COPY package.json /frontend/

RUN npm install

COPY . /frontend/

#RUN npm run build

EXPOSE 80/tcp

CMD ["npm", "start"]