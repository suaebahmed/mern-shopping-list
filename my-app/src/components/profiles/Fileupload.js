import React, { useState, useRef } from 'react'
import axios from 'axios'
import './style.css'
import ErrMsg from './ErrMsg'

function Fileupload() {

    const [file, setFile] = useState('')
    const [fileName, setFileName] = useState('')
    const [uploadFile, setUploadFile] = useState({fileName: '',filePath: ''})
    const [UploadParcentage, setUploadParcentage] = useState(10)

    const [msg,setMsg] = useState(null);

    const changeHandle=(e)=>{
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }
    const fileUploadHandlebar = async (e)=>{

        e.preventDefault();
        const fd  = new FormData();
        fd.append('image',file);

        try{
            const res = await axios.post('http://localhost:5000/api/profile', fd ,{
                     headers:{
                        'Content-Type': 'multipart/form-data'
                     },
                     onUploadProgress: ProgressEvent =>{
                        setUploadParcentage(parseInt(Math.round((ProgressEvent.loaded * 100)/ProgressEvent.total)))
                     }
            })
                setUploadFile({fileName: res.data.fileName,filePath: res.data.filePath})
                setTimeout(()=>{
                    setUploadParcentage(0)
                },800)
                setMsg('file uploaded')

        }catch(e){
            if(e.response.status == 500){
                setMsg(e.response.statusText)
            }
            else{
                setMsg(e.response.data)
            }
        }
    }
    
    return (
        <div style={{margin: '50px'}}>

            {msg ? <ErrMsg msg={msg} /> : null}

            <form action="">
                <div className="custom-file">
                    <input type="file"  className='custom-file-input' onChange={changeHandle} id="customFile" />
                    <label htmlFor="customFile">
                        {fileName? fileName: 'choose file'}
                    </label>
                    <input type="submit" className="btn btn-primary btn-block" onClick={fileUploadHandlebar} value="upload"/>
                </div>
            </form>
            
            <div className="outerBar">
                <div className="innerBar"  style={{width: UploadParcentage +'%'}}>
                    <span id="textSpan">{UploadParcentage} % complated</span>
                </div>
            </div>

            {uploadFile.filePath !== '' ? <div className="row">
                <div className="col-4 mx-auto">
                    <img src={uploadFile.filePath} width="200px" height="200px" style={{borderRadius: '50%'}} alt="img"/>
                </div>
            </div>: <p className="my-4">no image uploaded</p>}
        </div>
    )
}

export default Fileupload;