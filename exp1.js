// JavaScript source code
const express = require('express');
const port = 3002;
const app = express();
//var root = 'C:/Users/kondr/Documents/nodejs/kexp1_1';
/*
app.use(express.static(root));
app.use(express.static(root + '/static/html'));
app.use(express.static(root + '/static/img'));
*/
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/static/html'));
app.use(express.static(__dirname + '/static/img'));

//Start the Server
const server = app.listen(port, (error) => {
    if (error)
        return console.log('Error: '+error);
    console.log('Server listening on port ' + server.address().port);

});
//GET
app.get('/api', (req, res) => {
    console.log('URL: ' + req.url);
    console.log(JSON.parse(data));
    //response.send('Hello Server express!!!');
    res.send(JSON.parse(data));
});
//POST
app.post('/api', function (req, res) {
    var ln = req.query.ln;
    var fn = req.query.fn;
    var tn = req.query.tn;
    var obj = JSON.parse(data);
    obj['employees'].push({ "lastn": ln, "firstn": fn, "tnumber": tn });
    data = JSON.stringify(obj);
    //res.send('Got a POST request');
    res.send(JSON.parse(data));
});
//PUT
app.put('/user', function (req, res) {
    var ln = req.query.ln;
    var fn = req.query.fn;
    var tn = req.query.tn;
    var obj = JSON.parse(data);
    var a = obj['employees'];
    for (var i = 0; i < a.length; i++) {
        if (a[i].tnumber == tn) {
            a[i].lastn = ln;
            a[i].firstn = fn;
            data = JSON.stringify(obj);
            res.send(JSON.parse(data));
            return;
        }
    }
    res.send('Сотрудник с табельным номером ' + tn+' не найден.');
});
//DELETE
app.delete('/user', function (req, res) {
    var tn = req.query.tn;
    console.log('tn=' + req.query.tn);
    var obj = JSON.parse(data);
    //var a = obj['employees'];
    for (var i = 0; i < obj.employees.length; i++) {
        console.log('i=' + i);
        if (obj.employees[i].tnumber == tn) {
            //delete obj.employees[i];
            obj.employees.splice(i, 1);
            data = JSON.stringify(obj);
            res.send(JSON.parse(data));
            return;
        }
    }
    res.send('Сотрудник с табельным номером ' + tn + ' не найден.');
});
//OPTIONS
app.options('/*', function (req, res) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, X-Requested-With');
    res.send(200);
});
var data = '{\
"employees":[\
{"lastn":"Иванов", "firstn":"Иван", "tnumber":"1"},\
{ "lastn": "Петров", "firstn": "Петр", "tnumber": "2" },\
{"lastn":"Сидоров", "firstn":"Сидор", "tnumber":"3"}\
]\
}';
/*app.get("/index.html", function (req, res) {
    //res.sendFile(root+'/static/html/index.html'
    res.sendFile('index.html'
    )
})*/
app.get("/hack(.html)?", function (req, res) {
    //res.sendFile(root+'/static/html/index.html'
    res.sendfile(__dirname + '/static/html/index.html'
    )
});
app.get("/", function (req, res) {
    //res.redirect('hack.html'
    res.redirect('hack.txt'
    )
});