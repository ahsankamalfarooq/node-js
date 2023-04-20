////////////////////////////////////////////////////////
//HTTTP MODULE

const http = require('http')

const app = http.createServer((req, res) => {

})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Listening on port 3000")
})

////////////////////////////////////////////////////////