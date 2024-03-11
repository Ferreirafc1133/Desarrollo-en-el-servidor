import { Request, Response } from "express";

class TodosController {
    getAll(req: Request, res: Response){
        res.send('get all the todos');
    }
}


const todosController = new TodosController();

export default TodosController;