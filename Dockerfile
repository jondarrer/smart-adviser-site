FROM node:alpine

## Install build toolchain, install node deps and compile native add-ons
RUN apk add --no-cache python make g++

WORKDIR /usr/app

# Copy just the package.json and package-lock.json
# as we can cache the dependencies if there are no
# changes.
COPY ./package.json /usr/app/package.json
COPY ./package-lock.json /usr/app/package-lock.json
RUN npm ci

RUN npm -g i firebase-tools

# Copy the whole app source and build it
COPY ./.babelrc.js /usr/app/.babelrc.js
COPY ./.firebaserc /usr/app/.firebaserc
COPY ./firebase.json /usr/app/firebase.json
COPY ./logo.png /usr/app/logo.png
COPY ./current /usr/app/current
COPY ./webpack.config.js /usr/app/webpack.config.js
COPY ./webpack.config.1.js /usr/app/webpack.config.1.js
COPY ./src /usr/app/src
RUN npm run build

# Expose the firebase serve port
EXPOSE 5000

# Auth token for CI
ENV FIREBASE_TOKEN 1//0350CIIG9FDpoCgYIARAAGAMSNwF-L9IrDfdio6gnISk8-ikvfUEWSuaw44oapkOqOr1bt-igokFEmBHUnfaSy7-7e1mjWr-obGY

# Set the default command to execute at launch
CMD ["firebase", "serve", "--only", "hosting", "--debug"]



