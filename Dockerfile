FROM node:slim
WORKDIR /app
COPY  . /app
RUN npm install
EXPOSE 3000
CMD node app.js


# FROM node:slim
# WORKDIR /app
# COPY package*.json ./
# RUN npm install --only=production
# COPY . .
# EXPOSE 3000
# CMD ["node", "app.js"]

