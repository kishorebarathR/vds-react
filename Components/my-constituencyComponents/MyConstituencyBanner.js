"use client"
import React, { useState } from "react"
import Image from "next/image"

const MyConstituencyBanner = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false)

  const handleImageClick = () => {
    setIsVideoVisible(true)
  }
  return (
    <div>
   <div className="bg-[url('/home_images/home_banner2.png')] mx-auto w-full h-full relative bg-cover bg-center "onClick={handleImageClick}>
        {!isVideoVisible ? (
          <div className="relative">
            <img
              src="/home_images/home_banner.png "
              alt="Banner"
              className="w-full h-auto cursor-pointer bg-no-repeat "
              onClick={handleImageClick}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/home_images/play_button.svg"
                alt="Play Button"
                className="w-16 h-16 cursor-pointer bg-white rounded-full"
                onClick={handleImageClick}
              />
            </div>
          </div>
        ) : (
          <iframe
            width="100%"
            height="700"
            src="https://www.youtube.com/embed/1DSQ3D0jpaE?autoplay=1"
            title="VDS Hero Banner V2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
      </div>
  )
}

export default MyConstituencyBanner