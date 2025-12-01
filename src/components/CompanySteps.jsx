import React from 'react'
import Title from './Title';

const CompanySteps = ({data}) => {

let headingClass = 'text-dark text-3xl sm:text-5xl font-medium text-center';
let paragraphClass = 'max-w-lg text-center text-whprimaryite/75 mb-6';

  return (
    <div className='mx-auto flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-10 pb-10 text-gray-800 dark:text-white'>

        <Title title={data.title} desc={data.desc} h2Class={headingClass} pClass={paragraphClass}/>

        <div className='px-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                data.beinits.map((point, idx) => (
                    <div className='border-2 border-gray-100 bg-white shadow hover:shadow-2xl dark:bg-black rounded-xl p-5 mb-2 flex flex-col lg:flex-row gap-3 relative' key={idx}>
                        <div className="w-12 h-12">
                            <div className='bg-primary/10 hover:shadow-2xl p-3 rounded-xl'>
                                <div className='bg-primary rounded-full w-6 h-6 text-white flex items-center justify-center'>{point.item}</div>
                            </div>
                        </div>
                        <div className="content-box">
                            <h3 className='font-semibold'>{point.title}</h3>
                            <p className='text-sm text-gray-500'>{point.desc}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default CompanySteps