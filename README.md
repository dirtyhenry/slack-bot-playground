# Slack Bot Playground

This is my playground to poke around Slack API and their Bolt framework.

## Development Installation

This project requires `node`, `yarn` and `brew` to be installed on your system.

To install dependencies:

```bash
make install
```

## Usage

To run the project, some environment variables are required.

To provide them in a local environment, create a `.env` file from `.env.sample`:

- `NGROK_AUTH_TOKEN`: To test locally, this project uses [ngrok](https://ngrok.com), this environment variable stored your ngrok auth token;
- `PORT`: The port number you want your app to listen to (we don't use a default fallback port number so we can use the same port on all stacks, ie `node` and `Makefile`);
- `SLACK_BOT_TOKEN`: Found from a Slack app's _Install app_ page;
- `SLACK_SIGNING_SECRET`: Found from a Slack app's _Basic Information_ page;

And then:

```bash
make run
```

Since you need to expose the service via a publicly available URL, run grok via another terminal:

```bash
make expose
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Environment variables
