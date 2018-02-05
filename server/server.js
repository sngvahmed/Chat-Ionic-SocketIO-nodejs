function handleHTTP1(req , res){
    if(req.method === "GET"){
        if (req.url === "/"){
            res.writeHead(200, {"content-type" : "text/plain"})

            ASQ(function(done){
                setTimeout(function(){
                    done(Math.random())
                }, 1000)
            }).then(function(done, num){
                setTimeout(function(){
                    done(num.toString())
                }, 1000)
            }).val(function(str){
                setTimeout(function(){
                    res.end("hello world = " + str)
                })
            }, 1000)
        }else {
            res.writeHead(403);
            res.end("Get outta here!")
        }
    }else{
        res.writeHead(403);
        res.end("Get outta here!")
    }
}


function handleHTTP(req, res){
    if (req.method === "GET"){
        if (/^\/\d+(?=$|[\/?#])/.test(req.url)){
            req.addListener("end", function(){
                req.url = req.url.replace(/^\/(\d).*$/, "$1.html");
                static_files.serve(req, res);
            })
            req.resume();
        }else{
          res.writeHead(400);
          res.end("Get outta here");
        }
    }else{
        res.writeHead(400);
        res.end("Get outta here");
    }
}

function handleIO(socket){
    // function disconnect(){

    //     console.log("client disconnected")
    // }

    socket.on("textChat", function(msg){
        console.log(msg)
        socket.broadcast.emit("messageBroadCast", msg);
    })

    // console.log("client connected")
    // socket.on("disconnected" , disconnect)

    // var intv = setInterval(function(){
    //     socket.emit("helloClient" , Math.random())
    // }, 1000)

    // socket.on("helloServer" , function(num) {
    //     console.log("hello " + num)
    // })
}

var host = "localhost"
var port = 8006


var ASQ = require("asynquence")
var http = require("http")
var node_static = require("node-static")
var http_serv = http.createServer(handleHTTP).listen(port , host);
var io = require("socket.io").listen(http_serv)
var static_files = new node_static.Server(__dirname) // __dirname will get the current directory

io.on("connection" , handleIO)
