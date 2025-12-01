import React from 'react'
import assets from '../assets/assets'

const SubHeader = ({title, description, image}) => {
  return (
    <section className={`relative pt-12 bg-primary/5 dark:bg-primary/10`}>
        <div className={`max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10`}>
            {/* Left side: text */}
            <div className="space-y-4 order-last md:order-first">
                <h1 className="text-3xl sm:text-5xl text-center md:text-start font-medium dark:text-white">
                {title}
                </h1>
                <p className="text-sm sm:text-lg max-w-lg text-center md:text-start text-gray-500 dark:text-white/75 mb-6">
                {description}
                </p>
            </div>


            {/* Right side: image with background overlay */}
            <div className="relative">
                <img
                src={image}
                alt="Contact us"
                className="rounded-2xl size-52 md:size-96 object-cover mx-auto"
                />
            </div>
        </div>
    </section>
  )
}

export default SubHeader