import express, { Express, Request, Response } from 'express';
import hbs from 'hbs'
// import {engine} from 'express-handlebars'
const app: Express = express();
import path from 'path'
import { router1 } from './routers/router1';



app.use(express.json())

// Node js path
const stpath = path.join(__dirname, './public')
const tempatePath = path.join(__dirname, './template/views')
const partialsPath = path.join(__dirname, './template/partials')


// Let's make the setting for the static files
app.use(express.static(stpath))

// Engine
app.set('view engine', 'hbs')
app.set('views', tempatePath)
hbs.registerPartials(partialsPath)
// registerPartial('particles',partialsPath)
app.use('/', router1)





app.listen(3000, (err?: any) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Done', 3000)
    }
})
