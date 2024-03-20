import {Request} from "express";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";


const s3 = new S3Client({
    region: process.env.REGION || 'default-region', 
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '', 
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '' 
    }
});

const s3Storage = multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME || '',
    acl: 'public-read',
    metadata: (req, file, cb) => {
        cb(null, {...file});
    },
    key: (req, file, cb) => {
        cb(null, file.originalname);
    }
});


const upload = multer({
    storage: s3Storage
});


export default upload;