FROM node:16-alpine

WORKDIR /app

RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      freetype-dev \
      harfbuzz \
      ca-certificates \
      ttf-freefont

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true
ENV SCULLY_PUPPETEER_EXECUTABLE_PATH /usr/bin/chromium-browser 

EXPOSE 4200
EXPOSE 1668
EXPOSE 1864