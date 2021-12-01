FROM mjgargani/puppeteer:trybe1.0 AS todotests
WORKDIR /todotests
ADD ./node_modules.tar.gz .
COPY . .
ENTRYPOINT [ "npm", "test" ]
ENV FRONT_HOST=localhost
ENV FRONT_PORT=3000