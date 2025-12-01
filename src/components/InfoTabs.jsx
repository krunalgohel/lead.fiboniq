import { useId, useMemo, useState } from "react";
import {
  Cog6ToothIcon,
  PuzzlePieceIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Title from "./Title";
import assets from "../assets/assets";

function classNames(...xs) {
  return xs.filter(Boolean).join(" ");
}

const PANELS = {
  adminDashboard: (
    <div className="w-full">
      <img src={assets.banner_crm} className="w-full h-auto sm:h-[500px] object-cover" />
    </div>
  ),
  ibPortal: (
    <div className="w-full">
      <img src={assets.ib_crm} className="w-full h-auto sm:h-[500px] object-cover" />
    </div>
  ),
  security: (
    <div className="w-full">
      <img src={assets.two_fac_crm} className="w-full h-auto sm:h-[500px] object-cover" />
    </div>
  ),
  roles: (
    <div className="w-full">
      <img src={assets.role_mang_crm} className="w-full h-auto sm:h-[500px] object-cover" />
    </div>
  ),
  client: (
    <div className="w-full">
      <img src={assets.lang_crm} className="w-full h-auto sm:h-[500px] object-cover" />
    </div>
  ),
  ticket: (
    <div className="w-full">
      <img src={assets.ticket_crm} className="w-full h-auto sm:h-[500px] object-cover" />
    </div>
  ),
};


export default function InfoTabs() {
  const defaultTab = "adminDashboard";
  const [active, setActive] = useState(defaultTab);
  const id = useId();

  const tabs = useMemo(() => ([
    { key: "adminDashboard", label: "Admin Dashboard", Icon: Cog6ToothIcon },
    { key: "ibPortal",    label: "IB Portal", Icon: PuzzlePieceIcon },
    { key: "security",   label: "Advance Security",  Icon: UserCircleIcon },
    { key: "roles",      label: "Roles & Permissions", Icon: ShieldCheckIcon },
    { key: "client",     label: "Client Area",       Icon: Squares2X2Icon },
    { key: "ticket",    label: "Ticket System",      Icon: UsersIcon },
  ]), []);

  const activeIndex = tabs.findIndex(t => t.key === active);

  const onKeyDown = (e) => {
    const max = tabs.length - 1;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = activeIndex === max ? 0 : activeIndex + 1;
      setActive(tabs[next].key);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = activeIndex === 0 ? max : activeIndex - 1;
      setActive(tabs[prev].key);
    } else if (e.key === "Home") {
      e.preventDefault();
      setActive(tabs[0].key);
    } else if (e.key === "End") {
      e.preventDefault();
      setActive(tabs[max].key);
    }
  };

  return (
    <section className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
      {/* Mobile select */}
      <Title title="Explore the Fiboniq CRM in Action" desc="Get a closer look at the core modules of our CRM. From admin controls to client management and security, explore how each feature helps streamline your brokerage operations."/>

      <div className="md:hidden mb-4">
        <label htmlFor={`${id}-tabselect`} className="sr-only">Select section</label>
        <select
          id={`${id}-tabselect`}
          value={active}
          onChange={(e) => setActive(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm dark:bg-neutral-900 dark:text-white dark:border-white/10"
        >
          {tabs.map(t => (
            <option key={t.key} value={t.key}>{t.label}</option>
          ))}
        </select>
      </div>

      {/* Desktop pills */}
      <div
        role="tablist"
        aria-label="Settings sections"
        onKeyDown={onKeyDown}
        className="hidden md:flex flex-wrap items-center gap-3 overflow-x-auto pb-2"
      >
        {tabs.map((t) => {
          const selected = active === t.key;
          return (
            <button
              key={t.key}
              role="tab"
              aria-selected={selected}
              aria-controls={`${id}-panel-${t.key}`}
              id={`${id}-tab-${t.key}`}
              onClick={() => setActive(t.key)}
              className={classNames(
                "group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition",
                selected
                  ? "border-transparent bg-primary text-white shadow"
                  : "border-gray-200 bg-white text-gray-900 hover:border-red-300 hover:text-primary dark:bg-neutral-900 dark:text-white dark:border-white/10"
              )}
            >
              <t.Icon className={classNames("h-4 w-4", selected && "opacity-90")} />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content */}
      {tabs.map((t) => {
        const selected = active === t.key;
        return (
          <div
            key={t.key}
            role="tabpanel"
            id={`${id}-panel-${t.key}`}
            aria-labelledby={`${id}-tab-${t.key}`}
            hidden={!selected}
            className="mt-6 w-full"
          >
            {/* Top rounded background like your screenshot */}
            <div className="rounded-2xl bg-gray-50 p-2 md:p-3 dark:bg-white/5">
              {PANELS[t.key]}
            </div>
          </div>
        );
      })}
    </section>
  );
}
