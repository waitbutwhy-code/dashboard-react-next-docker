# Get base image for ubuntu
FROM ubuntu:16.04

# Update package cache and install curl
RUN apt-get -qq -y update
RUN apt-get -qq -y install curl

# Install and configure nginx
RUN apt-get -y install nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Create app directory
RUN mkdir -p /srv/syncspot-dashboard
WORKDIR /srv/syncspot-dashboard
COPY . /srv/syncspot-dashboard

# Install Node via NVM
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 8.4.0

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash

# Replace shell with bash so we can source files
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

RUN source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

# Add node and npm to path so the commands are available
ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN npm install
RUN npm run build

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 3000