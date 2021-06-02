import axios from 'axios'
import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
export default function Image() {

  const [imagenes, setImagenes] = useState([])

  useEffect(() => {
     getImage()
  }, [])

  const getImage = async () => {
    const res = await axios.get('http://localhost:3000/api/images')
    setImagenes(res.data)
  }

  return (
   <div className="row">
        {
           imagenes.map(image=>(
              <div className="col-md-4" key={image._id}>
                <ul className="list-group">
                  <li className="list-group-item" >
                      <Link to={'/images/details/'+image._id}>
                         <img src={image.imagePath} alt="" className="card-img-top" height={300} />
                      </Link>
                  </li>
                </ul>
             </div>
            ))
        }
   </div>
  )
}
