const express = require('express');

var app = express();

app.get('/',function(req, res){
    
    res.send({
        "ip": req.get('x-forwarded-for'),
        "language": req.get('accept-language').slice(0,5),
        "software": req.get('user-agent')
    });
    
    res.end()
}).listen(8080);