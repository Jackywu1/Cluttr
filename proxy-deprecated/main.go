package main

import (
	"log"
	"net/http"

	// "net/http/httputil"
	"net/url"

	"github.com/gorilla/mux"
)

func redirectSpotify(w http.ResponseWriter, r *http.Request) {
	u, _ := url.Parse(r.URL.RequestURI())

	u.Scheme = "https"
	u.Host = "127.0.0.1:1000"
	u.Path = r.URL.RequestURI()

	// proxy := httputil.NewSingleHostReverseProxy(u)
	// proxy.ServeHTTP(w, r)
	http.Redirect(w, r, u.String(), http.StatusPermanentRedirect)
}

func redirectTwitter(w http.ResponseWriter, r *http.Request) {
	u, _ := url.Parse(r.URL.RequestURI())

	u.Scheme = "https"
	u.Host = "127.0.0.1:2000"
	u.Path = r.URL.RequestURI()

	// proxy := httputil.NewSingleHostReverseProxy(u)
	// proxy.ServeHTTP(w, r)
	http.Redirect(w, r, u.String(), http.StatusPermanentRedirect)
}

func redirectYoutube(w http.ResponseWriter, r *http.Request) {
	u, _ := url.Parse(r.URL.RequestURI())

	u.Scheme = "https"
	u.Host = "127.0.0.1:3000"
	u.Path = r.URL.RequestURI()

	// proxy := httputil.NewSingleHostReverseProxy(u)
	// proxy.ServeHTTP(w, r)
	http.Redirect(w, r, u.String(), http.StatusPermanentRedirect)
}

func main() {
	// initialize API gateway
	router := mux.NewRouter()

	// create subrouter for each service
	spotify := router.PathPrefix("/spotify").Subrouter()
	spotify.HandleFunc("/", redirectSpotify)

	twitter := router.PathPrefix("/twitter").Subrouter()
	twitter.HandleFunc("/", redirectTwitter)

	youtube := router.PathPrefix("/youtube").Subrouter()
	youtube.HandleFunc("/", redirectYoutube)

	log.Fatal(http.ListenAndServe(":1337", nil))
}
