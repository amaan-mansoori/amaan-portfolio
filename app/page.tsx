"use client";

import { useState } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Github, Linkedin, Download } from "lucide-react";

/* ================= ANIMATION VARIANTS ================= */
const fadeStagger = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.16, 1, 0.3, 1],
      duration: 0.65,
      staggerChildren: 0.12,
    },
  },
};

const fadeItem = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { ease: [0.16, 1, 0.3, 1], duration: 0.65 },
  },
};

export default function Page() {
  return (
    <main className="px-6 md:px-10 text-white">

      {/* ================= HERO ================= */}
      <section id="home" className="min-h-[92vh] flex flex-col items-center justify-center text-center relative">
        <div className="hero-ambience halo" />
        <div className="hero-ambience-2 halo" />

        <motion.div variants={fadeStagger} initial="hidden" animate="show">
          <motion.h1 variants={fadeItem} className="hero-title text-5xl md:text-6xl font-semibold">
            Hello, I’m <span className="gradient-text">Amaan.</span>
          </motion.h1>

          <motion.p variants={fadeItem} className="hero-sub max-w-xl mx-auto mt-4 text-white/75 text-lg">
            I create modern, AI-driven web applications engineered for performance and real-world impact.
          </motion.p>

          <motion.div variants={fadeItem} className="mt-10 flex gap-4 flex-wrap justify-center">
            <a href="https://github.com/amaan-mansoori" target="_blank" className="btn-premium flex items-center gap-2">
              <Github size={18} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/amaan-mansoori-01b451285/" target="_blank" className="btn-premium flex items-center gap-2">
              <Linkedin size={18} /> LinkedIn
            </a>
            <a href="/resume.pdf" download className="btn-premium flex items-center gap-2">
              <Download size={18} /> Resume
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="section-wrap">
        <motion.div variants={fadeStagger} initial="hidden" whileInView="show" viewport={{ amount: 0.3 }}>
          <motion.h2 variants={fadeItem} className="section-title text-cyan-300">About Me</motion.h2>

          <motion.div variants={fadeItem} className="max-w-4xl mx-auto mt-8 space-y-6 text-white/85 leading-relaxed text-[17px]">
            <p>I’m a Final-year B.Tech CSE student at LNCT, Bhopal (’26) and an aspiring Software Development Engineer focused on building scalable, AI-driven web applications with clean design and strong engineering fundamentals.</p>
            <p>I work across the full stack, with experience in Java, Python, JavaScript, ReactJS, Node.js, MongoDB, and REST APIs, backed by strong foundations in Data Structures & Algorithms and software architecture.</p>
            <p>Certified by Google, Microsoft, NVIDIA, Oracle, Cisco, and Infosys — I build GenAI applications using LLMs, RAG pipelines, BigQuery ML, and Kubernetes for real-world use cases.</p>
            <p>I’ve mentored 3,000+ learners through workshops and community sessions in full-stack development, cloud, and AI — fostering collaboration, curiosity, and continuous learning.</p>
            <p className="font-semibold text-white">Driven by impact, simplicity, and innovation — I aim to design. build. scale.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SKILLS ================= */}
      <section id="skills" className="section-wrap">
        <motion.div variants={fadeStagger} initial="hidden" whileInView="show" viewport={{ amount: 0.3 }}>
          <motion.h2 variants={fadeItem} className="section-title text-cyan-300">Skills & Tools</motion.h2>

          <motion.div variants={fadeItem} className="grid md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
            <SkillCard title="Languages" items="Java, Python, JavaScript" />
            <SkillCard title="Frontend" items="ReactJS, HTML, CSS, Tailwind, Bootstrap" />
            <SkillCard title="Backend" items="Node.js, Express.js, REST APIs" />
            <SkillCard title="Databases" items="MySQL, MongoDB" />
            <SkillCard title="Cloud & AI" items="Kubernetes, LLMs, RAG, BigQuery ML" />
            <SkillCard title="Tools" items="Git, GitHub, Postman, VS Code" />
            <SkillCard title="Core Areas" items=" DSA, OOPs, Problem Solving" />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects" className="section-wrap">
        <motion.div variants={fadeStagger} initial="hidden" whileInView="show" viewport={{ amount: 0.3 }}>
          <motion.h2 variants={fadeItem} className="section-title text-cyan-300">Featured Projects</motion.h2>

          <div className="projects-grid mt-10">
            <ProjectCard img="/projects/spotifyclone.png" title="Spotify Clone" desc="Full-stack streaming with playlists & playback." tags={["React", "Node", "MongoDB"]} />
            <ProjectCard img="/projects/genai.png" title="GenAI RAG App" desc="Retrieval-augmented conversational AI assistant." tags={["Python", "Streamlit", "LLMs"]} />
            <ProjectCard img="/projects/portfolio.png" title="Portfolio Website" desc="Cinematic smooth, ultra-premium portfolio." tags={["Next.js", "Tailwind", "Motion"]} />
          </div>
        </motion.div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section id="certifications" className="section-wrap">
        <motion.div variants={fadeStagger} initial="hidden" whileInView="show" viewport={{ amount: 0.3 }}>
          <motion.h2 variants={fadeItem} className="section-title text-cyan-300">Certifications</motion.h2>

          <div className="cert-accordion mt-10 max-w-5xl mx-auto space-y-5">
            <CertGroup logo="/logos/nvidia.jpeg" title="NVIDIA" items={[
              "Develop, Customize & Publish in Omniverse",
              "Getting Started with AI on Jetson Nano",
              "Getting Started with Deep Learning",
              "Learn OpenUSD: Pipelines",
              "Learn OpenUSD: Stages, Prims, Attributes",
            ]} />

            <CertGroup logo="/logos/oracle.jpeg" title="Oracle" items={[
              "OCI Architect Associate (2025)",
              "OCI Developer Professional (2025)",
              "OCI Foundations Associate (2025)",
              "OCI Generative AI Professional (2025)",
            ]} />

            <CertGroup logo="/logos/googlecloud.jpeg" title="Google Cloud / SkillsBoost" items={[
              "Build Google Cloud Infrastructure for AWS Professionals",
"Build Google Cloud Infrastructure for Azure Professionals",
"Build a Website on Google Cloud",
"Create ML Models with BigQuery ML",
"DevOps Essentials",
"Develop GenAI Apps with Gemini and Streamlit",
"Google Cloud Essentials",
"Introduction to Generative AI",
"Introduction to Large Language Models",
"Introduction to Responsible AI",
"Manage Kubernetes in Google Cloud",
"Prompt Design in Vertex AI",
"Responsible AI: Applying AI Principles with Google Cloud",
"Use Machine Learning APIs on Google Cloud",
"Flutter Development",
            ]} />

            <CertGroup logo="/logos/microsoft.jpeg" title="Microsoft" items={[
              "Develop Solutions that use Azure Cosmos DB",
"Developer Career Path",
"Implement Azure Functions",
"Implement Secure Azure Solutions",
"Implement User Authentication and Authorization",
"Introduction to Microsoft Azure (Architecture & Services)",
"Introduction to Microsoft Azure (Management & Governance)",
"Introduction to Microsoft Azure (Cloud Concepts)",
            ]} />

            <CertGroup logo="/logos/forage.png" title="Forage Job Simulations" items={[
              "AWS – Solutions Architecture",
              "Accenture – Developer Program",
              "JPMorgan – Software Engineering",
              "Walmart USA – Advanced SWE",
              "Tata – GenAI Data Analytics",
              "Deloitte – Cybersecurity",
            ]} />

            <CertGroup logo="/logos/cisco.jpeg" title="Cisco Networking Academy" items={[
              "CyberOps Associate",
              "Introduction to Cybersecurity",
              "CCNA: Introduction to Networks",
            ]} />

            <CertGroup logo="/logos/infosys.jpeg" title="Infosys Springboard" items={[
              "DBMS (Part 1)",
              "Java Programming Fundamentals",
            ]} />

            <CertGroup logo="/logos/google.jpeg" title="Google Digital Garage" items={[
              "Fundamentals of Digital Marketing",
            ]} />
          </div>
        </motion.div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="section-wrap text-center">
        <motion.div variants={fadeStagger} initial="hidden" whileInView="show" viewport={{ amount: 0.3 }}>
          <motion.h2 variants={fadeItem} className="section-title text-cyan-300">Let’s Collaborate</motion.h2>
          <motion.p variants={fadeItem} className="text-white/75 text-lg mb-6">
            Open to SDE Internships, Full-time Roles & AI/Cloud Engineering.
          </motion.p>
          <motion.a variants={fadeItem} href="mailto:mansoori280904@gmail.com" className="btn-premium">
            mansoori280904@gmail.com
          </motion.a>
        </motion.div>
      </section>

      <footer className="py-10 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Amaan — Crafted with Precision ✦ Next.js + Tailwind + Motion
      </footer>

    </main>
  );
}

