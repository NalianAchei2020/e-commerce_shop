import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config;

export default cloudinary.config({
  CLOUDINARY_NAME: process.env.CLOUDINARY_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET,
});
