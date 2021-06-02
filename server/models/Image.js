import {Schema, model} from 'mongoose'


const imageSchema = new Schema({
  name:{
    type:String, 
    require:true,
    trim:true
  },
  imagePath:{
    type:String, 
    require:true
  }
},{
  timestamps:true,
  versionKey:false
})






export default model('Image', imageSchema)