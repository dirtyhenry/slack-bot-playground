clean: 
	rm -rf node_modules

install:
	yarn install
	brew bundle

run:
	node -r dotenv/config app.js

expose: 
	ngrok authtoken $$(grep NGROK_AUTH_TOKEN .env | cut -d '=' -f2) 
	ngrok http $$(grep PORT .env | cut -d '=' -f2) 