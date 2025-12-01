import {blogs} from "../assets/assets";
import Title from "./Title";

const DEFAULT_POSTS = [
  {
    id: 1,
    href: "#",
    image:
      blogs.CRM_Essentials_7_Keys,
    date: "Aug 16, 2025",
    category: "Forex CRM",
    title: "7 Key Features Every Forex CRM Should Have in 2025",
    excerpt:
      "Discover essential features to look for in a forex CRM to streamline broker operations, support IB networks, and enhance client onboarding with ease.",
    author: {
      name: "Michael Foster",
      role: "Co‑Founder / CTO",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  },
  {
    id: 2,
    href: "#",
    image:
      blogs.IB_Recruit,
    date: "Mar 05, 2025",
    category: "IB Management",
    title: "How a Forex CRM Can Boost IB Recruitment and Retention",
    excerpt:
      "Introducing automation and tiered commission tracking in your IB program can make recruitment effortless. Fiboniq Technologies enables brokers to track performance and set custom payouts.",
    author: {
      name: "Michael Foster",
      role: "Co‑Founder / CTO",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  },
  {
    id: 3,
    href: "#",
    image:
      blogs.PAMM_MAM,
    date: "Feb 15, 2025",
    category: "PAMM/MAM",
    title: "Why PAMM/MAM Integration Is a Must for Modern Brokers",
    excerpt:
      "With PAMM/MAM integration, your brokerage becomes a hub for passive investing. Allocation-based trading and performance fee tracking now made simple.",
    author: {
      name: "Michael Foster",
      role: "Co‑Founder / CTO",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  },
  {
    id: 4,
    href: "#",
    image:
      blogs.Real_Cost_of_Not_Using,
    date: "Feb 12, 2025",
    category: "Broker Operations",
    title: "The Real Cost of Not Using a Forex CRM",
    excerpt:
      "Missed leads, poor communication, and manual work hurt your business. A good CRM like Fiboniq Technologies fixes this through automation and real-time visibility.",
    author: {
      name: "Michael Foster",
      role: "Co‑Founder / CTO",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  },
  {
    id: 5,
    href: "#",
    image:
      blogs.Lead_Management,
    date: "Sep 12, 2025",
    category: "Lead Management",
    title: "Lead Management Best Practices for Forex Brokers",
    excerpt:
      "Lead conversion isn’t about volume, it’s about velocity. Fiboniq CRM auto-assigns leads and integrates with Google, Meta, and more.",
    author: {
      name: "Michael Foster",
      role: "Co‑Founder / CTO",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  },
  {
    id: 6,
    href: "#",
    image:
      blogs.Multilingual,
    date: "Apr 10, 2025",
    category: "Multilingual Support",
    title: "Building a Multilingual Forex Portal: What You Need to Know",
    excerpt:
      "60% of traders prefer local languages. Fiboniq Technologies supports 15+ languages including RTL Arabic and Chinese for global reach.",
    author: {
      name: "Michael Foster",
      role: "Co‑Founder / CTO",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  },
  {
    id: 7,
    href: "#",
    image:
      blogs.CRM_Metrics,
    date: "Jan 20, 2025",
    category: "Analytics",
    title: "5 CRM Metrics Every Forex Broker Should Track",
    excerpt:
      "Conversion rates, top IBs, onboarding time, and more — track the right KPIs inside Fiboniq Technologies to grow efficiently.",
    author: {
      name: "Michael Foster",
      role: "Co‑Founder / CTO",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  },
  {
    id: 8,
    href: "#",
    image:
      blogs.Auto_Onboard,
    date: "May 02, 2025",
    category: "Onboarding",
    title: "How to Automate Client Onboarding for Your Forex Brokerage",
    excerpt:
      "From signup to first deposit — onboard in minutes with Sumsub or iDenfy integrated in Fiboniq CRM.",
    author: {
      name: "Michael Foster",
      role: "Co‑Founder / CTO",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  },
  {
    id: 9,
    href: "#",
    image:
      blogs.Payment_Provider,
    date: "May 02, 2025",
    category: "Payments",
    title: "Choosing the Right Payment Providers for Your Forex Business",
    excerpt:
      "Support Skrill, Neteller, Crypto, and more — Fiboniq Technologies FZC LLC CRM helps you manage PSPs from one dashboard.",
    author: {
      name: "Michael Foster",
      role: "Co‑Founder / CTO",
      avatar: "https://i.pravatar.cc/100?img=32",
    },
  },
];

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-100 bg-white/10 px-3 py-1 text-xs font-medium text-gray-400">
      {children}
    </span>
  );
}

function PostCard({ post }) {
  return (
    <article className="flex flex-col gap-5">
      <a href={post.href} className="group block">
        <img
          src={post.image}
          alt={post.title}
          className="aspect-[16/10] w-full rounded-2xl object-cover ring-1 ring-slate-50 transition-transform duration-300 group-hover:-translate-y-0.5"
          loading="lazy"
        />
      </a>

      <div className="flex items-center gap-3 text-sm text-slate-400">
        <time dateTime={post.date}>{post.date}</time>
        <Tag>{post.category}</Tag>
      </div>

      <h3 className="text-2xl font-semibold leading-snug tracking-tight">
        <a
          href={post.href}
          className="text-black dark:text-white/70 transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:text-primary/50 rounded"
        >
          {post.title}
        </a>
      </h3>

      <p className="text-gray-400 leading-relaxed">
        {post.excerpt}
      </p>

      {/* <div className="mt-2 flex items-center gap-3">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-white/10"
          loading="lazy"
        />
        <div className="text-sm">
          <div className="font-medium text-slate-200">{post.author.name}</div>
          <div className="text-slate-400">{post.author.role}</div>
        </div>
      </div> */}
    </article>
  );
}

const BlogGrid = ({ posts = DEFAULT_POSTS, className = "" }) => {
  return (
    <div className="mx-auto flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-10 pb-10 text-gray-800 dark:text-white">
        <Title title={`Brokerage Knowledge Hub`} desc={`	Discover articles on Forex CRM, IB programs, client onboarding, payments, and brokerage growth. Practical guides and insights to help you build a smarter, more scalable business.`} />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    
    </div>
  );
}

export default BlogGrid

