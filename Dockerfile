FROM node:20

RUN apt-get update && \
    apt-get install -y xdg-utils && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /itunes-podcasts-inditex
COPY . .

RUN npm install
RUN npm run build

CMD ["npm", "start"]
