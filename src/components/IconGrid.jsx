import { Link } from 'react-router-dom';
import { motion } from "motion/react"

const IconGrid = ({data}) => {
  return (
    <div className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white dark:bg-black text-dark py-20'>
        <motion.h3
            initial={{opacity: 0, y: 30 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.6}}
            viewport={{once: true}}
            className='text-3xl font-medium text-center mb-3'>
                {data.title}
        </motion.h3>

        <motion.p 
                initial={{opacity: 0, y: 20 }}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.2}}
                viewport={{once: true}}
              className={`max-w-3xl text-center text-gray-500 dark:text-white/75 mb-6`}>{data.desc}</motion.p>

        <motion.p 
                initial={{opacity: 0, y: 20 }}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5, delay: 0.2}}
                viewport={{once: true}}
              className={`max-w-3xl text-center text-gray-500 dark:text-white/75 mb-6`}>{data.desc2}</motion.p>

        <div className='flex flex-wrap max-w-5xl items-start justify-center md:gap-9 gap-5'>
            {
                data.beinits.map((point, idx) => (
                    <div className='flex flex-col items-center gap-2 md:w-44 w-40 text-center max-w-sm:mb-3' key={idx}>
                        <div className='bg-primary/10 rounded-full p-4 w-24 h-24 flex items-center justify-center hover:shadow-2xl'>
                            {point.icon}
                        </div>
                        <h4 className='font-semibold'>{point.title}</h4>
                        <p className='text-sm'>{point.desc}</p>
                    </div>
                ))
            }
        </div>

        <Link to="/contact" className='flex item-center justify-center bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border hover:shadow-xl transition-all ease-in-out text-white py-3 px-9 rounded-full'>
            Let's Connect & Make Impact
        </Link>
    </div>
  )
}

export default IconGrid