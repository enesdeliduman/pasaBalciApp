package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"strings"
)

func main() {

	url := "https://api.collectapi.com/chatgpt/query"

	payload := strings.NewReader("{\"text\" : \"Merhaba\"}")

	req, _ := http.NewRequest("POST", url, payload)

	req.Header.Add("content-type", "application/json")
	req.Header.Add("authorization", "apikey your_token")

	res, _ := http.DefaultClient.Do(req)

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	fmt.Println(res)
	fmt.Println(string(body))

}
