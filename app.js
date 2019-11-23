const { App } = require("@slack/bolt");

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Listens to incoming messages that contain "hello"
app.message("hello", ({ message, say }) => {
  // say() sends a message to the channel where the event was triggered
  say({
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `Hey there <@${message.user}>!`
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Click Me"
          },
          action_id: "button_click"
        }
      }
    ]
  });
});

// Listens to incoming messages that contain "list"
app.message("list", async ({ message, say, context }) => {
  try {
    // Sample of how to use `app.client` to use the web API.
    const result = await app.client.users.list({ token: context.botToken });
    console.log(result);

    say({
      blocks: [
        {
          type: "section",
          text: {
            type: "mrkdwn",
            text: "Pick a user from the dropdown list"
          },
          accessory: {
            action_id: "text1234",
            type: "users_select",
            placeholder: {
              type: "plain_text",
              text: "Select an item"
            }
          }
        }
      ]
    });
  } catch (error) {
    console.error(error);
  }
});

app.action("button_click", ({ body, ack, say }) => {
  // Acknowledge the action
  ack();
  say(`<@${body.user.id}> clicked the button`);
});

app.action("text1234", ({ ack, say, payload }) => {
  ack();
  say(`<@${payload.selected_user}> was picked`);
});

(async () => {
  // Start your app
  await app.start(process.env.PORT);

  console.log("⚡️ Bolt app is running!");
})();
