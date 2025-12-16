FROM golang:1.18
WORKDIR /app

COPY main.go . 
RUN go build -o server main.go

CMD ["./server"]