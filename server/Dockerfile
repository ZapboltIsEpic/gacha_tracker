# Builder container to compile typescript
FROM node:lts-alpine AS build
WORKDIR /usr/src/app
 
# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci
 
# Copy the application source
COPY . .
# Ensure tsc is executable
RUN chmod +x ./node_modules/.bin/tsc
# Build typescript
RUN npm run build
 
 
 
FROM node:lts-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY .env .
 
RUN npm ci --production
 
COPY --from=build /usr/src/app/dist /app
 
EXPOSE 8000
CMD [ "node", "src/server.ts"]