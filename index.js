var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('<body><h2>Bundesländer</h2><ol><li>Wien</li><li>Niederösterreich</li><li>Oberösterreich</li><li>Salzburg</li><li>Tirol</li><li>Vorarlberg</li><li>Kärnten</li><li>Steiermark</li><li>Burgenland</li></ol></body>')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
