# Build stage
FROM node:lts-alpine AS build
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci

# Copy the application source
COPY . .
# Build the application
RUN npm run build

# Production stage
FROM nginx:stable-alpine
COPY nginx.config /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]