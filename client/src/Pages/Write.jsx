import React,{useState, useRef, useMemo} from "react";
import JoditEditor from 'jodit-react';
import axios from "axios"
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";



const Write = () => {
    const editor =useRef(null)
    const state = useLocation().state
    const [content, setContent] = useState(state?.descript || "")
    const [title, setTitle] = useState(state?.title || "")
    const [cat, setCat] = useState(state?.cat || "")
    const [file, setFile] = useState(null)

    //const navigate = useNavigate();

    const upload = async ()=>{
        try{
            const formData  = new FormData();
            formData.append("file",file)
            const res  = await axios.post("http://localhost:8800/api/upload", formData)
            return res.data

        }catch(err){
            console.log(err)

        }
    }

    const handleClick = async e=>{
        e.preventDefault()
        
        const imgUrl = await upload()

        try{
            state ? await axios.put(`http://localhost:8800/api/posts/${state.id}`,{
                title,
                descript: content,
                cat,
                img:file ? imgUrl : ""
            },{ withCredentials: true }) : await axios.post(`http://localhost:8800/api/posts/`,{
                title,
                descript: content,
                cat,
                img:file ? imgUrl : "",
                date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")

        },{ withCredentials: true })
        //navigate("/")
    }catch(err){
            console.log(err)

        }

    }

    
    return (
        
        <div className="add">
            <div className="content">
                <input type="text" value={title} placeholder="Title" onChange={e=>setTitle(e.target.value)}/>
                <div className="editorContainer">
                <JoditEditor
                ref={editor}
                value={content}
                onChange={newContent => setContent(newContent) }/>
                
            </div>
            </div>
            <div className="menu">
                <div className="item">
                    <h1>Publish</h1>
                    <span>
                        <b>Status:</b> Draft
                    </span>
                    <span>
                        <b>Visibility:</b> Public
                    </span>
                    <input style={{display:"none"}}type="file" name=""id="file" onChange={e=>setFile(e.target.files[0])}/>
                    <label className="file" htmlFor="file">Upload Image</label>
                    <div className="buttons">
                        <button>Save as a draft</button>
                        <button onClick={handleClick}>Publish</button>
                    </div>
                </div>
                <div className="item">
                    <h1>Category</h1>
                    <div className="cat">

                    <input type="radio" checked={cat === "symptoms"} name="cat" value="symptoms" id="symptoms" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="symptoms">Symptoms</label>
                    </div>
                    <div className="cat">
                    <input type="radio" checked={cat === "treatment"} name="cat" value="treatment" id="treatment" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="treatment">Treatment</label>
                    </div>
                    <div className="cat">
                    <input type="radio" checked={cat === "medicine"} name="cat" value="medicine" id="medicine" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="medicine">Medicine</label>
                    </div>
                    <div className="cat">
                    <input type="radio" checked={cat === "cases"} name="cat" value="cases" id="cases" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="cases">Cases</label>
                    </div>
                    <div className="cat">
                    <input type="radio" checked={cat === "hospitals"} name="cat" value="hospitals" id="hospitals" onChange={e=>setCat(e.target.value)}/>
                    <label htmlFor="hospitals">Hospitals</label>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Write 