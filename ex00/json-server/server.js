const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json') // Assuming your JSON data is in 'db.json'
const middlewares = jsonServer.defaults()
const bodyParser = require('body-parser')

// Use body-parser middleware with an increased limit (e.g., 10MB)
server.use(bodyParser.json({ limit: '10mb' }))

// Use default middlewares (e.g., CORS, etc.)
server.use(middlewares)

// Custom routes and handlers can be added here if needed

// Use the router
server.use(router)

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
})
