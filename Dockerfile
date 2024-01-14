FROM node:20-alpine3.18 AS base

ENV DIR /project
WORKDIR $DIR
ARG NPM_TOKEN

FROM base AS dev

ENV NODE_ENV=development

COPY package*.json $DIR

RUN echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > "$DIR/.npmrc" && \
    npm ci && \
    rm -f .npmrc

COPY tsconfig*.json $DIR
COPY src $DIR/src
COPY playground $DIR/playground

CMD ["npm", "run", "dev"]
