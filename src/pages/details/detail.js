import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'

export default function Detail() {
  const [image, setImage] = useState({})
  const history = useHistory()

  const {id} = useParams()
  useEffect(() => {
    getOneIMage()
  }, [])

  const getOneIMage = async ()=>{
    const res = await  axios.get('http://localhost:3000/api/images/'+id)
    setImage(res.data)
  }

  const eliminar = async ids =>{
    await axios.delete('http://localhost:3000/api/images/'+ids)
    history.push('/images')
  }
  return (
    <div>
     <div className="container">
       <div className="row">
         <div className="col-md-4 mx-auto">
         <div className="card">
          <img src= {image.imagePath} alt="" width={500} />
            <div className="d-grid">
              <button className="btn btn-primary mt-2" onClick={()=>eliminar(image._id)}>eliminar</button>
            </div>
         </div>
         </div>
       </div>
     </div>
    </div>
  )
}
