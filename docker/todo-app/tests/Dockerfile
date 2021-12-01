FROM mjgargani/puppeteer:trybe1.0
WORKDIR /app
ADD ./node_modules.tar.gz .
COPY . .
ENTRYPOINT [ "npm", "test" ]
ENV FRONT_HOST=localhost
ENV FRONT_PORT=3000