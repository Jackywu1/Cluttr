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

func spotifyLogin(w http.ResponseWriter, r *http.Request) {
	request := r.URL.RequestURI()
	fmt.Println("in redirect")

	u, err := url.Parse(request)
	if err != nil {
		log.Fatal(err)
	}

	u.Scheme = "https"
	u.Host = "127.0.0.1:1000"

	http.Redirect(w, r, u.String(), http.StatusMovedPermanently)
}

func main() {
	router := mux.NewRouter()
	spotify := router.PathPrefix("/spotify").Subrouter()

	spotify.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Println(r.URL.RequestURI())
		http.Redirect(w, r, r.URL.RequestURI(), http.StatusMovedPermanently)
	})

	spotify.HandleFunc("/login", spotifyLogin)

	fmt.Println("Proxy running on port 1337")
	log.Fatal(http.ListenAndServe(":1337", router))
}
