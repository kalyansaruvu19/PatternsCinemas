import video from "../video/largevideo.mp4"

export const Video = () => {
  return (
    <div>
    <video class="w-full" autoplay controls >
     <source  src={video} type="video/mp4" />
    </video>
    </div>
  )
}
