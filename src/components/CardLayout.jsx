import { motion } from "motion/react"

const CardLayout = ({service, index}) => {

  return (
    <motion.div 
        initial={{opacity: 0, y: 30 }}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: index * 0.2}}
        viewport={{once: true}}
    className='max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10'>
    
           
        <div className='flex flex-col text-center items-center gap-10 p-8 transition-all rounded-[10px] bg-white hover:bg-gradient-to-b from-[#f16c22] to-[#f16c22] hover:text-white dark:bg-gray-900 h-full'>

            <div className='bg-gray-100 dark:bg-gray-700 rounded-full relative'>
                <img src={service.icon} alt="" className='max-w-24 bg-white dark:bg-gray-900 rounded-full m-2 transition-all delay-150 hover:-translate-y-2 hover:shadow-2xl'/>
            </div>
            <div className='flex-1'>
                <h3 className='font-bold'>{service.heading}</h3>
                <p className='text-sm mt-2'>{service.description}</p>
            </div>

        </div>

    </motion.div>
  )
}

export default CardLayout