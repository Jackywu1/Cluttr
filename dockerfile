FROM golang:latest
COPY ./reverse_proxy/ .
RUN go get -u github.com/gorilla/mux
EXPOSE 80
CMD go