import React, { useLayoutEffect, useRef, useState } from 'react'
import videojs from 'video.js'

export default (props) => {

  const [key, setkey] = useState(0)
  const videoNode = useRef(null)
  const options = {
    autoplay: true,
    controls: true,
    sources: [{
      src: '//vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }]
  }

  useLayoutEffect(() => {
    const player = videojs(videoNode.current, options).ready(() => {
      console.log('Player ready')
    });
    return () => {
      player.dispose()
      setkey(key + 1)
    }
  }, [options.sources.src])

  
  return (
    <div data-vjs-player key={`video-${key}`}>
      <video ref={videoNode} className="video-js"></video>
    </div>
  )
  
}
