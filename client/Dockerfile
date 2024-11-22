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
RUN npm run build --configuration=production


# Production stage
FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Clear the Nginx HTML directory
WORKDIR /usr/share/nginx/html
RUN rm -rf *

COPY --from=build /usr/src/app/dist/client/browser /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]