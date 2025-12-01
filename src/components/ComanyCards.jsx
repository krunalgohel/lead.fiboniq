import React from 'react'
import Title from './Title'
import assets, { company_logos } from '../assets/assets'

const ComanyCards = ({theme}) => {

  const logos = (theme == "dark") ? company_logos.dark : company_logos.light;

  const pspIntegration = [
    {
      title: "Praxis",
      isPopular: true,
      logo: (theme == "dark") ? logos.praxis_dark : logos.praxis
    },
    {
      title: "Help 2 Pay",
      isPopular: false,
      logo: (theme == "dark") ? logos.help2pay_dark : logos.help2pay
    },
    {
      title: "CheeZee Pay",
      isPopular: false,
      logo: (theme == "dark") ? logos.cheezeepay_dark : logos.cheezeepay
    },
    {
      title: "Match Pay",
      isPopular: false,
      logo: (theme == "dark") ? logos.matchPay_dark : logos.matchPay
    },
    {
      title: "+30 More",
      isPopular: false,
      logo: assets.plus_icon
    },
  ];

  const socialIntegration = [
    {
      title: "Telegram",
      isPopular: false,
      logo: (theme == "dark") ? logos.telegram_dark : logos.telegram
    },
    {
      title: "Whatsapp",
      isPopular: false,
      logo: (theme == "dark") ? logos.whatsapp_dark : logos.whatsapp
    },
    {
      title: "Slack",
      isPopular: false,
      logo: (theme == "dark") ? logos.slack_dark : logos.slack
    },
    {
      title: "Google Ads",
      isPopular: false,
      logo: (theme == "dark") ? logos.GoogleAds_dark : logos.GoogleAds
    },
    {
      title: "Meta",
      isPopular: true,
      logo: (theme == "dark") ? logos.metaAds_dark : logos.metaAds
    },
    {
      title: "+10 More",
      isPopular: false,
      logo: assets.plus_icon
    },
  ];

  const kycIntegration = [
    {
      title: "Didit",
      isPopular: false,
      logo: (theme == "dark") ? logos.didit_dark : logos.didit
    },
    {
      title: "Sumsub",
      isPopular: true,
      logo: (theme == "dark") ? logos.sumsub_dark : logos.sumsub
    },
    {
      title: "+7 More",
      isPopular: false,
      logo: assets.plus_icon
    },
  ];

  const tradingIntegration = [
    {
      title: "MetaTrader 5",
      isPopular: false,
      logo: (theme == "dark") ? logos.metaTrader5_dark : logos.metaTrader5
    },
    {
      title: "MetaTrader 4",
      isPopular: false,
      logo: (theme == "dark") ? logos.metaTrader4_dark : logos.metaTrader4
    },
    {
      title: "Match Trader",
      isPopular: false,
      logo: (theme == "dark") ? logos.matchTrader_dark : logos.matchTrader
    },
    {
      title: "Trade Locker",
      isPopular: false,
      logo: (theme == "dark") ? logos.tradelocker_dark : logos.tradelocker
    },
    {
      title: "Vertex",
      isPopular: false,
      logo: (theme == "dark") ? logos.vertexTrade_dark : logos.vertexTrade
    },
    {
      title: "TakeProfit Tech",
      isPopular: false,
      logo: (theme == "dark") ? logos.takeProfitTech_dark : logos.takeProfitTech
    },
    {
      title: "+5 More",
      isPopular: false,
      logo: assets.plus_icon
    },
  ];

  return (
    <div className='mx-auto flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-30 text-gray-800 dark:text-white'>
        <Title title='Seamlessly Integrated' desc='Connect leading third-party tools directly into our CRM to streamline your workflows' />

        <h3 className='font-medium mb-3 text-xl pb-1 border-b-2 border-b-primary'>Trading Platform</h3>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
        {
            Object.entries(tradingIntegration).map(([idx, item]) => (
                <div className='border border-gray-300 rounded-2xl px-6 py-4 hover:border-primary/50 hover:shadow-2xl dark:bg-gray-800 relative mb-4' key={idx}>
                  {item.isPopular && (
                      <div className='absolute -top-2.5 text-center right-0 left-0'>
                              <span className='bg-white dark:bg-primary border border-gray-300 rounded-full md:px-4 px-2 py-1 md:py-2 text-primary dark:text-white md:text-xs text-[10px] font-medium uppercase tracking-wide'>Popular</span>
                      </div>
                    )}
                    <img src={item.logo} alt=""  className='h-20 w-38 object-contain aspect-3/2 mb-3 mx-auto'/>
                    <p className='text-sm text-dark dark:text-white text-center font-semibold'>{item.title}</p>
                </div>
            ))
        }
        </div>

        <h3 className='font-medium mb-3 text-xl pb-1 border-b-2 border-b-primary'>KYC</h3>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
        {
            Object.entries(kycIntegration).map(([idx, item]) => (
                <div className='border border-gray-300 rounded-2xl px-6 py-4 hover:border-primary/50 hover:shadow-2xl dark:bg-gray-800 relative mb-4' key={idx}>
                    {item.isPopular && (
                      <div className='absolute -top-2.5 text-center right-0 left-0'>
                              <span className='bg-white border border-gray-300 rounded-full px-4 py-2 text-primary text-xs uppercase tracking-wide'>Popular</span>
                      </div>
                    )}
                    <img src={item.logo} alt=""  className='h-20 w-38 object-contain aspect-3/2 mb-3 mx-auto'/>
                    <p className='text-sm text-dark dark:text-white text-center font-semibold'>{item.title}</p>
                </div>
            ))
        }
        </div>

        <h3 className='font-medium mb-3 text-xl pb-1 border-b-2 border-b-primary'>Lead & Social</h3>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
        {
            Object.entries(socialIntegration).map(([idx, item]) => (
                <div className='border border-gray-300 rounded-2xl px-6 py-4 hover:border-primary/50 hover:shadow-2xl dark:bg-gray-800 relative mb-4' key={idx}>
                    {item.isPopular && (
                      <div className='absolute -top-2.5 text-center right-0 left-0'>
                              <span className='bg-white dark:bg-primary border border-gray-300 rounded-full md:px-4 px-2 py-1 md:py-2 text-primary dark:text-white md:text-xs text-[10px] font-medium uppercase tracking-wide'>Popular</span>
                      </div>
                    )}
                    <img src={item.logo} alt=""  className='h-20 w-38 object-contain aspect-3/2 mb-3 mx-auto'/>
                    <p className='text-sm text-dark dark:text-white text-center font-semibold'>{item.title}</p>
                </div>
            ))
        }
        </div>

        <h3 className='font-medium mb-3 text-xl pb-1 border-b-2 border-b-primary'>PSP Integration</h3>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-4'>
        {
            Object.entries(pspIntegration).map(([idx, item]) => (
                <div className='border border-gray-300 rounded-2xl px-6 py-4 hover:border-primary/50 hover:shadow-2xl dark:bg-gray-800 relative mb-4' key={idx}>
                    {item.isPopular && (
                      <div className='absolute -top-2.5 text-center right-0 left-0'>
                              <span className='bg-white dark:bg-primary border border-gray-300 rounded-full md:px-4 px-2 py-1 md:py-2 text-primary dark:text-white md:text-xs text-[10px] font-medium uppercase tracking-wide'>Popular</span>
                      </div>
                    )}
                    <img src={item.logo} alt=""  className='h-20 w-38 object-contain aspect-3/2 mb-3 mx-auto'/>
                    <p className='text-sm text-dark dark:text-white text-center font-semibold'>{item.title}</p>
                </div>
            ))
        }
        </div>

    </div>
  )
}

export default ComanyCards