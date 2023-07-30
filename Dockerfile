FROM node:14
WORKDIR /usr/src/app
COPY  . /usr/src/app
RUN npm install 
RUN npm run build
EXPOSE 3000
ENTRYPOINT ["npm", "run", "dev"]