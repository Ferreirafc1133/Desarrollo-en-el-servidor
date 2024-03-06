/*
import {User} from './types';
import UserRole from './types/user-role';

const yo: User = {
    name: 'Ferreira',
    lastname: 'Chavez',
    age: 25
}

yo.email = 'ferreira@ferreira.com'
yo.role = UserRole.ADMIN
*/

import express, {Request, Response} from 'express';

const app = express();

app.get('', (req: Request, res: Response) => {
    res.send('api works');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
