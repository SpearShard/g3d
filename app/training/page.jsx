"use client"

import Link from 'next/link'
import { motion } from 'motion/react'
import { GraduationCap, Factory, Users, CheckCircle2, CalendarDays } from 'lucide-react'

export default function TrainingPage() {
  const audience = [
    {
      key: 'colleges',
      title: 'For Colleges',
      text: 'Workshops, internships, and lab setups to build hands‑on capability for students and faculty.',
      cta: 'Bring Galactic to Your Campus',
      Icon: GraduationCap,
      video: 'https://videos.pexels.com/video-files/5561422/5561422-uhd_2560_1440_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1600&auto=format&fit=crop',
    },
    {
      key: 'industries',
      title: 'For Industries',
      text: 'Seminars, technical team training, and customized upskilling aligned to your production goals.',
      cta: 'Train Your Workforce',
      Icon: Factory,
      video: 'https://videos.pexels.com/video-files/3731906/3731906-uhd_2560_1440_25fps.mp4',
      poster: 'https://images.unsplash.com/photo-1581091215367-59ab6d0051d4?q=80&w=1600&auto=format&fit=crop',
    },
    {
      key: 'public',
      title: 'For Public & Events',
      text: 'Hackathons, forums, conclaves, and maker meetups that spark collaboration and innovation.',
      cta: 'Host with Galactic',
      Icon: Users,
      video: 'https://videos.pexels.com/video-files/3254942/3254942-uhd_2560_1440_24fps.mp4',
      poster: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  const gallery = [
    'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504960868018-4b87b5a56466?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581091014534-047f69f1f5ae?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581091215831-7b5e8d9a9a6b?q=80&w=1200&auto=format&fit=crop',
  ]

  const sessions = [
    { date: 'Sep 12', name: 'Campus Workshop', location: 'IIT Delhi', link: '#' },
    { date: 'Sep 18', name: 'Industry Seminar', location: 'Bengaluru', link: '#' },
    { date: 'Sep 27', name: 'Maker Meetup', location: 'Pune', link: '#' },
    { date: 'Oct 03', name: 'DFAM Bootcamp', location: 'Hyderabad', link: '#' },
  ]

  return (
    <main className="text-white">
      {/* HERO / INTRO with Video */}
      <section className="relative min-h-[70vh] pt-28 pb-16 flex items-end overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster="https://images.unsplash.com/photo-1581091215367-59ab6d0051d4?q=80&w=1600&auto=format&fit=crop">
            <source src="/galactic-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#1a0f0f]/40 to-[#0f0b0b]/80" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_20%_5%,rgba(185,28,28,0.25),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-7xl font-['test'] leading-tight">Empowering the Next Generation of Makers</h1>
            <p className="mt-4 font-['scrib'] text-base md:text-xl text-red-50/90 max-w-3xl">Workshops, internships, and events designed for colleges, industries, and communities.</p>
            <div className="mt-8 font-['dena'] flex gap-3 flex-wrap">
              <Link href="/contact?subject=Training" className="bg-primary hover:bg-secondary text-white font-monumentExtended px-6 py-3 rounded-md transition">Request Training</Link>
              <Link href="/contact?subject=Invite+Us" className="bg-white/10 hover:bg-white/20 text-white font-monumentExtended px-6 py-3 rounded-md transition">Invite Us</Link>
            </div>
          </motion.div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12" style={{ WebkitClipPath: 'polygon(0 0, 100% 100%, 0 100%)', clipPath: 'polygon(0 0, 100% 100%, 0 100%)', background: 'linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(15,11,11,0.9))' }} />
      </section>

      {/* AUDIENCE-SPECIFIC TRAINING */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0b0b] via-[#130d0d] to-[#0f0b0b]" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_15%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-8">
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-['dena'] mb-10">Audience‑Specific Training</motion.h2>
          <div className="space-y-8">
            {audience.map(({ key, title, text, cta, Icon, video, poster }, idx) => (
              <motion.div key={key} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.05 }} className="rounded-xl bg-white/5 backdrop-blur-xl border border-red-500/20 shadow-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Mini video background */}
                  <div className="relative h-56 md:h-full">
                    <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster={poster}>
                      <source src={video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />
                  </div>
                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-red-300" />
                      <h3 className="text-2xl md:text-3xl font-['test']">{title}</h3>
                    </div>
                    <p className="font-['scrib'] text-gray-200 mb-5">{text}</p>
                    <ul className="space-y-2 mb-6 text-gray-100">
                      {['Hands‑on modules', 'Real equipment & tools', 'Certificates available'].map((f) => (
                        <li key={f} className="flex font-['scrib'] items-start gap-2"><CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5" /><span className="text-sm">{f}</span></li>
                      ))}
                    </ul>
                    <Link href="/contact?subject=Training" className="font-['dena'] inline-block bg-primary hover:bg-secondary text-white font-monumentExtended px-5 py-3 rounded-md transition hover:scale-105">{cta}</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0b0b] via-[#0c0b0b] to-[#0f0b0b]" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_80%_0%,rgba(185,28,28,0.15),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-8">
          <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-3xl md:text-5xl font-['dena'] mb-8">Gallery</motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((src, i) => (
              <motion.div key={src} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }} className="relative group overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                <img src={src} alt={`Training ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-2 left-2 text-xs md:text-sm opacity-0 group-hover:opacity-100 transition">
                  <p className="text-white/90">Workshop</p>
                  <p className="text-white/70">{2023 + (i % 2)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING SESSIONS */}
      <section className="relative py-20 md:py-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0b0b] via-[#130d0d] to-[#0f0b0b]" />
          <div className="absolute -inset-48 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(255,255,255,0.05),transparent_60%)]" />
        </div>
        <div className="container mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <CalendarDays className="w-6 h-6 text-red-300" />
            <h2 className="text-3xl md:text-5xl font-['dena']">Upcoming Training & Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {sessions.map((ev, i) => (
              <motion.a key={ev.date+ev.name} href={ev.link} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }} className="group rounded-xl bg-white/5 backdrop-blur-xl border border-red-500/20 p-4 hover:bg-white/10 hover:border-red-500/40 transition block">
                <div className="text-sm font-['scrib'] text-red-200 mb-1">{ev.date}</div>
                <div className="font-['test'] mb-1">{ev.name}</div>
                <div className="text-xs font-['test'] text-gray-300">{ev.location}</div>
                <div className="mt-3 text-[10px] text-white/70 opacity-0 group-hover:opacity-100 transition">Click for details</div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA with Video */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline preload="auto" poster="https://images.unsplash.com/photo-1554475901-4538ddfbccc0?q=80&w=1600&auto=format&fit=crop">
            <source src="https://videos.pexels.com/video-files/3184292/3184292-uhd_2560_1440_24fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-[#1a0f0f]/50 to-[#0f0b0b]/80" />
        </div>
        <div className="container mx-auto px-8 relative z-10 text-center">
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-4xl md:text-6xl font-['test'] mb-3">Ready to Collaborate?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.05 }} className="text-red-50/90 font-['scrib'] mb-6">From campuses to industries, let’s build the future together.</motion.p>
          <div className="flex items-center font-['dena'] justify-center gap-4 flex-wrap">
            <Link href="/contact?subject=Invite+Us" className="bg-white/10 hover:bg-white/20 text-white font-monumentExtended px-6 py-3 rounded-md transition">Invite Us</Link>
            <Link href="/contact?subject=Training" className="bg-primary hover:bg-secondary text-white font-monumentExtended px-6 py-3 rounded-md transition">Request Training</Link>
          </div>
        </div>
      </section>
    </main>
  )
}