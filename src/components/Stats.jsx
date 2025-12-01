import { motion } from "framer-motion";
import Title from "./Title";

export default function Stats() {
  const stats = [
    { value: "No-Cap", label: "On  Active Clients" },
    { value: "99.99%", label: "System Uptime Guarantee" },
    { value: "50+", label: "Language Support" },
    { value: "No-Cap", label: "Monthly Trading Volume" },
    ];

  return (
    <section className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white dark:bg-black text-dark py-20">
        <Title title="Trusted Technology for Growing Brokerages" desc="Delivering reliable technology with enterprise-grade CRM, IB management, and automation features that help brokers scale confidently."/>
      <div className="max-w-6xl mx-auto px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 overflow-hidden rounded-2xl border border-gray/10 bg-gradient-to-tr from-[#f16c22] to-[#f16c22]  dark:bg-black dark:text-dark text-white"
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center px-6 py-8 text-center border-b border-gray/10 md:border-b-0 md:border-r last:border-none"
            >
              <p className="text-2xl font-semibold">{item.value}</p>
              <p className="text-sm mt-1">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
