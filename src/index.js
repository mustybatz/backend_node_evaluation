import {connectToDB} from "./db/db";

const { config } = require('./config');
const createApp = require('./app');

const app = createApp();

app.listen(config.port, async err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }

  try {
    await connectToDB();
    console.info("** THE CONNECTION TO DB WAS ESTABLISHED");
  } catch (e) {
    console.error("Error: ", e);
    return;
  }

});
