package main

import (
	"fmt"
	"log"
	"net/http"
	"net/url"

	"github.com/gorilla/mux"
)

// func redirect(url string) http.HandlerFunc {
// 	return func(w http.ResponseWriter, r *http.Request) {
// 		http.Redirect(w, r, url, 301)
// 	}
// }

func print(w http.ResponseWriter, r *http.Request) {
	request := r.URL.RequestURI()

	u, err := url.Parse(request)
	if err != nil {
		log.Fatal(err)
	}

	u.Scheme = "https"
	u.Host = "127.0.0.1"

	http.Redirect(w, r, u.String(), http.StatusMovedPermanently)
}

func main() {
	router := mux.NewRouter()
	spotify := router.PathPrefix("/spotify").Subrouter()

	spotify.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println(r.URL.RequestURI())
		http.Redirect(w, r, r.URL.RequestURI(), http.StatusMovedPermanently)
	})

	spotify.HandleFunc("/login", print)

	log.Fatal(http.ListenAndServe(":3000", router))
}
