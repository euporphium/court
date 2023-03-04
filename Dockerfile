FROM node:19-bullseye-slim AS builder

WORKDIR /app

COPY . .

RUN corepack enable pnpm

RUN pnpm install
RUN pnpm build

FROM nginx
COPY --from=builder /app/dist /usr/share/nginx/html