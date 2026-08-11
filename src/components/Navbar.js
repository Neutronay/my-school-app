import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-[#4C2380] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center space-x-3 text-xl font-bold tracking-wide">
          <Image 
            src="/schlogo.png" 
            alt="STC College Logo" 
            width={40} 
            height={40} 
            className="object-contain"
          />
          <span>STC COLLEGE</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="hover:text-[#FDB913] transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#FDB913] transition">
            About Us
          </Link>
          <Link href="/staff" className="hover:text-[#FDB913] transition">
            Meet Our Staff
          </Link>
          <Link href="/activities" className="hover:text-[#FDB913] transition">
            Activities
          </Link>
          <Link 
            href="/admin" 
            className="bg-[#FDB913] text-[#4C2380] font-semibold px-4 py-2 rounded-md hover:bg-yellow-400 transition"
          >
            Admin Portal
          </Link>
        </div>
      </div>
    </nav>
  );
}