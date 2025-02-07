import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-900 text-white min-h-screen p-10 space-y-10">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="text-lg max-w-4xl">
          I am a passionate frontend developer with expertise in modern web technologies. With years of experience in creating stunning, responsive, and user-friendly designs, I bring ideas to life with precision and innovation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-800 p-5 rounded-lg">
            <img src="/premium_photo-1661963874418-df1110ee39c1.jpeg" alt="Experience" className="w-full h-48 object-cover rounded-lg mb-3" />
            <h2 className="text-3xl font-bold">Experience</h2>
            <p>3+ years of professional development experience.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg">
            <img src="/aa..webp" alt="Education" className="w-full h-48 object-cover rounded-lg mb-3" />
            <h2 className="text-3xl font-bold">Education</h2>
            <p>Bachelor's degree in Computer Science.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg">
            <img src="/image.png" alt="Experience" className="w-full h-48 object-cover rounded-lg mb-3" />
            <h2 className="text-3xl font-bold">Experience</h2>
            <p>3+ years of professional development experience.</p>
          </div>
          <div className="bg-gray-800 p-5 rounded-lg">
            <img src="/8.png" alt="Experience" className="w-full h-48 object-cover rounded-lg mb-3" />
            <h2 className="text-3xl font-bold">Experience</h2>
            <p>3+ years of professional development experience.</p>
          </div>
        </div>
        <Footer/>
      </main>
      
    </>
  );
}
