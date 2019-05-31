FROM node:carbon

WORKDIR /usr/src/app

COPY ./package*.json ./

RUN npm install -g rxjs@6.0.0
RUN npm install -g @angular/cli@6.0.2 --unsafe


RUN npm install

COPY . .

CMD ng serve --host 0.0.0.0 --port 4200 --disable-host-check 




