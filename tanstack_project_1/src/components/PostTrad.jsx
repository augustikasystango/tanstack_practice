import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostTrad = () => {

    const api = `http://localhost:4000/posts`;
    const [isloading,setLoading]=useState(true);
    const [posts,setposts]=useState([]);

    const fetchData=async()=>{
        try{
            const resp = await axios.get(api);
            setposts(resp.data);
            setLoading(false)
        }
        catch(err){
            alert(`could not load api`);
        }
        finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div>
      <h2>Posts</h2>
   {   isloading ? (<p>Loading....</p>) :
      (
        posts.map((post)=>(
            <div key={post.id}>
                <h3 >{post.title}</h3>
                <p>{post.body}</p>
                <h6>~{post.author}</h6>
            </div>
        ))
      )}
    </div>
  )
}

export default PostTrad
