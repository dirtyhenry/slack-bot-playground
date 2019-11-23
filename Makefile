clean: 
	rm -rf node_modules

install:
	yarn install

run:
	node -r dotenv/config app.js