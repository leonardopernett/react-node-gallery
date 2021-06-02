import axios from 'axios'
import React,{useState, useRef} from 'react'
import {useHistory} from 'react-router-dom'


export default function Form() {

  const [image, setImage] = useState()
  const ref = useRef()
  const history = useHistory()
  const [porcentaje, setporcentaje] = useState(0)
  const [loading, setloading] = useState(false)

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setloading(true)
     const formdata = new FormData()
     formdata.append('name', ref.current.value)
     formdata.append('file',image)
      await axios.post('http://localhost:3000/api/images/upload',formdata,{
        headers:{
          'Content-type':'multipart/fomr-data'
        },
        onUploadProgress(event){
          const { loaded, total } = event
          const percentaje = parseInt((loaded*100)/total)
          console.log(percentaje)
          setporcentaje(percentaje)
        }
      
      
      })
      history.push('/images')
  }
  

  return (
    <div className="col-md-4 mx-auto">
      <div className="card">
        <div className="card-body">

        {
          loading && (
              <div class="progress rounded-0">
              <div 
              class="progress-bar bg-info" 
              role="progressbar" 
              style={{width: `${porcentaje}%` }}
            ></div>
            </div>
          )
        }

          <h3 className="text-center mt-5">Upload Image</h3>
           <form onSubmit = { handleSubmit } >
              <input type="text" ref={ref} className="form-control my-3" name="name" placeholder="name image" />
              <input type="file" onChange = { e => setImage(e.target.files[0]) }  className="form-control my-3" name="file" />
              <div className="d-grid">
                <button className="btn btn-primary">Upload</button>
              </div>
           </form>
        </div>
      </div>
    </div>
  )
}
