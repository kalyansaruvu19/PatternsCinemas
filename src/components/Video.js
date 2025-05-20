import video from "../video/largevideo.mp4"

export const Video = () => {
  return (
    <div><section>
                        
              <video class="w-full" autoplay controls >
                <source src={video} type="video/mp4" />
               
              </video>
              
                      </section></div>
  )
}
