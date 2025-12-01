import Title from './Title';
import CardLayout from './CardLayout';
import { icons } from '../assets/assets'

const CRMCards = ({data}) => {

    const servicesData = [
        {
            title: 'CRM Tailored for Prop Firms',
            desc: 'Run funded trader programs with confidence. Automate challenges, manage payouts, and support unlimited traders and affiliates with a CRM designed to handle every stage of a prop firm’s growth.',
            cards: [
                {
                    heading: "Multi-Level IB Networks",
                    description: "Build and manage unlimited affiliate structures with tiered commissions.",
                    icon: icons.multi_level_ib
                },
                {
                    heading: "Multi-Language Support",
                    description: "Offer a seamless user experience across 50+ languages with RTL compatibility.",
                    icon: icons.multi_lang_icon
                },
                {
                    heading: "Unlimited Clients",
                    description: "No restrictions on traders or accounts as your brokerage grows.",
                    icon: icons.unlimited_users_icon
                },
                {
                    heading: "Lead & Ticketing System",
                    description: "Track leads, manage support, and monitor sales in one place.",
                    icon: icons.lead_icon
                },
                {
                    heading: "Advanced Security",
                    description: "Two-factor authentication and strict data protection for peace of mind.",
                    icon: icons.advance_security
                },
                {
                    heading: "Seamless Integrations",
                    description: "Connect with MetaTrader, payment gateways, and other third-party tools.",
                    icon: icons.lead_icon
                },
            ]
        }

    ];

    let crmData = (data) ? data : servicesData;

    // console.log(crmData[0].cards);

  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

      <Title title={crmData[0].title} desc={crmData[0].desc}/>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 overflow-hidden'>
        {crmData[0].cards.map((service, index)=>(
            <CardLayout key={index} service={service} index={index} />
        ))}
      </div>

    </div>
  )
}

export default CRMCards