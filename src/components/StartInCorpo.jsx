import { Link } from 'react-router-dom';
import { motion } from "motion/react"

const StartInCorpo = ({data}) => {

  return (
    <div className='mx-auto flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-10 pb-10 text-gray-800 dark:text-white'>

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

        <Link to="/contact" className='flex item-center justify-center bg-primary hover:bg-white hover:text-primary hover:border-primary hover:border hover:shadow-xl transition-all ease-in-out text-white py-3 px-9 rounded-full'>
            Let's Connect & Make Impact
        </Link>

    </div>
  )
}

export default StartInCorpo