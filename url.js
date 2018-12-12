var http=require('http')
var url=require('url')
var server=http.createServer(function(req,res){


res.writeHead(200,{'Content-Type':'text/html'})
res.write("hello mounika hai ")
res.write("<br></br>")


var myQuery= url.parse(req.url,true).query
console.log(myQuery)
var q1=myQuery.status
var q2=myQuery.task
res.write("status: "+q1)

res.write("<br></br>")
res.write("task: "+q2)

res.write("<br></br>")
res.write(req.url)

res.end()
})
server.listen(8888)