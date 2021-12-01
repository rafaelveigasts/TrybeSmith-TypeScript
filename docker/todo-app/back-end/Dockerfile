FROM node:14-alpine AS todobackend
WORKDIR /todobackend
ADD ./node_modules.tar.gz .
COPY . .
EXPOSE 3001
ENTRYPOINT [ "npm", "start" ]