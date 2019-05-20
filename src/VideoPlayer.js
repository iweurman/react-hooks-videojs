import React, { useLayoutEffect, useRef, useState } from 'react'
import videojs from 'video.js'

export default () => {

  const [key, setkey] = useState(0)
  let videoNode = useRef(null)
  let player = undefined;
  const options = {
    autoplay: true,
    controls: true,
    sources: [{
      src: '//vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }]
  }

  useLayoutEffect(() => {
    player = videojs(videoNode.current, options).ready()
    return () => {
      if(player) {
        player.dispose()
        setkey(key + 1)
      }
    }
  }, [options.sources.src])

  
  return (
    <div data-vjs-player key={`video-${key}`}>
      <video ref={videoNode} className="video-js"></video>
    </div>
  )
  
}
