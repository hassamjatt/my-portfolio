import Link from 'next/link';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Summary from '@/Components/Summary';
import Header from '@/Components/Header';
import { GiSkills } from 'react-icons/gi';
import Skills from '@/Components/Skills';
import Intrio from '@/Components/Intrio';

export default function Home() {
  return (
    <>
      <Navbar />
      <Intrio />
      <Header />

      <main className="bg-gray-900 text-white min-h-screen p-10 space-y-20">
        <section className="text-center space-y-5">
          <h1 className="text-9xl font-extrabold text-center">Welcome</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover my projects, skills, and experiences as a professional frontend developer. 
            Dive into my world of creativity and innovation!
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Project Cards */}
          {[
            { src: "/hh.jpg", title: "Project 1", desc: "Amazing project details go here." },
            { src: "/ii.jpg", title: "Project 2", desc: "Incredible work that showcases my skills." },
            { src: "/kk.jpg", title: "Project 3", desc: "A brief description of another masterpiece." },
            { src: "/image.jpg", title: "Project 4", desc: "Another creative piece." },
            { src: "/kkkal.jpg", title: "Project 5", desc: "Yet another incredible project." },
            { src: "/lll.jpg", title: "Project 6", desc: "A stunning display of skills." },
            { src: "/22..webp", title: "Project 7", desc: "A visually appealing creation." },
            { src: "/11..webp", title: "Project 8", desc: "An innovative masterpiece." },
            { src: "/3..webp", title: "Project 9", desc: "Showcasing technical excellence." },
            { src: "/1.jpg", title: "Project 10", desc: "An inspiring project journey." },
            { src: "/2..webp", title: "Project 11", desc: "Creative ideas transformed into reality." },
            { src: "/31.jpg", title: "Project 12", desc: "A magnificent addition to my portfolio." },
          ].map((project, index) => (
            <div key={index} className="bg-gray-800 p-5 rounded-lg text-center">
              <img src={project.src} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-3" />
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <p>{project.desc}</p>
            </div>
          ))}
        </section>

        <section className="text-center">
          <Link href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-bold">
            Get in Touch
          </Link>
        </section>

        <Skills />
        <Summary />
        <Footer />
      </main>
    </>
  );
}
