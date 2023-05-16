require('dotenv').config()
let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'))

app.use((req, res, next)=>{
  console.log(req.method, req.path, '-', req.ip);
})
app.get('/', (req, res)=>{
  const absolutePath = __dirname + '/views/index.html'
  res.sendFile(absolutePath)
})
app.get('/json', (req, res)=>{
  const msg = 'Hello json'
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    res.json({'message': msg.toUpperCase()})
  }else {
    res.json({'message': msg})
  }
})



































 module.exports = app;
