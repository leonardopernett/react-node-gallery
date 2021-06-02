import mongoose from 'mongoose'
mongoose.connect(process.env.MONGO_URI,{
   useNewUrlParser: true,
   useUnifiedTopology: true 
}).then(console.log('database is connected'))
  .catch(err=>console.log(err))