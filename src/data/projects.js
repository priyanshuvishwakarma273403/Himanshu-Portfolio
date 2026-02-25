// src/data/projects.js
import b1 from '../assets/branding/b1.jpg';
import b2 from '../assets/branding/b2.jpg';
import b3 from '../assets/branding/b3.jpg';
import b4 from '../assets/branding/b4.jpg';
import b5 from '../assets/branding/b5.jpg';
import b6 from '../assets/branding/b6.jpg';

import v1 from '../assets/vector/v1.jpg';
import v2 from '../assets/vector/v2.jpg';
import v3 from '../assets/vector/v3.jpg';
import v4 from '../assets/vector/v4.jpg';
import v5 from '../assets/vector/v5.jpg';

import c1 from '../assets/creative/01.jpg';
import c2 from '../assets/creative/02.jpg';
import c3 from '../assets/creative/03.jpg';
import c4 from '../assets/creative/04.jpg';
import c5 from '../assets/creative/05.jpg';

import g1 from '../assets/gym/g1.jpg';
import g2 from '../assets/gym/g2.jpg';
import g3 from '../assets/gym/g3.jpg';
import g4 from '../assets/gym/g4.jpg';

import s1 from '../assets/Sports/s1.jpg';
import s2 from '../assets/Sports/s2.jpg';
import s3 from '../assets/Sports/s3.jpg';
import s4 from '../assets/Sports/s4.jpg';
import s5 from '../assets/Sports/s5.jpg';
import s6 from '../assets/Sports/s6.jpg';

import cn1 from '../assets/Cnc/c1.jpg';
import cn2 from '../assets/Cnc/c2.jpg';
import cn3 from '../assets/Cnc/c3.jpg';
import cn4 from '../assets/Cnc/c4.jpg';
import cn5 from '../assets/Cnc/c5.jpg';
import cn6 from '../assets/Cnc/c6.jpg';
import cn7 from '../assets/Cnc/c7.jpg';
import cn8 from '../assets/Cnc/c8.jpg';
import cn9 from '../assets/Cnc/c9.jpeg';
import cn10 from '../assets/Cnc/c10.jpeg';
import cn11 from '../assets/Cnc/c11.jpeg';
import cn12 from '../assets/Cnc/c12.jpeg';
import cn13 from '../assets/Cnc/c13.jpeg';
import cn14 from '../assets/Cnc/c14.jpeg';
import cn15 from '../assets/Cnc/c15.jpg';

