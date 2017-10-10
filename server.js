//----------------------//
//-----VARIAVEIS--------//
//----------------------//
const server = require('express')()
const bodyParser = require('body-parser');
const server_port = 4000;

var count = 0;
var lastDateTimeReceived;
var firstDateTimeReceived;

//----------------------//
//-----ENDPOINTS--------//
//----------------------//

///
///EndPoint para Develop
///
server.post('/dev/', function (req, res) {

	console.log("200 - Requisicao Recebida :" + req.originalUrl);
	count++;
	res.sendStatus(200);
})

///
///EndPoint para Staging
///
server.post('/stg/', function (req, res) {

	console.log("200 - Requisicao Recebida :" + req.originalUrl);
	count++;
	
	res.sendStatus(200);
})

///
///EndPoint para teste de carga
///
server.post('/sdx/', function (req, res) {
	
	console.log("200 - Requisicao Recebida :" + req.originalUrl);
	// lastDateTimeReceived = moment().format("YYYY-MM-DDThh:mm:ss");
	// lastDateTimeReceived = moment();
	lastDateTimeReceived = new Date(Date.now());
	console.log(lastDateTimeReceived);
	
	if(count == 0){
		firstDateTimeReceived = lastDateTimeReceived;
	}	
	
	count++;	
	
	res.sendStatus(200);
})

///
///Limpa o contador
///
server.get('/clear/', function (req, res) {
	console.log("202 - Requisicao Recebida :" + req.originalUrl);
	count = 0;
	res.sendStatus(202);
})

///
///Retorna o timeStamp da última requisição
///
server.get('/timelapse/', function (req, res) {
	console.log("202 - Requisicao Recebida :" + req.originalUrl);
	res.writeHead(202, { "Content-Type": "application/json" });
	
	var timeLapseObject = {
		FirstStamp: firstDateTimeReceived ? firstDateTimeReceived : "0", 
		LastStamp: lastDateTimeReceived ? lastDateTimeReceived : "0", 
		Diff: null
		}

		var timeTemp = lastDateTimeReceived.getTime() - firstDateTimeReceived.getTime();
		timeLapseObject.Diff = (timeTemp / 1000) + " milliseconds"; 

	res.end(JSON.stringify(timeLapseObject));
})

///
///Apenas para teste e/ou KeepAlive
///
server.get('/', function (req, res) {
	
	console.log("200 - Requisicao Recebida :" + req.originalUrl);
	res.writeHead(202, { "Content-Type": "application/json" });
	var n = count;
	var json = JSON.stringify({
		count: n
	});
	res.end(n.toString());
})

///
///Apenas para teste e/ou KeepAlive
///
server.get('/status/', function (req, res) {

	console.log("202 - Requisicao Recebida ");
	console.log(moment().format("YYYY-MM-DDThh:mm:ss:SSS"));
	
	res.end("I'M ALIIIVE!!!");
})


//----------------------//
//-------FUNCOES--------//
//----------------------//

// Configura o servidor para receber json no body
server.use(bodyParser.json());

// Executa a cada Requisicao.
server.all('*', function (req, res, next) {
	console.log("Requisicao Recebida :" + req.originalUrl);
	next();
})
server.use(function (req, res, next) {
	console.log("Requisicao Recebida :" + req.originalUrl);
	next();
})
//Declara porta
server.listen(server_port,
	() => console.log('Servidor Iniciado na porta: ' + server_port));