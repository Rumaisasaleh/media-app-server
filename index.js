const JSONserver = require ('json-server')
const MPServer = JSONserver.create()
const router =JSONserver.router('db.json') 
const middleware =JSONserver.defaults()


const PORT = 3000 || process.env.PORT

MPServer.use(middleware)
MPServer.use(router)

MPServer.listen(PORT,()=>{
    console.log((`Media Player server started running at PORT:${PORT},and waiting for the client request`));
    
})