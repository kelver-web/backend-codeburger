import app from "./app.js"

const port = process.env.PORT || 3002

app.listen(port, '0.0.0.0', () => {
  console.log(`[nodemon] run in port ${port}`)
})
