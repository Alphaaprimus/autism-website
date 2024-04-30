import React,{useState,useEffect} from "react";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import { Link , useLocation, useNavigate} from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from "moment";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

const Single = () => {
    const [post, setPost] = useState( {} )

    const location = useLocation()

    const navigate = useNavigate()
    

    const postId = location.pathname.split("/")[2] 

    const {currentUser} = useContext(AuthContext)

    useEffect(() => {
        const fetchData = async () =>{
            
            try{
                
                const res = await axios.get(`http://localhost:8800/api/posts/${postId}`,{ withCredentials: true })
                //console.log(res.data)
                setPost(res.data);

            }catch(err){
                console.log(err)
            }
        };
        fetchData();
    }, [postId]);

    const handleDelete = async () => {
        try{
            await axios.delete(`http://localhost:8800/api/posts/${postId}`,{ withCredentials: true });
            navigate("/")

        }catch(err){
            console.log(err)
        }
    }

    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }

    return (
        <div className="single">
            <div className="content">
                <div>
                <img src={`../upload/${post?.img}`} alt="" />
                </div>
                <div className="user">
                    {post.userImg && <img src={post.userImg} alt="" />}
                <div className="info">
                    <span>{post?.username}</span>
                    <p>Posted {moment(post.date).fromNow()}</p>
                </div>
                {console.log("post",post)}
                {console.log(currentUser)}
                {console.log("singlejsx")}
                {console.log(currentUser.username)}
                {currentUser.username === post.username  && (
                <div className="edit">
                    <Link to={`/write?edit=2`} state={post}>
                    <img src={Edit} alt=""/>
                    </Link>
                    <img onClick = {handleDelete}  src={Delete} alt=""/>
                </div>
                )}
                </div>
                <h1>{post.title}</h1>
                <p>
                {getText(post.descript)}
                </p>
                </div>
                <Menu cat={post.cat}/>
                <div>
                    {console.log("end singlejsx")}
                    {console.log(currentUser)}
                </div>
        </div>
    )
}

export default Single