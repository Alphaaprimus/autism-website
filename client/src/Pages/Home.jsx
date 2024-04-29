import React,{ useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import axios from "axios"

import HeroSection from "../components/Herosection";

const Home = () => {

    const [posts, setPosts] = useState( [] )

    const cat = useLocation().search
    //console.log(cat)

    useEffect(() => {
        const fetchData = async () =>{
            
            try{
                
                const res = await axios.get(`http://localhost:8800/api/posts${cat}`)
                //console.log(res.data)
                setPosts(res.data);

            }catch(err){
                console.log(err)
            }
        };
        fetchData();
    }, [cat]);

    // const posts=[
    //     {
    //         id:1,
    //         title:"Car",
    //         desc:"Car is good",
    //         img:"https://images.barrons.com/im-527268?width=700&size=1.5440289505428226&pixel_ratio=1.5"
    //     },
    //     {
    //         id:2,
    //         title:"Bike",
    //         desc:"Bike is good",
    //         img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202103/03_The_all-new_BMW_M_1000_RR_1200x768.jpeg?size=690:388"
    //     },
    // ];



    const getText = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html")
        return doc.body.textContent
    }
    //`../upload/{post.img}`

    return (
        <div className="home">
        <div>
            <img className="heroimg" src="https://s3-alpha-sig.figma.com/img/8c16/9f51/41df3d24d82d09e112fc88125e1d4a04?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=emx2xokr03WTENr2XP0SHkgyQYSXgHHZHIcTFiq1DdcNvsM5ZS8M1NdBSs0u0w4Pq9Oz6Wt5USmXmDXArAL8VmER8j2SnjYn9ZRfiRFcAz0RuqBkD3g-XytE5ljGTLNhzWaUakV25mVjVWtvY9qz~Dp6O7SvcSez7DGeXCwvpjxdQH3eqULwwwtftmUAhrpuB3KEsKsM9lsUe7FvuHFb1i9RXjkxaRkDl-MAt4VpCWb0ANJIVc-X0aT2MmB~6-JPXCDAPi3jgBLTMnwWuQ7pfq-7J7fYybHj6SqCjp75YRtOZgihW4ZuUz6K9fsS~e4YYBu8SSFYWNnrvaL9Fkcr~g__" alt=""/>
        </div>
            <div className="posts">
                {posts.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={`./upload/${post.img}`} alt=""/> 
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                            <h1>{post.title}</h1>
                            </Link>
                            <p>{getText(post.descript)}</p>
                            <button>Read More</button>
                        </div>
                        
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Home