export const brandingImages = [b1, b2, b3, b4, b5, b6];
export const projects = [
    {
        id: 1,
        slug: "genpact-acoustic-panels",
        title: "Genpact Office – Acoustic Panel System",
        shortDesc: "1000+ CNC-ready acoustic sheets designed for a corporate office space.",
        description: "Designed and produced CNC-ready 2D cutting files for over 1000 oscillating CNC acoustic panels for Genpact's office interior. Focused on pattern precision, sheet nesting optimisation, and production-ready file delivery.",
        category: "CNC/Acoustic",
        tools: ["CorelDRAW", "Oscillating CNC", "Nesting Software"],
        tags: ["CNC", "Acoustic", "Production"],
        role: "CNC File Designer & Operator",
        output: "1000+ acoustic sheets, optimised cutting files",
        result: "On-time delivery with zero file rejections; 15% material wastage reduction via nesting.",
        featured: true,
        gradient: "from-indigo-900 via-blue-900 to-slate-900",
        accentColor: "#6366f1",
    },
    {
        id: 2,
        slug: "blue-star-acoustic",
        title: "Blue Star Office – Acoustic Installation",
        shortDesc: "500+ precision CNC cutting files for acoustic ceiling panels.",
        description: "Full production pipeline for Blue Star's office – from initial design brief to final CNC-ready output files. Created 500+ individual panel files with tight tolerances and zero kerf errors.",
        category: "CNC/Acoustic",
        tools: ["CorelDRAW", "AutoCAD", "Oscillating CNC"],
        tags: ["CNC", "Acoustic", "Vector"],
        role: "CNC File Designer",
        output: "500+ acoustic panel files",
        result: "100% first-pass approval on cutting files; seamless site installation.",
        featured: true,
        gradient: "from-blue-900 via-cyan-900 to-slate-900",
        accentColor: "#3b82f6",
    },
    {
        id: 3,
        slug: "aerocity-project",
        title: "Aerocity Commercial – CNC Panels",
        shortDesc: "300+ decorative CNC acoustic panels for Aerocity commercial space.",
        description: "Complete CNC production file design for Aerocity's commercial interior acoustic project. Managed complex curve patterns and precision tolerances for oscillating blade cutting.",
        category: "CNC/Acoustic",
        tools: ["CorelDRAW", "Illustrator", "Oscillating CNC"],
        tags: ["CNC", "Commercial", "Interior"],
        role: "CNC File Designer & Operator",
        output: "300+ decorative acoustic panels",
        result: "Delivered within deadline with high customer satisfaction.",
        featured: true,
        gradient: "from-violet-900 via-purple-900 to-slate-900",
        accentColor: "#8b5cf6",
    },
    {
        id: 9,
        slug: "vector-illustration-tracing",
        title: "Vector Illustration & Tracing",
        shortDesc: "High-fidelity vector tracing of logos, mascots, and complex artwork.",
        description: "Expert vector tracing and illustration work — converting raster images to clean, scalable vectors. Specialised in logo re-creation, mascot illustration, and complex artwork vectorisation.",
        category: "Vector Tracing",
        tools: ["Illustrator", "CorelDRAW"],
        tags: ["Vector", "Illustration", "Tracing"],
        role: "Graphic Designer",
        output: "Scalable .ai / .cdr vector files",
        result: "Delivered production-quality vectors for print and signage use.",
        featured: false,
        gradient: "from-sky-900 via-blue-900 to-slate-900",
        accentColor: "#0ea5e9",
        images: [v1, v2, v3, v4, v5],
    },
    {
        id: 10,
        slug: "laser-cutting-files",
        title: "Laser Cutting Design Files",
        shortDesc: "Precision 2D laser cutting artwork for acrylic and wood substrates.",
        description: "Designed intricate 2D cutting files for laser cutting machines — covering acrylic nameplates, wooden display panels, and decorative lattice screens. Optimised paths for clean cuts and minimal burn.",
        category: "Laser",
        tools: ["CorelDRAW", "Illustrator", "Laser Machine"],
        tags: ["Laser", "2D Cutting", "CNC"],
        role: "File Designer & Operator",
        output: "15+ laser cutting project files",
        result: "Zero re-cuts needed; client praised precision and finish quality.",
        featured: false,
        gradient: "from-red-900 via-orange-900 to-slate-900",
        accentColor: "#ef4444",
    },
    {
        id: 12,
        slug: "cnc-decorative-panels",
        title: "Decorative CNC Pattern Panels",
        shortDesc: "Intricate geometric patterns for oscillating CNC decorative panels.",
        description: "Created complex geometric and floral pattern designs for decorative oscillating CNC panels used in interior design projects. Each pattern was optimised for cutting speed and edge quality.",
        category: "CNC/Acoustic",
        tools: ["CorelDRAW", "Illustrator", "Oscillating CNC"],
        tags: ["CNC", "Pattern", "Decorative"],
        role: "Designer & CNC Operator",
        output: "50+ decorative panel patterns",
        result: "Patterns adopted as standard designs in client's product catalogue.",
        featured: false,
        gradient: "from-teal-900 via-cyan-900 to-slate-900",
        accentColor: "#14b8a6",
    },
    {
        id: 13,
        slug: "branding",
        title: "Branding",
        shortDesc: "Complete branding work — logos, identity systems, and visual design deliverables.",
        description: "A curated showcase of branding projects including logo design, full visual identity systems, brand guidelines, stationery, and social media kits crafted for various clients across industries.",
        category: "Branding",
        tools: ["Illustrator", "Photoshop", "CorelDRAW", "Canva"],
        tags: ["Logo", "Identity", "Brand"],
        role: "Graphic Designer",
        output: "Logo suites, brand guidelines, print & digital assets",
        result: "Clients successfully launched with strong, consistent brand identities.",
        featured: true,
        gradient: "from-violet-900 via-fuchsia-900 to-slate-900",
        accentColor: "#a855f7",
        images: [b1, b2, b3, b4, b5, b6],
    },
    {
        id: 14,
        slug: "creative",
        title: "Creative",
        shortDesc: "Creative design work — posters, social media, and expressive visual campaigns.",
        description: "A collection of creative design projects spanning promotional posters, social media campaigns, and expressive visual artwork. Each piece balances aesthetics with communication, crafted to make an instant impact.",
        category: "Creative",
        tools: ["Photoshop", "Illustrator", "Canva"],
        tags: ["Creative", "Poster", "Visual"],
        role: "Graphic Designer",
        output: "Print-ready & digital creative assets",
        result: "Successfully used across digital and physical marketing campaigns.",
        featured: true,
        gradient: "from-pink-900 via-rose-900 to-slate-900",
        accentColor: "#f43f5e",
        images: [c1, c2, c3, c4, c5],
    },
    {
        id: 15,
        slug: "gym",
        title: "Gym",
        shortDesc: "Fitness-themed graphic designs — posters, motivational prints & gym branding.",
        description: "A collection of gym and fitness-focused graphic design work including motivational posters, workout prints, gym branding materials, and high-energy visual content crafted for fitness brands and personal trainers.",
        category: "Gym",
        tools: ["Photoshop", "Illustrator", "Canva"],
        tags: ["Gym", "Fitness", "Poster"],
        role: "Graphic Designer",
        output: "Gym posters, prints & branding assets",
        result: "Delivered bold, high-energy designs used across gym walls and social media.",
        featured: true,
        gradient: "from-orange-900 via-red-900 to-slate-900",
        accentColor: "#f97316",
        images: [g1, g2, g3, g4],
    },
    {
        id: 16,
        slug: "sports",
        title: "Sports",
        shortDesc: "Dynamic sports-themed designs — jerseys, posters & high-energy visual content.",
        description: "A showcase of sports-focused graphic design work including jersey designs, match day posters, team branding, and action-packed visual content created for sports clubs, athletes, and fitness events.",
        category: "Sports",
        tools: ["Photoshop", "Illustrator", "CorelDRAW"],
        tags: ["Sports", "Jersey", "Design"],
        role: "Graphic Designer",
        output: "Sports posters, jersey designs & event graphics",
        result: "Delivered high-impact sports visuals used by teams and athletes across campaigns.",
        featured: true,
        gradient: "from-green-900 via-emerald-900 to-slate-900",
        accentColor: "#22c55e",
        images: [s1, s2, s3, s4, s5, s6],
    },
    {
        id: 17,
        slug: "cnc",
        title: "CNC",
        shortDesc: "Precision CNC cutting files — acoustic panels, decorative patterns & production-ready artwork.",
        description: "A comprehensive showcase of CNC design and production work. Includes oscillating CNC cutting files for acoustic foam panels, decorative interior patterns, corporate office installations, and custom lattice designs — all optimised for zero-error machine cutting.",
        category: "CNC/Acoustic",
        tools: ["CorelDRAW", "Illustrator", "AutoCAD", "Oscillating CNC"],
        tags: ["CNC", "Acoustic", "Production"],
        role: "CNC File Designer & Operator",
        output: "1500+ CNC-ready panel files across multiple projects",
        result: "Zero file rejections; on-time delivery with material optimisation across all projects.",
        featured: true,
        gradient: "from-cyan-900 via-sky-900 to-slate-900",
        accentColor: "#06b6d4",
        images: [cn1, cn2, cn3, cn4, cn5, cn6, cn7, cn8, cn9, cn10, cn11, cn12, cn13, cn14, cn15],
    },
];

export const categories = ["All", "Branding", "Creative", "Gym", "Sports", "Logo", "Poster/Social", "Vector Tracing", "CNC/Acoustic", "Laser"];

export const caseStudies = projects.filter(p => p.category === "CNC/Acoustic" && p.output);

export const featuredProjects = projects.filter(p => p.featured);
