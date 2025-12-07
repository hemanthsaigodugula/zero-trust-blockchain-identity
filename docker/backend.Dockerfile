FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install || true
COPY . .
CMD ["npm", "run", "dev"]
