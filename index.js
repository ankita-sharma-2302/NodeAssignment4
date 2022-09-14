const http= require("http")
const stringQuery= require("querystring")

const server= http.createServer((req,res)=>{
	const data= stringQuery.parse(req.url.split("?")[1])
	if(req.url=="/add"){
		const sum1= parseInt(data.num1)+parseInt(data.num2)
		// res.end(data)
		console.log("hiii")
		res.end(JSON.stringify({
			status:"ok",
			sum: sum1
		}))
	}

	// if(req.url=="/home"){
	// 	res.end("hello world")
	// }
})

server.listen(5000,()=>{
	console.log("server is ready")
})


