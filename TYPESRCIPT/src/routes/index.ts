import { Router, Request, Response } from "express";
import multer, {FileFilterCallback} from "multer";


type File = {
    originalname: string,
    mimetype: string,
    size: number
}
const router = Router();

const multerStorage = multer.diskStorage({
    filename: (req: Request, file, cb) => {
        cb(null, file.originalname);
    },
    destination: (req: Request, file, cb) => {
        cb(null, 'uploads');
    }
});

const filefilter = (req: Request, file: File, cb: FileFilterCallback) => {
    const isValid = file.mimetype.startsWith('image/');
    cb(null, isValid);
}


const upload = multer({
    storage: multerStorage,
    fileFilter: filefilter
});

router.get("", (req: Request, res: Response) => {
  res.send("Hello World!");
});

router.post("/upload", upload.single("doc"), (req: Request, res: Response) => {
    res.send('enpoint para subir archivos perros!');
    console.log(req.file);
})


export default router;