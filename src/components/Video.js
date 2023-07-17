import { useContext } from "react";
import "./Video.css";
import ThemeContext from "../context/ThemeContext";
import useVideoDispatch from "../hooks/VideoDispatch";
function Video({ title, channel,key,id,views, time, verified,imgUrl,children,editVideo }) {
  console.log('render Video')
 const theme = useContext(ThemeContext)
 const dispatch = useVideoDispatch()
  return (
    <>
      <div className={`container ${theme}`}>
        <button className="close" onClick={()=>  dispatch({type:'DELETE',payload : id})}>❌</button>
        <button className="edit" onClick={()=> editVideo(id)}>Edit</button>
        <div className="pic">
          <img
            src={imgUrl}
            alt="Fortuner"
            id={key}
          />
          
        </div>
        <div className="title" >{title}</div>
        
          <div className="channel">{channel} { verified ? '✅' : null}</div>
       
        <div className="views">
          {views} views <span>.</span> {time}
        </div>

        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;
