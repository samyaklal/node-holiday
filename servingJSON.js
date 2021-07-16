var http = require('http');
var url = require('url');
var holidays = require('./public/HolidaysList.json');
//create a server object:
function requestHandler(req, res) {
	var requestUrl = url.parse(req.url, true);
	var month = requestUrl.query.month;
	
	res.setHeader('Content-Type', 'application/json');
	if(requestUrl.pathname=='/public'){
	  if(holidays["public"][month]){
		res.statusCode = 200;
		res.end(JSON.stringify(holidays["public"][month]));
	  }else{
		res.statusCode = 404;
		res.end("No Holidays");
	  }
	}
	else if(requestUrl.pathname=='/flexible'){
	  if(holidays["flexible"][month]){
		res.statusCode = 200;
		res.end(JSON.stringify(holidays["flexible"][month]));
	  }else{
		res.statusCode = 404;
		res.end("No Holidays");
      }
    }
    else{
        res.statusCode = 404;
		res.end("Not handled");
    }
}

var server = http.createServer(requestHandler)

function serverStarted(){
  console.log("Server started on port 1337")
}
server.listen(1337, serverStarted)
console.log("The End or Just the beginning?")
