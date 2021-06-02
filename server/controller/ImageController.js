import Image from '../models/Image'
import imgbbUploader  from 'imgbb-uploader'
import {resolve} from 'path'
import { unlink } from 'fs-extra'

const saveImage   = async (req,res)=>{
 
     imgbbUploader(process.env.IMGBB_API,resolve('./server/public/uploads/'+req.file.filename))
        .then(async (res)=>{
          const image = new Image();
          image.name = req.body.name
          image.imagePath =  res.image.url
          await image.save()
        })
        .catch(err=> console.log(err))
    
       await unlink(resolve('./server/public/uploads/' + req.file.filename)) 
        return res.json('image saved')
}

const getImage  = async (req,res)=>{
      const images = await Image.find()
      return res.json(images)
}

const getOneImage = async (req,res)=>{
  const { id } = req.params
  const image= await Image.findOne({_id:id})
  return res.json(image)
}

const deleteImage = async  (req,res)=>{
  const { id } = req.params
  await Image.deleteOne({_id:id})
  return res.json('image deleted')
}

export default {
  saveImage,
  getImage,
  getOneImage,
  deleteImage
}