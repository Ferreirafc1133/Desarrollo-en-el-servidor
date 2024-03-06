"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('', (req, res) => {
    res.send('api works');
});
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
