import React from 'react'

const MarqueeLines = ({slides}) => {
  return (
    <div className="relative flex overflow-x-hidden bg-gradient-to-t from-[#fb6900] to-[#f98939]">
        <div className="py-8 animate-marquee whitespace-nowrap flex items-center">
            {
                slides.map((slide, idx) => (
                    <div className={slide.classList} key={idx}>
                        {slide.item}
                    </div>
                ))
            }
        </div>
        <div className="absolute top-0 py-8 animate-marquee2 whitespace-nowrap flex items-center">
            {
                slides.map((slide, idx) => (
                    <div className={slide.classList} key={idx}>
                        {slide.item}
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MarqueeLines