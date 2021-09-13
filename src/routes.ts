import { Router } from "express";

const router = Router()

// POST: /seed
router.post('/seed', (req, res) =>{
    return res.status(200).send('');
});

// GET: /list
router.get('/list', (req, res) =>{
    return res.status(200).send('');
});

export { router }