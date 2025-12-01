import assets from "../assets/assets";
import Title from "./Title";

export default function BentoGrids() {
  return (
    <div className="dark:bg-black">
      {/* <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 text-gray-800 dark:text-white"> */}
        {/* <h2 className="text-center text-base/7 font-semibold text-indigo-400">Deploy faster</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          Everything you need to deploy your app
        </p> */}
        <div className='mx-auto flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 pb-30 text-gray-800 dark:text-white'>
        <Title title={`Built to Integrate, Ready to Scale`} desc={`Connect with leading trading platforms, payment providers, and KYC solutions — all fully integrated into Fiboniq CRM for a seamless workflow.`} />


        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-primary dark:bg-gray-900 lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white dark:text-white max-lg:text-center">Mobile friendly</p>
                <p className="mt-2 max-w-lg text-sm/6 text-white/75 dark:text-white/75 max-lg:text-center">
                  Access your CRM anywhere with a fully responsive design optimized for desktops, tablets, and mobile devices.
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-white dark:bg-gray-900 outline outline-white/20">
                  <img
                    alt=""
                    src={assets.mobile_screen}
                    className="size-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl" />
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-primary dark:bg-gray-900 max-lg:rounded-t-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white dark:text-white max-lg:text-center">Performance</p>
                <p className="mt-2 max-w-lg text-sm/6 text-white/75 dark:text-white/70 max-lg:text-center">
                  Handle unlimited clients and transactions with lightning-fast performance built for high-growth brokerages.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src={assets.bars_pattern}
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl" />
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-primary dark:bg-gray-900" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white dark:text-white max-lg:text-center">Security</p>
                <p className="mt-2 max-w-lg text-sm/6 text-white/75 dark:text-white/70 max-lg:text-center">
                  Protect your business with enterprise-grade security, including two-factor authentication and encrypted data.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src={assets.secure_cloud}
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-primary dark:bg-gray-900 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white dark:text-white max-lg:text-center">Seamless Integrations</p>
                <p className="mt-2 max-w-lg text-sm/6 text-white/75 dark:text-white/70 max-lg:text-center">
                  Connect effortlessly with trading platforms, payment gateways, and third-party apps through robust integration options.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-primary/60 outline outline-white/10">
                  <div className="flex bg-primary outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-white dark:text-white/70">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        Client Portal
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2 text-white/45">Accounts</div>
                    </div>
                  </div>
                  <div className="ps-2 pt-2 overflow-clip">
                    <img src={assets.client_portal} alt="" className="w-full h-full object-contain"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
