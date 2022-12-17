# DC music bot
Using a module (discord-player) 🎧

### Installation
Edit `config.js`.

```js
discord: {
    token: 'TOKEN',
}
```
Remember to install npm dependencies. PREFIX BY DEFAULT IS A COMMAND "/" ex.: /play djmamane song2

- Server configuration:

```
#development
node index.js
npm start #Indicated in package.json

#Server with pm2
pm2 start index.js --name "MusicBot"
```

### Use help command inside dc server

```
(prefix)help // example: ?help
```

Also pm2 stuff:
```
pm2 list
pm2 start/stop/delete/restart
pm2 save - to save new processes
```
