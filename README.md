# Playwright lambda docker

## Getting Started


```bash
nvm use
```

```bash
npm i
```

## Install docker.


https://docs.docker.com/get-started/

## Build

```bash
docker build -t playwright-lambda-docker .
```

## Run

```bash
docker run -p 9000:8080 playwright-lambda-docker:latest
```

## Trigger lambda locally.

```bash
curl -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```
