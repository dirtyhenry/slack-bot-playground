# Slack Bot Playground

This is my playground to poke around Slack API and their Bolt framework.

## Installation

This project requires `node` and `yarn`.

To install dependencies:

```bash
make install
```

## Usage

To run the project, some environment variables are required.

To provide them in a local environment, create a `.env` file from `.env.sample`:

- `SLACK_BOT_TOKEN`: Found from a Slack app's _Install app_ page;
- `SLACK_SIGNING_SECRET`: Found from a Slack app's _Basic Information_ page;

And then:

```bash
make run
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Environment variables
