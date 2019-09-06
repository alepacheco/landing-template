package handler

import (
	"fmt"
	"net/http"
)

// Handler handles all incoming HTTP requests to the server
func Handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "<h1>Hello from Go, you went to: %s</h1>", (*r.URL).Path)
}
