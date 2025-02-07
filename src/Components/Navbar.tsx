import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-slate-300 p-5 flex justify-between items-center ">
      <h1 className="text-3xl font-bold text-center justify-center hover:text-blue-200">Hassam Portfolio</h1>
      <div className="space-x-4 text-lg ">
        <Link className='hover:text-blue-300' href="/">Home</Link>
        <Link className='hover:text-blue-700' href="/About">about</Link>
        <Link className='hover:text-blue-600' href="/skills">skills</Link>
        <Link className='hover:text-blue-400' href="/contact">Contact</Link>
        <Link className='hover:text-blue-400' href="/Profile">Profile</Link>
        <Link className='hover:text-blue-400' href="/intro">Introduction</Link>
      </div>
    </nav>
  );
}
