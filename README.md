
docker build -t dvoell-online:v3 .
docker run --rm -v $(pwd)/index.html:/aue/index.html -p 5000:8080 --name test1 dvoell-online:v3

