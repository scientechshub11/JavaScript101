const cluster = require('cluster');
const os = require('os');
const http = require('http');
console.log(os.cpus().length)
//the number core = number child process
cluster.schedulingPolicy = cluster.SCHED_NONE;
const port = 4500;
if(cluster.isMaster){
    console.log(`Master process is running in the system with address ${process.pid}`)
    cluster.fork();
    cluster.fork();
    cluster.fork();
    cluster.fork();
}else{
    console.log(`Child process/worker process is running in the system with address ${process.pid}`)
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
}