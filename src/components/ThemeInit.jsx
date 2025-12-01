import React, { useEffect, useRef, useState } from 'react'

const ThemeInit = () => {

    const dotref = useRef(null)
    const outlineref = useRef(null)
    // Refs and custom cursor Position tracking
    const mouse = useRef({x: 0, y: 0})
    const position = useRef({x: 0,y: 0})

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX
            mouse.current.y = e.clientY
        }

        document.addEventListener('mousemove', handleMouseMove)

        const animate = () => {
            position.current.x += (mouse.current.x - position.current.x) * 0.1
            position.current.y += (mouse.current.y - position.current.y) * 0.1

            if(dotref.current && outlineref.current) {
            dotref.current.style.transform = `translate3d(${mouse.current.x - 6}px, ${mouse.current.y - 6}px, 0)`
            outlineref.current.style.transform = `translate3d(${position.current.x - 20}px, ${position.current.y - 20}px, 0)`
            }

            requestAnimationFrame(animate)

        }

        animate()

        return ()=>{
            document.removeEventListener('mousemove', handleMouseMove)
        }
    })

    return(
        <>
            {/* cursor ring */}
            <div ref={outlineref} className='fixed top-0 left-0 h-10 w-10 rounded-full border border-primary pointer-events-none z-[9999] visible max-sm:hidden'>

            </div>

            {/* cursor dot */}
            <div ref={dotref} className='fixed top-0 left-0 h-3 w-3 rounded-full bg-primary pointer-events-none z-[9999] visible max-sm:hidden'>

            </div>
        </>
    )
}

export default ThemeInit