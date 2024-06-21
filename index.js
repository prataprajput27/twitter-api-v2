require("dotenv").config({ path: __dirname + "/.env" });
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const { twitterClient } = require("./twitterClient.js");
const CronJob = require("cron").CronJob;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const tweet = async () => {
  try {
    await twitterClient.v2.tweet(
      "yall this is my first tweet using the twitter api"
    );
  } catch (e) {
    console.log(e);
  }
};

tweet();

//******************** cronjob logic ********************//
/*
const cronTweet = new CronJob("30 * * * * *", async () => {
  tweet();
});

cronTweet.start();
*/