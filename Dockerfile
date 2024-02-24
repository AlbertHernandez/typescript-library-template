FROM node:20-alpine3.18 AS base

ENV DIR /app
WORKDIR $DIR
ARG NPM_TOKEN

FROM base AS dev

ENV NODE_ENV=development

COPY package*.json .

RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ".npmrc" && \
    npm ci && \
    rm -f .npmrc

COPY tsconfig*.json .
COPY .swcrc .
COPY src src
COPY playground playground

CMD ["npm", "run", "dev"]
