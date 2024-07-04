FROM node:20

WORKDIR /home/node42

COPY package.json .

RUN yarn config set network-timeout 3000000

RUN yarn install

COPY prisma ./prisma/

RUN yarn prisma generate

COPY . .


CMD ["yarn","prod"]

# docker build . -t img-node
# docker run -d -p 8080:8080 --network=node-network --name cons-node img-node