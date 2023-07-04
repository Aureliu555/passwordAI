import express from 'express'

const PORT = process.env.PORT || 5556

const app = express()

app.set('views', 'views')
app.set('view engine', 'hbs')

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(express.static('public'))

app.get("/", (req, resp) => {
    resp.render('index.hbs')
})

app.listen(PORT, () => console.log(`Listening...\nhttp://localhost:`+ PORT))
