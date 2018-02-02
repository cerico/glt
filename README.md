# RSS

![screenshot](https://s3.eu-west-2.amazonaws.com/io1937/screenshots/Screen+Shot+on+2018-02-02+at+12_15_08.png)


## TLDR

RSS Feed Reader


## How do i run it?


```
npm install
npm run dev
```

Starts dev build, runs on http://localhost:3404

```
npm run build
```

Creates production build for express

```
npm run start
```

Starts production build, runs on http://localhost:59339

```
npm run deploy
```

Pushes to DigitalOcean droplet, runs on http://glt.malham.io

## Sample Feed to use

```
http://www.startribune.com/local/index.rss2
```

## TODO / Issues

[√] Only refreshes or direct links in dev. Fixed, can now refresh and direct link in production

[ ] Fix back button bug!

[ ] Show which link is active in sidebar

[ ] Show Time/Date of each article in feed, not just bog standard list

[ ] Think about nicer urls

[ ] General Look and Feel

[ ] No work done on small screen view

[ ] No error handling yet

[ ] Normally would use https in production but feeds are http only

[ ] General tidy up




