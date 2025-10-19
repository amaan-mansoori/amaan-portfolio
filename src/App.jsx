import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function App() {
  const email = "mansoori280904@gmail.com";
  const github = "https://github.com/amaan-mansoor";
  const linkedin = "https://www.linkedin.com/in/amaan-mansoori-01b451285/";
  const resume = "#";

  const phrases = [
    "Aspiring Software Development Engineer (SDE)",
    "B.Tech CSE '26 | LNCT, Bhopal",
    "Java • Python • ReactJS • Full-Stack Dev",
    "AI • GenAI • Kubernetes • BigQuery ML",
  ];
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = phrases[i];
      if (forward) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setForward(false);
        }
      } else {
        if (text.length > 0) setText(text.slice(0, text.length - 1));
        else {
          setForward(true);
          setI((idx) => (idx + 1) % phrases.length);
        }
      }
    }, forward ? 60 : 30);
    return () => clearTimeout(timeout);
  }, [text, forward, i]);

  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const blobs = [];
    for (let j = 0; j < 6; j++) {
      blobs.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 200 + Math.random() * 300,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        hue: 200 + j * 25 + Math.random() * 40,
      });
    }

    let raf;
    function draw() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      blobs.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;
        b.vx += (Math.random() - 0.5) * 0.02;
        b.vy += (Math.random() - 0.5) * 0.02;

        const grd = ctx.createRadialGradient(b.x, b.y, b.r * 0.1, b.x, b.y, b.r);
        grd.addColorStop(0, `hsla(${b.hue},80%,60%,0.12)`);
        grd.addColorStop(0.5, `hsla(${(b.hue + 40) % 360},70%,45%,0.08)`);
        grd.addColorStop(1, `hsla(${(b.hue + 80) % 360},80%,35%,0)`);

        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(draw);
    }
    draw();
    const onResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const projects = [
    {
      title: "Spotify Clone",
      desc: "Full-stack music player with search, playlists, and responsive UI.",
      tech: ["React", "Node.js", "MongoDB"],
      link: github,
    },
    {
      title: "GenAI App (Streamlit + Gemini)",
      desc: "Generative AI app with retrieval-augmented generation and RAG agents.",
      tech: ["Python", "Streamlit", "LLMs"],
      link: github,
    },
    {
      title: "React Portfolio",
      desc: "This portfolio project — responsive, animated, and deploy-ready.",
      tech: ["React", "Tailwind", "Framer Motion"],
      link: github,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <canvas ref={canvasRef} className="absolute inset-0 -z-10" />

      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 via-pink-500 to-amber-400 flex items-center justify-center shadow-lg">
            <span className="font-bold text-lg">AM</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Amaan Mansoori</h1>
            <p className="text-sm text-slate-300">Aspiring SDE • B.Tech CSE ’26</p>
          </div>
        </div>
        <nav className="flex gap-4 items-center">
          <a href={github} target="_blank" rel="noreferrer" className="text-slate-200/70 hover:text-white text-sm">GitHub</a>
          <a href={linkedin} target="_blank" rel="noreferrer" className="text-slate-200/70 hover:text-white text-sm">LinkedIn</a>
          <a href={resume} className="ml-2 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700 text-sm">Resume</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <section className="md:col-span-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="rounded-2xl backdrop-blur-sm bg-gradient-to-br from-slate-900/60 to-slate-900/40 border border-white/5 p-8 shadow-2xl">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-3xl font-bold shadow-2xl">AM</div>
              <div>
                <h2 className="text-3xl font-extrabold">Hello, I'm Amaan.</h2>
                <p className="mt-2 text-slate-300 max-w-3xl">Final-year B.Tech CSE student at LNCT, Bhopal ('26), passionate about building scalable web and AI-powered applications that solve real-world problems.</p>

                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-block text-slate-300/80">{text}</span>
                  <span className="w-1 h-6 bg-white rounded ml-1 animate-blink" />
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {["Java","Python","ReactJS","Node.js","REST APIs","DSA","Kubernetes","GenAI"].map((s) => (
                    <motion.span whileHover={{ scale: 1.05 }} key={s} className="px-3 py-1 rounded-full bg-white/6 text-sm border border-white/5">{s}</motion.span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-600 shadow hover:scale-[1.02]">View Code</a>
                  <a href={`mailto:${email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/6">Contact Me</a>
                </div>

              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/4">
                <h3 className="text-lg font-semibold">Certifications & Tools</h3>
                <p className="mt-2 text-slate-300 text-sm">Google, Microsoft, NVIDIA, Oracle, Cisco, Infosys — specializations in AI, Cloud, Cybersecurity, and Software Development.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Oracle Cloud Developer','Google Cloud Essentials','NVIDIA Deep Learning','Generative AI'].map(c=> (
                    <span key={c} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/3">{c}</span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-white/4">
                <h3 className="text-lg font-semibold">Mentorship & Impact</h3>
                <p className="mt-2 text-slate-300 text-sm">Mentored 3,000+ juniors across college groups — focused on growth, placements, and hands-on learning.</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mt-8">
            <h3 className="text-xl font-bold mb-4">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {projects.map((p) => (
                <motion.a key={p.title} href={p.link} target="_blank" rel="noreferrer" whileHover={{ y: -6 }} className="group p-4 rounded-2xl bg-gradient-to-br from-slate-900/50 to-slate-900/30 border border-white/5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold">{p.title}</h4>
                      <p className="text-sm text-slate-300 mt-1">{p.desc}</p>
                    </div>
                    <div className="text-xs text-slate-400">View</div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map(t => <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded">{t}</span>)}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </section>

        <aside className="space-y-6">
          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} className="p-6 rounded-2xl bg-slate-900/50 border border-white/4">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="mt-2 text-slate-300 text-sm">Open to SDE Internships, Full-Time SDE roles, and AI/Cloud positions.</p>
            <div className="mt-4">
              <a href={`mailto:${email}`} className="block px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-pink-600 text-sm text-white">{email}</a>
              <div className="mt-3 flex gap-3">
                <a href={github} target="_blank" rel="noreferrer" className="text-sm">GitHub</a>
                <a href={linkedin} target="_blank" rel="noreferrer" className="text-sm">LinkedIn</a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} className="p-6 rounded-2xl bg-slate-900/50 border border-white/4">
            <h3 className="text-lg font-semibold">Skills</h3>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {['Java','Python','ReactJS','Node.js','SQL','MongoDB','Kubernetes','LLMs','RAG','BigQuery ML'].map(s => (
                <div key={s} className="text-sm px-3 py-2 rounded bg-white/5">{s}</div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} className="p-6 rounded-2xl bg-slate-900/50 border border-white/4">
            <h3 className="text-lg font-semibold">Achievements</h3>
            <ul className="mt-2 text-sm text-slate-300 list-disc list-inside space-y-1">
              <li>Oracle Cloud Developer Professional</li>
              <li>NVIDIA Deep Learning specialization</li>
              <li>Google Cloud Essentials</li>
            </ul>
          </motion.div>

        </aside>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-8 text-center text-slate-400">
        <p>© {new Date().getFullYear()} Amaan Mansoori — Built with React, Tailwind & ❤</p>
      </footer>

      <style>{`@keyframes blink { 0%{opacity:1}50%{opacity:0}100%{opacity:1} } .animate-blink { animation: blink 1.2s infinite; }`}</style>
    </div>
  );
}
