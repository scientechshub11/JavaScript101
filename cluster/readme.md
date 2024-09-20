npm i cluster
npm i os

const server = http.createServer((req, res)=>{
        if(req.url.includes('/home')){
            res.end("Home Page");
        }
        else if(req.url.includes('/slow-loading')){
            for(let i =0; i<60000000; i++){
                res.end("slow loading");
            }
        }
    });
    
    server.listen(port,()=>{
        console.log(`Server listen to the port ${port}`);
    })