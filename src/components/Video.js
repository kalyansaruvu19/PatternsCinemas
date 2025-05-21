import video from "../video/largevideo.mp4";


export const Video = () => {
  
  return (
 <div style={{ width: 'auto' }}>
  <video className="w-full" autoPlay controls>
        <source src={video} type="video/mp4" />
      </video> 
 </div>
   
    
    
  );
};
