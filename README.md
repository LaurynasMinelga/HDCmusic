# DC music bot
Using a module (discord-player) 🎧

### Installation
Edit `config/bot.js`.

```js
discord: {
    token: 'TOKEN',
    prefix: 'PREFIX', // ?, !, / or any other symbol
}
```
Remember to install npm dependencies.

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
