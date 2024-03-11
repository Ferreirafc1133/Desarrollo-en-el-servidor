import express , {Router, Request, Response}  from "express"
import todosController from "../controllers/todos.controllers";

const router = Router();

type User = {};

interface Myrequest extends Request {
    user?: User;
}

router.get('/', (req: Request, res: Response) => {
    res.send('API jalando!');
});

router.get('/todos', todosController.getAll);

export default router;