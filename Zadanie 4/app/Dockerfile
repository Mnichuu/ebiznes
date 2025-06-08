FROM golang:1.20 AS builder

WORKDIR /app
COPY . .

RUN go build -o main .

FROM alpine:latest
WORKDIR /root/
COPY --from=builder /app/main .

# Eksponowanie portu aplikacji
EXPOSE 8080

# Uruchomienie aplikacji
CMD ["./main"]