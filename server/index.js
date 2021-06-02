require('dotenv').config({path:'.env'})

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import indexRouter from './router/index.router'
import path from 'path'
import upload from 'express-fileupload'
import  multer from 'multer'
import  {resolve, extname} from 'path'
const app = express()

//require db
require('./database')

/* config */



/* multer */
const storage = multer.diskStorage({
  destination:resolve('./server/public/uploads'),
  filename:(req,file, cb)=>{
    cb(null, Date.now() + extname(file.originalname))
   }
})

 
/* middleware */
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(helmet())
app.use(cors())
app.use(multer({storage}).single('file'))

/* router */ 
app.use(indexRouter)

/* static */
app.use(express.static(path.join(__dirname,'public')))

/*  server intializaction */
app.listen(3000,()=>{
  console.log('server on port 3000')
})



