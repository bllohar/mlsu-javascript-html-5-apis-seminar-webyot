var app = require("express")();
var httpServer = require("http").Server(app);
var io = require("socket.io")(httpServer);

io.on("connection", function(socket){
    console.log("user has been connected to socket");
    
    socket.on("chat", function(msg){
    
        console.log(msg);
        
        io.emit("chat", msg);
    })
});



app.get("/", function(req, res){
    
    res.sendFile(__dirname+"/index.html");

});


httpServer.listen(3000, function(){

    console.log("server has been started at http://127.0.0.1:3000/");
})