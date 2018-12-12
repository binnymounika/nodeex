var http=require('http')
var file=require('fs')

var server=http.createServer(function(req,res)
{
 
 res.writeHead(200,{'Content-Type':'text/html'})
 res.write("working...")

file.readFile('hello.txt',function(err,data)
{
   if(err)
   {
       throw err
   }
   else{
   res.write("<br></br>")
   res.write(data)
   file.writeFile('hello2.txt', data, function(err)
   {
         console.log(err)
   })
   res.end()
   }
})


}).listen(8000)
