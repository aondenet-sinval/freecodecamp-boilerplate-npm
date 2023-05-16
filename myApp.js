require('dotenv').config()
let express = require('express');
let app = express();

app.use((req, res, next)=>{
  console.log(req.method, req.path, '-', req.ip);
  next()
})

app.use('/public', express.static(__dirname + '/public'))

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


app.get('/now', (req, res, next)=>{
  req.time = new Date().toString()
  next()
}, (req, res)=>{
  res.json({'time': req.time})
}
)

app.get('/:word/echo', (req, res)=>{
  const { word } = req.params
  res.json({ echo: word })
})



































 module.exports = app;
