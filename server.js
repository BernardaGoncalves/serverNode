import { createServer } from 'node:http'

const server = createServer(( req, res) => {
    res.write("oiiii")

    return res.end()
})

server.listen(3001)