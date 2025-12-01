export default function StatsSection({
  items = [
    { value: "500K+", label: "End Users Managed" },
    { value: "200+",  label: "Built-in Features" },
    { value: "150+",  label: "Integrations" },
    { value: "7+",    label: "Years Experience" },
  ],
  className = "",
}) {
  return (
    <section className={`w-full bg-white dark:bg-black  ${className}`}>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-28">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 text-center">
          {items.map((item, i) => (
            <li key={i} className="flex flex-col items-center">
              <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-b from-[#f16c22] to-[#f16c22] bg-clip-text text-transparent">
                {item.value}
              </div>
              <div className="mt-2 text-base sm:text-lg font-medium text-black dark:text-white">
                {item.label}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
