const http = require("http");
http.createServer(function(req,res){
    // res.writeHead(200,{'Content-Type':'text/html'});
    // res.write("Hello I am In")
    // res.end()
    if (req.url === '/'){
        res.write("I am in the homepage.")
        res.end()
    }
    else if (req.method ==='GET' && req.url === '/about'){   
        res.write("I am in the About Page.")
        res.end()
    }
    else if (req.method==='GET' && req.url === '/contact'){
        // res.writeHead("hello")
        res.write("Now, I am in the Contact page")
        res.end()
    }
}).listen(3000)