/* ================= COMPONENTS ================= */
function SkillCard({ title, items }: { title: string; items: string }) {
  return (
    <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl hover:border-cyan-300/30 transition">
      <h3 className="text-cyan-300 font-semibold mb-1">{title}</h3>
      <p className="text-white/75 text-[15px]">{items}</p>
    </div>
  );
}

function ProjectCard({ img, title, desc, tags }: any) {
  return (
    <motion.div variants={fadeItem}>
      <Tilt glareEnable={false} scale={1.02} tiltMaxAngleX={6} tiltMaxAngleY={6} transitionSpeed={1200} className="project-card">
        <div className="project-img">
          <Image src={img} alt={title} fill className="object-cover" unoptimized />
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>
        <div className="project-tags">{tags.map((t: string) => <span key={t} className="tag">{t}</span>)}</div>
      </Tilt>
    </motion.div>
  );
}

function CertGroup({ logo, title, items }: { logo: string; title: string; items: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div variants={fadeItem} onClick={() => setOpen(!open)} className="border border-white/15 bg-white/5 backdrop-blur-xl rounded-2xl p-5 transition hover:border-cyan-300/40 cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src={logo} alt={title} width={32} height={32} className="object-contain rounded-sm" unoptimized />
          <h3 className="text-[17px] font-semibold tracking-wide">{title}</h3>
        </div>
        <span className="text-cyan-300 text-xl select-none">{open ? "−" : "+"}</span>
      </div>

      {open && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 mt-5 text-white/75 text-[14.5px] leading-relaxed transition duration-300">
          {items.map((item, index) => (<div key={index} className="border-l border-cyan-300/30 pl-3">{item}</div>))}
        </div>
      )}
    </motion.div>
  );
}
