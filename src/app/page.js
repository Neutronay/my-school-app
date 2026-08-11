import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import { supabase } from '@/lib/supabase';

export const revalidate = 0;

export default async function HomePage() {
  // Fetch latest 3 activities for the homepage feed
  const { data: recentActivities } = await supabase
    .from('activities')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-[#4C2380] text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6 relative z-10">
          <span className="bg-[#FDB913] text-[#4C2380] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-sm inline-block">
            STC Group of Schools
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Nurturing Excellence, Building Future Leaders
          </h1>
          <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto font-light leading-relaxed">
            Academic Excellence, Character, and Integrity. Providing quality, affordable, and value-driven education.
          </p>
          <div className="pt-4 flex justify-center gap-4 flex-wrap">
            <Link
              href="/about"
              className="bg-[#FDB913] text-[#4C2380] font-bold px-7 py-3.5 rounded-md hover:bg-yellow-400 transition shadow-md"
            >
              Learn More
            </Link>
            <Link
              href="/activities"
              className="border border-white/80 text-white font-semibold px-7 py-3.5 rounded-md hover:bg-white hover:text-[#4C2380] transition"
            >
              School Activities
            </Link>
          </div>
        </div>
      </header>

      {/* Key Metrics / Quick Stats */}
      <section className="bg-[#3b1b63] text-white py-10 border-t border-[#5a2a99]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#FDB913]">430+</p>
            <p className="text-xs md:text-sm text-purple-200 mt-1 uppercase tracking-wider">Active Students</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#FDB913]">45+</p>
            <p className="text-xs md:text-sm text-purple-200 mt-1 uppercase tracking-wider">Dedicated Educators</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#FDB913]">365/400</p>
            <p className="text-xs md:text-sm text-purple-200 mt-1 uppercase tracking-wider">Top UTME Score</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-extrabold text-[#FDB913]">Top Quality</p>
            <p className="text-xs md:text-sm text-purple-200 mt-1 uppercase tracking-wider">National School Award</p>
          </div>
        </div>
      </section>

      {/* Founder / Proprietor Welcome Message */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="text-[#4C2380] font-bold text-sm tracking-wide uppercase">Proprietor's Welcome</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Developing Confident & Morally Upright Leaders
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At STC (School Time Communication) Group of Schools, we believe education goes beyond the classroom. Founded on the principles of discipline, integrity, and academic achievement, we are committed to providing a supportive environment where every student discovers their God-given potential.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Together with our dedicated staff and parents, we nurture the next generation of leaders equipped with the knowledge, values, and skills needed to succeed in an ever-changing world.
            </p>
            <div className="pt-2 border-l-4 border-[#FDB913] pl-4 mt-4">
              <p className="font-bold text-gray-900 text-lg">Evang. (Dr.) Abraham A. Thomas</p>
              <p className="text-sm text-gray-500">Founder & Proprietor, STC Group of Schools</p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="bg-purple-50 rounded-2xl p-8 border border-purple-100 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-[#4C2380]">Educational Philosophy</h3>
              <blockquote className="text-gray-700 italic border-l-2 border-[#4C2380] pl-4 text-sm leading-relaxed">
                "True education develops both the intellect and the character. We are committed to equipping every student with knowledge, confidence, discipline, and moral values."
              </blockquote>
              <ul className="space-y-2 text-sm text-gray-600 pt-2">
                <li className="flex items-center gap-2">
                  <span className="text-[#FDB913] font-bold">✓</span> Academic & Moral Excellence
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FDB913] font-bold">✓</span> Safe & Supportive Learning Space
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FDB913] font-bold">✓</span> Practical & Holistic Development
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Major Achievements Highlights */}
      <section className="bg-gray-100 py-16 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900">A Tradition of Distinction</h2>
            <p className="text-gray-600 mt-2 text-sm">STC students consistently excel at state and national levels.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 bg-purple-100 text-[#4C2380] rounded-lg flex items-center justify-center font-bold mb-4">🏆</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Chemistry Champions</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Overall Winner of the prestigious Oluwole Awokoya Chemistry Competition (Lagos State) in both 2024 and 2026.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 bg-purple-100 text-[#4C2380] rounded-lg flex items-center justify-center font-bold mb-4">🎓</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Exceptional UTME Results</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Recorded outstanding academic performance, including a top national score of 365 in the UTME examinations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="w-10 h-10 bg-purple-100 text-[#4C2380] rounded-lg flex items-center justify-center font-bold mb-4">⭐</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">National Recognition</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Awarded the National Quality Education Award for Top Quality School of the Year by the Quality Management Development Institute.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Updates Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Recent Updates</h2>
              <p className="text-sm text-gray-500 mt-1">Stay connected with happenings at STC College</p>
            </div>
            <Link href="/activities" className="text-[#4C2380] font-semibold text-sm hover:text-[#FDB913] transition">
              View All Updates &rarr;
            </Link>
          </div>

          {!recentActivities || recentActivities.length === 0 ? (
            <p className="text-gray-500 text-sm">No recent activities posted yet.</p>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {recentActivities.map((act) => (
                <div key={act.id} className="border border-gray-200 rounded-xl overflow-hidden bg-gray-50 hover:shadow-md transition">
                  {act.image_url && (
                    <img src={act.image_url} alt={act.title} className="w-full h-44 object-cover" />
                  )}
                  <div className="p-5">
                    <span className="text-xs text-gray-400 font-medium">{new Date(act.created_at).toLocaleDateString()}</span>
                    <h3 className="font-bold text-gray-900 text-lg mt-1 line-clamp-1">{act.title}</h3>
                    <p className="text-gray-600 text-xs mt-2 line-clamp-3 leading-relaxed">{act.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 border-t border-gray-800 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4 space-y-3">
          <p className="font-semibold text-white">STC Group of Schools</p>
          <p className="text-xs text-gray-500">In God We Trust</p>
          <p className="pt-2">© {new Date().getFullYear()} STC Group of Schools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}