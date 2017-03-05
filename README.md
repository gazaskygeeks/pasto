# Pasto

[![Build Status](https://travis-ci.org/gazaskygeeks/pasto.svg?branch=master)](https://travis-ci.org/gazaskygeeks/pasto)
[![Code Climate](https://codeclimate.com/github/gazaskygeeks/pasto/badges/gpa.svg)](https://codeclimate.com/github/gazaskygeeks/pasto)
[![Test Coverage](https://codeclimate.com/github/gazaskygeeks/pasto/badges/coverage.svg)](https://codeclimate.com/github/gazaskygeeks/pasto/coverage)
[![Gitter](https://badges.gitter.im/gitterHQ/gitter.svg)](https://gitter.im/gazaskygeeks_bootcamp/pasto)

A simple tool to order the daily breakfast and lunch at GSG bootcamp.
The original requirement:

> We always get food late and sometimes have no choice. The super app of Hani
didn't really work, let's help him. Build a website where everyday we can oder
breakfast and lunch. When visiting it the user should see a form with a time
deadline. Each order is saved on a Google Sheet and at a specific time, 10:00am
for breakfast and 02:00pm for lunch. The breakfast Orders will be sent to Hani1,
and the lunch Orders will be sent to Hani2 on the phone as an SMS.

## Run

In order to run the application you will need use Google and Twilio APIs.

To use Twilio just signup, while for Google you need to follow those steps:
- signup on Google
- visit the [google console](https://console.developers.google.com/apis/dashboard)
- on "Dashboard" click "Enable API", look for "Sheets", click on the result and "ENABLE"
- on "API Manager", select "Credentials" and click on "Create a project"
- on the modal enter the project name `Pasto` and submit
- click on "Create credentials" and select "Service account key"
- select "New service account", enter `bot` in "Service account name", role "Project > Editor"
- select JSON format for the key and click create
- go on [google sheets](https://docs.google.com/spreadsheets/u/0/) and create one
- name it whatever you like and make sure to share with the `GOOGLE_CLIENT_EMAIL`

If all the steps about are correct, you should have downloaded the json keys and
create the sheet when the orders will be saved.

In order to run the application first create a `.env` file like the example.

```
TWILIO_ACCOUNT_SID="AC4549x162aac9452131f82725465d734d"
TWILIO_AUTH_TOKEN="3be2fe57fg5ac237090124d8e05f5f20"
TWILIO_PHONE_BREAKFAST="+972698400219"
TWILIO_PHONE_LUNCH="+971511401441"
TWILIO_PHONE_FROM="+13202220044"
GOOGLE_SHEET_ID="17JiGmBjoKvvau12o7PDoONwYAXHC3fwjkEt9f3jhA3w"
GOOGLE_CLIENT_EMAIL="bot-741@pasto-140011.iam.gserviceaccount.com"
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvg...Wiw70jaC\n-----END PRIVATE KEY-----\n"
```

Once all the environmental variables are set, clone and run the repo:

```
$ git clone https://github.com/gazaskygeeks/pasto
$ cd pasto
$ npm install
$ npm test
$ npm run
```

## Deployment

The application is `Heroku` friendly, deploy it there.

## Team

Original team:
- [Rana Alqrenawi](https://github.com/RanaAlqrenawi)
- [Abeer Al shaer](https://github.com/abeeralshaer)
- [Mohammed Shorfa](https://github.com/mhmdshorafa)
- [Muhammed Mushtaha](https://github.com/muhmushtaha)

## Sketch

![alt text](https://scontent.fjrs2-1.fna.fbcdn.net/v/t34.0-12/16997507_10206350716085054_872691707_n.jpg?oh=c2f84b3ad54dba9bf3ce6243fbf6784b&oe=58B65083 "Sketch")
