var httpVariable=require('http')

// var myServer=httpVariable.createServer(function(req,res)
// { 
// res.writeHead(200,{'Content-Type':'text/html'})

// res.write("hello mounika node server hello hai")
// res.end()

// })

// myServer.listen(8888)
var myServer=httpVariable.createServer(doItNow).listen(8888)
function doItNow(req,res){
res.writeHead(200,{'Content-Type':'text/html'})

res.write("hello mounika node server")
res.end()

}
