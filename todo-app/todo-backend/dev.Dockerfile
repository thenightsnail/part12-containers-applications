FROM node:16

WORKDIR /usr/src/app

COPY . . 

RUN npm install

ENV PORT=3030

CMD npm run dev
