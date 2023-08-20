import express, { Request, Response, Router } from "express";


const router1: Router = express.Router();

router1.get('/', (req: Request, res: Response) => {

    res.render('index.hbs')
});


router1.get('/service', async (req: Request, res: Response) => {
    try {
        res.render('service')
    } catch (error) {
        console.log(error)
    }
});




router1.post('/s', async (req: Request, res: Response) => {
    try {
        const { data } = await req.body;
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=27.7172%2C${data}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '27ada6319amsh17c71601d268d31p1f5a7fjsn64b573764a2d',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        res.status(200).json(result)

    } catch (err) {
        console.log(err)

    }
});

router1.use((req, res, next) => {
    res.status(404).render('a')
  });
  

export { router1 }


