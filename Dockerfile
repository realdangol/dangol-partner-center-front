FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN pnpm install && pnpm run build

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["pnpm", "start"]
