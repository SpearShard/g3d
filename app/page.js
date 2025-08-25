'use client';
import { useState } from 'react';

export default function Home() {
  const marketplaceImgs = [
    'https://images.unsplash.com/photo-1581090405962-9a28c1b1f7b3?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1542567455-4f8b968d5d63?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581090707285-92c0f5c95c5b?q=80&w=1200&auto=format&fit=crop',
  ]
  const useCaseImgs = [
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581091014534-047f69f1f5ae?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581091215831-7b5e8d9a9a6b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1581090406132-7b9a1d25d7f8?q=80&w=1200&auto=format&fit=crop',
  ]
  const [activeIndustry, setActiveIndustry] = useState(null)
  const industriesInfo = {
    Aerospace: {
      blurb: 'Lightweight brackets, ducts, and tooling with documentation and process traceability for regulated programs.'
    },
    Medical: {
      blurb: 'Patient-specific models, dental fixtures, and biocompatible components with validated workflows.'
    },
    Defence: {
      blurb: 'Ruggedized parts and on-demand spares using engineering polymers and metals for mission-readiness.'
    },
    Automotive: {
      blurb: 'Jigs, fixtures, and prototype housings enabling faster iteration and ergonomic improvements.'
    },
    Electronics: {
      blurb: 'Enclosures, thermal solutions, and tooling for rapid proto-to-production in consumer and industrial devices.'
    },
    Energy: {
      blurb: 'Flow components and heat-resistant parts with complex internal channels for demanding environments.'
    },
    Industrial: {
      blurb: 'Production aids and end-use parts that reduce downtime and simplify supply chains.'
    }
  }
  return (
    <div className="min-h-screen text-white relative overflow-hidden bg-gradient-to-br from-black via-[#0f0b0b] to-[#b91c1c]" style={{ fontFamily: 'NeueMontreal, Aeonik, new, sans-serif' }}>
      {/* Hero Banner */}
      <section className="relative min-h-[100svh] md:min-h-screen flex items-center pt-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video className="w-full h-full object-cover" style={{ minHeight: '100svh' }} autoPlay muted loop playsInline preload="auto" poster="https://images.unsplash.com/photo-1581091215367-59ab6d0051d4?q=80&w=1600&auto=format&fit=crop">
            <source src="/galactic-bg.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/6819731/6819731-hd_1920_1080_24fps.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#1a0f0f]/30 to-[#b91c1c]/20" />
          <div className="absolute -inset-32 -z-10 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(185,28,28,0.35),transparent_60%)]" />
          <img src="/globe.svg" alt="texture" className="absolute right-[-10%] top-[-10%] w-[60rem] opacity-10 mix-blend-screen" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent via-[#0f0b0b]/60 to-[#0f0b0b]" />
        </div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center relative z-20">
            <div>
              <h1 className="text-5xl md:text-7xl font-['test'] leading-tight mb-6">End-to-End Additive Manufacturing</h1>
              <p className="text-red-50/90 font-['scrib'] text-lg md:text-xl mb-6">From prototype to production: Metal, SLS, and FDM with expert engineering for world-class results.</p>
              <div className="flex flex-wrap font-['scrib'] items-center gap-3 mb-8">
                <span className="text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1">Metal</span>
                <span className="text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1">SLS</span>
                <span className="text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1">FDM</span>
                <span className="text-xs text-red-100/80">Lead time: 3–7 days</span>
                <span className="text-xs text-red-100/80">ISO-grade QA</span>
              </div>
              <div className="font-['dena'] flex gap-4">
                <a href="/contact" className="bg-primary hover:bg-secondary text-white font-monumentExtended tracking-wide px-6 py-3 rounded-md">Get a Quote</a>
                <a href="/contact" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors duration-300">Book a Demo</a>
              </div>
            </div>
            <div className="md:col-start-2">
              <div className="relative rounded-2xl overflow-hidden border border-red-500/20 bg-white/5 backdrop-blur-xl shadow-2xl">
                <div className="aspect-video">
                  <img src="https://ik.imagekit.io/0s6dxbeae/EOS%20M%20400-4.png?updatedAt=1755862153632" alt="3D Printing Preview" className="w-full h-full object-cover opacity-90" loading="lazy" />
                </div>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-red-500/10 via-transparent to-red-500/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-10">Core Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <div className="text-3xl mb-4"><i className="fa-solid fa-industry" /></div>
              <h3 className="text-2xl font-['dena'] mb-2">Manufacturing</h3>
              <p className="text-gray-400 font-['scrib'] mb-4">Production-grade parts with precision and repeatability across metals and polymers.</p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 mb-4 list-none">
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1" /><span>Rapid prototyping to low-volume production</span></li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1" /><span>Functional metals and engineering polymers</span></li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1" /><span>Post-processing and finishing</span></li>
              </ul>
              <a href="/services" className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition-colors duration-300">Learn More</a>
            </div>
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <div className="text-3xl mb-4"><i className="fa-solid fa-chalkboard-user" /></div>
              <h3 className="text-2xl font-['dena'] mb-2">Training</h3>
              <p className="text-gray-400 font-['scrib'] mb-4">Upskill your team on AM workflows, design for additive, and machine operations.</p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 mb-4 list-none">
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1" /><span>Design for Additive Manufacturing (DfAM)</span></li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1" /><span>Hands-on machine and materials training</span></li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1" /><span>Process validation and QA best practices</span></li>
              </ul>
              <a href="/training" className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition-colors duration-300">Explore Training</a>
            </div>
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <div className="text-3xl mb-4"><i className="fa-solid fa-cubes" /></div>
              <h3 className="text-2xl font-['dena'] mb-2">Machines</h3>
              <p className="text-gray-400 font-['scrib'] mb-4">Procure and deploy reliable machines with installation and support.</p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 mb-4 list-none">
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1" /><span>Consultation and machine selection</span></li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1" /><span>Installation, calibration, and onboarding</span></li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check text-green-500 mt-1" /><span>Maintenance and ongoing support</span></li>
              </ul>
              <a href="/machines" className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition-colors duration-300">View Machines</a>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-2">Industries We Serve</h2>
          <p className="text-gray-400 font-['scrib'] mb-6 ">We support mission-critical programs across regulated and high-performance sectors with material traceability, process documentation, and dimensional reports.</p>
          <div className="overflow-x-auto">
            <div className="flex font-['dena'] gap-6 min-w-max py-2">
              {[
                { label: 'Aerospace', icon: 'fa-plane' },
                { label: 'Medical', icon: 'fa-heart-pulse' },
                { label: 'Defence', icon: 'fa-shield-halved' },
                { label: 'Automotive', icon: 'fa-car' },
                { label: 'Electronics', icon: 'fa-microchip' },
                { label: 'Energy', icon: 'fa-bolt' },
                { label: 'Industrial', icon: 'fa-gears' },
              ].map(({ label, icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActiveIndustry(label)}
                  className={`shrink-0 flex flex-col items-center rounded-xl px-6 py-6 border transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${activeIndustry === label ? 'bg-white/10 border-primary' : 'bg-dark-100/40 border-gray-800 hover:bg-white/5'}`}
                  aria-pressed={activeIndustry === label}
                >
                  <div className="text-3xl mb-3"><i className={`fa-solid ${icon}`} /></div>
                  <span className="text-gray-200">{label}</span>
                </button>
              ))}
            </div>
            {activeIndustry && (
              <div className="mt-6 bg-white/5 border border-red-500/20 rounded-xl p-5 md:p-6 backdrop-blur animate-fadeIn">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-['dena'] mb-2">{activeIndustry}</h3>
                    <p className="text-gray-300 font-['scrib'] max-w-3xl">{industriesInfo[activeIndustry]?.blurb}</p>
                  </div>
                  <a href="/industries" className="self-start bg-primary hover:bg-secondary text-white font-monumentExtended px-4 py-2 rounded-md transition">Learn More</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Marketplace Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-3xl md:text-5xl font-['test']">Marketplace Preview</h2>
            <a href="/marketplace" className="text-sm font-['dena'] text-gray-400 hover:text-white">View all</a>
          </div>
          <div className="overflow-x-auto">
            <div className="flex gap-6 min-w-max py-2">
              {[1,2,3,4,5,6].map((i) => (
                <div key={i} className="shrink-0 w-64 bg-red-500/10 font-['dena'] rounded-xl border border-red-500/20 overflow-hidden backdrop-blur-xl">
                  <div className="aspect-video">
                    <img src={marketplaceImgs[i % marketplaceImgs.length]} alt={`Model ${i}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <p className="text-gray-200 font-semibold mb-1">Model_{i}.stl</p>
                    <p className="text-gray-400 font-['scrib'] text-sm mb-3">High-precision part preview</p>
                    <div className="flex flex-wrap font-['scrib'] gap-2 mb-3">
                      <span className="text-[10px] bg-dark-100/60 border border-gray-800 rounded px-2 py-0.5">FDM</span>
                      <span className="text-[10px] bg-dark-100/60 border border-gray-800 rounded px-2 py-0.5">ABS</span>
                      <span className="text-[10px] bg-dark-100/60 border border-gray-800 rounded px-2 py-0.5">0.2mm</span>
                    </div>
                    <a href="/marketplace" className="text-sm text-red-300 hover:text-red-200">View model</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases or Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-10">Use Cases</h2>
          <div className="grid font-['dena'] grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Lightweight Fixture', text: '30% weight reduction for assembly fixture with SLS nylon; improved ergonomics and cycle time.' },
              { title: 'Conformal Cooling Insert', text: 'Metal-printed insert with conformal channels reduced cooling time by 42%.' },
              { title: 'Medical Jig', text: 'Patient-specific jig enabling accurate placement and faster OR setup.' },
              { title: 'Drone Bracket', text: 'High-stiffness carbon-filled part replacing CNC aluminum, cutting cost by 35%.' },
              { title: 'Electronics Enclosure', text: 'Rapid proto to production with flame-retardant material and EMI shielding.' },
              { title: 'Spare Part On-Demand', text: 'Digitized spare part inventory with print-on-demand to eliminate downtime.' },
            ].map(({ title, text }, i) => (
              <div key={i} className="bg-red-500/10 rounded-xl overflow-hidden border border-red-500/20 backdrop-blur-xl">
                <div className="aspect-[4/3]">
                  <img src={useCaseImgs[i % useCaseImgs.length]} alt={title} className="w-full h-full object-cover opacity-90" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-['dena'] mb-2">{title}</h3>
                  <p className="text-gray-400 font-['scrib'] mb-3">{text}</p>
                  <ul className="text-gray-500 font-['scrib'] text-sm space-y-1 list-none">
                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-small" /><span>Lead time: 5–10 days</span></li>
                    <li className="flex items-start gap-2"><i className="fa-solid fa-circle-small" /><span>Material & process verified</span></li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Galactic */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-8">Why Choose Galactic</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <h3 className="text-xl font-['dena'] mb-3">Made in India, global clients</h3>
              <p className="text-gray-400 font-['scrib'] mb-3">Trusted by teams across industries for quality, reliability, and speed.</p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 list-none">
                <li className="flex items-start gap-2"><i className="fa-solid fa-globe text-blue-400 mt-1" /><span>Serving aerospace, medical, defence</span></li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-truck-fast text-blue-400 mt-1" /><span>Fast logistics and delivery</span></li>
              </ul>
            </div>
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <h3 className="text-xl font-['dena'] mb-3">Metal, SLS, and FDM</h3>
              <p className="text-gray-400 font-['scrib'] mb-3">Multiple technologies under one roof for the right process per part.</p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 list-none">
                <li className="flex items-start gap-2"><i className="fa-solid fa-atom text-blue-400 mt-1" /><span>Certified materials and parameters</span></li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-flask text-blue-400 mt-1" /><span>Material testing on request</span></li>
              </ul>
            </div>
            <div className="card bg-red-500/10 border border-red-500/20 backdrop-blur-xl">
              <h3 className="text-xl font-['dena'] mb-3">End-to-End Services</h3>
              <p className="text-gray-400 font-['scrib'] mb-3">Design, manufacturing, post-processing, and QA—handled seamlessly.</p>
              <ul className="text-gray-400 font-['scrib'] text-sm space-y-1 list-none">
                <li className="flex items-start gap-2"><i className="fa-solid fa-screwdriver-wrench text-blue-400 mt-1" /><span>Machining, surface finishing, painting</span></li>
                <li className="flex items-start gap-2"><i className="fa-solid fa-check-double text-blue-400 mt-1" /><span>Dimensional reports and documentation</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-['test'] mb-2">Quick Contact</h2>
          <p className="text-gray-400 font-['scrib'] mb-6">Share your requirements—we typically respond within 24 hours. NDAs available upon request.</p>
          <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-red-500/5 p-6 rounded-xl border border-red-500/20 backdrop-blur-xl">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-['dena'] text-gray-400">Name</label>
              <input type="text" className="input-primary" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-['dena'] text-gray-400">Email</label>
              <input type="email" className="input-primary" required />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-['dena'] text-gray-400">Message</label>
              <textarea rows={5} className="input-primary" required />
            </div>
            <div className="md:col-span-2 flex flex-col gap-2">
              <label className="text-sm font-['dena'] text-gray-400">File Upload</label>
              <input type="file" multiple accept=".stl,.obj,.step,.stp,.igs,.iges,.zip" className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-white hover:file:bg-gray-600" />
              <p className="text-xs font-['scrib'] text-gray-400">Optional: upload CAD/STL files.</p>
            </div>
            <div>
              <button type="submit" className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition-colors duration-300 font-['dena']">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}