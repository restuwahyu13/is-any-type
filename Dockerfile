## BUILD STAGE ONE

FROM node:12-alpine as is-any-type
COPY package*.json \
  .editorconfig \
  .gitignore \
  .npmignore \
  .prettierrc \
  .travis.yml \
  config.ts \
  jest.config.ts \
  Makefile ./
COPY ./ /app
RUN apk add make \
  && make install

## BUILD STAGE TWO

FROM is-any-type
COPY --from=is-any-type ./ /app
WORKDIR /app
RUN make build