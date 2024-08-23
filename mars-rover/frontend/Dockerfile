FROM node:17
WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
EXPOSE 8080
CMD ["npm", "run", "serve"]
