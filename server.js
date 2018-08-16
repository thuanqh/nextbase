const {join} = require('path')
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const root = process.cwd()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/a', (req, res) => {
      return app.render(req, res, '/b', req.query)
    })

    server.get('/b', (req, res) => {
      return app.render(req, res, '/a', req.query)
    })

    server.get('/posts/:id', (req, res) => {
      return app.render(req, res, '/posts', { id: req.params.id })
    })

    server.get('*', (req, res) => {
        if (req.url.startsWith('/static/')) {
            if (req.url.endsWith('/sw.js')) {
              res.setHeader('Service-Worker-Allowed', '/')
            }
            return app.serveStatic(req, res, join(root, `.${req.url}`))
        } else {
            return handle(req, res, req.url)
        }
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })