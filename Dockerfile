FROM node:argon

# create app directory 
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app 

#install botkit 
RUN npm install botkit --save 
COPY robot.js /usr/src/app/ 
COPY package.json /usr/src/app/ 

#set startup commands
CMD ["node", "robot"]