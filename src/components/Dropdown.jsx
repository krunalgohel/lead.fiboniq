import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChartBarIcon,
  SparklesIcon,
  FingerPrintIcon,
  Squares2X2Icon,
  ArrowPathIcon
} from "@heroicons/react/24/outline";

export default function SolutionsDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const items = [
    {
      icon: <ChartBarIcon className="h-6 w-6 text-gray-300" />,
      title: "Analytics",
      desc: "Get a better understanding of your traffic",
    },
    {
      icon: <SparklesIcon className="h-6 w-6 text-gray-300" />,
      title: "Engagement",
      desc: "Speak directly to your customers",
    },
    {
      icon: <FingerPrintIcon className="h-6 w-6 text-gray-300" />,
      title: "Security",
      desc: "Your customers' data will be safe and secure",
    },
    {
      icon: <Squares2X2Icon className="h-6 w-6 text-gray-300" />,
      title: "Integrations",
      desc: "Connect with third-party tools",
    },
    {
      icon: <ArrowPathIcon className="h-6 w-6 text-gray-300" />,
      title: "Automations",
      desc: "Build strategic funnels that will convert",
    },
  ];

  // close on outside click or Esc
  useEffect(() => {
    const handler = (e) => {
      if (
        open &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", handler);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1 text-black dark:text-white"
      >
        Solutions
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="fixed mt-3 w-80 rounded-2xl bg-gray-800 shadow-xl ring-1 ring-black/10 p-4 z-auto"
          >
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <button
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl p-3 hover:bg-gray-700/50 text-left transition"
                >
                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-lg bg-gray-700/50">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-100">
                      {item.title}
                    </p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
