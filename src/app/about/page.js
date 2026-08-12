import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'About Us | STC Group of Schools',
  description: 'Learn about our history, vision, mission, subjects offered, and academic standards at STC Group of Schools.',
};

export default function AboutPage() {
  const subjectCategories = [
    {
      title: "Sciences & Technology",
      subjects: ["Mathematics", "Further Mathematics", "Physics", "Chemistry", "Biology", "Basic Science", "Basic Technology", "Technical Drawing", "Agricultural Science"]
    },
    {
      title: "ICT & Computing",
      subjects: ["Computer Studies", "Data Processing", "Information & Communication Technology (I.C.T.)"]
    },
    {
      title: "Arts & Humanities",
      subjects: ["English Language", "Literature in English", "Government", "History", "Religious Studies", "French Language", "Nigerian Languages", "Cultural & Creative Arts"]
    },
    {
      title: "Commercial & Vocational",
      subjects: ["Economics", "Financial Accounting", "Commerce", "Business Studies", "Food and Nutrition", "Home Economics"]
    },
    {
      title: "Social & Life Skills",
      subjects: ["Civic Education", "Social Studies", "Geography", "Security Education", "Physical & Health Education"]
    }
  ];

  const gradingScale = [
    { range: "75 - 100", grade: "A1", remark: "Excellent", badge: "bg-emerald-100 text-emerald-800" },
    { range: "70 - 74", grade: "B2", remark: "Very Good", badge: "bg-blue-100 text-blue-800" },
    { range: "65 - 69", grade: "B3", remark: "Good", badge: "bg-blue-50 text-blue-700" },
    { range: "60 - 64", grade: "C4", remark: "Credit", badge: "bg-purple-50 text-[#4C2380]" },
    { range: "55 - 59", grade: "C5", remark: "Credit", badge: "bg-purple-50 text-[#4C2380]" },
    { range: "50 - 54", grade: "C6", remark: "Credit", badge: "bg-purple-50 text-[#4C2380]" },
    { range: "45 - 49", grade: "D7", remark: "Pass", badge: "bg-amber-100 text-amber-800" },
    { range: "40 - 44", grade: "E8", remark: "Pass", badge: "bg-amber-100 text-amber-800" },
    { range: "0 - 39", grade: "F9", remark: "Fail", badge: "bg-red-100 text-red-800" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-[#4C2380] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="bg-[#FDB913] text-[#4C2380] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            About STC Group of Schools
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Our Identity, Vision & Standards
          </h1>
          <p className="text-purple-100 max-w-xl mx-auto text-sm md:text-base font-light">
            Building a solid foundation of Godliness, Integrity, Character, and Discipline.
          </p>
        </div>
      </section>

      {/* History & Founder Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-4">
            <span className="text-[#4C2380] font-bold text-sm tracking-wide uppercase">Brief History</span>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              A Legacy of Academic & Moral Excellence
            </h2>
            <p className="text-gray-600 leading-relaxed">
              STC (School Time Communication) Group of Schools was founded by <strong>Evang. (Dr.) Abraham A. Thomas</strong>, an educationist, administrator, and advocate for academic excellence. Established with a vision to make quality education affordable and value-driven, the school balances rigorous academics with strong moral discipline.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over the years, STC has earned national acclaim—highlighted by winning the prestigious <strong>Oluwole Awokoya Chemistry Competition</strong> (Lagos State) in both 2024 and 2026, recording top UTME scores (up to 365), and receiving the <strong>National Quality Education Award</strong> for Top Quality School of the Year.
            </p>
          </div>
          <div className="md:col-span-5 bg-[#3b1b63] text-white p-8 rounded-2xl shadow-md border-t-4 border-[#FDB913]">
            <h3 className="text-xl font-bold text-[#FDB913] mb-4">Quick School Overview</h3>
            <ul className="space-y-3 text-sm text-purple-100">
              <li className="flex justify-between border-b border-purple-800/60 pb-2">
                <span className="text-purple-300">Official Name:</span>
                <span className="font-semibold text-white">STC Group of Schools</span>
              </li>
              <li className="flex justify-between border-b border-purple-800/60 pb-2">
                <span className="text-purple-300">Motto:</span>
                <span className="font-semibold text-[#FDB913]">In God We Trust</span>
              </li>
              <li className="flex justify-between border-b border-purple-800/60 pb-2">
                <span className="text-purple-300">Institution Type:</span>
                <span className="font-semibold text-white">Secondary / Basic Education</span>
              </li>
              <li className="flex justify-between border-b border-purple-800/60 pb-2">
                <span className="text-purple-300">Founder:</span>
                <span className="font-semibold text-white">Evang. (Dr.) A. A. Thomas</span>
              </li>
              <li className="flex justify-between border-b border-purple-800/60 pb-2">
                <span className="text-purple-300">School Mobile:</span>
                <span className="font-semibold text-white"><a href="tel:+2348108514857">+234 810 851 4857</a></span>
              </li>
              <li className="flex justify-between border-b border-purple-800/60 pb-2">
                <span className="text-purple-300">School Email:</span>
                <span className="font-semibold text-white"><a href="mailto:stccollege2020@gmail.com">stccollege2020@gmail.com</a></span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 relative">
            <div className="w-12 h-12 bg-[#4C2380] text-[#FDB913] rounded-xl flex items-center justify-center font-bold text-xl mb-4">
              👁️
            </div>
            <h3 className="text-2xl font-bold text-[#4C2380] mb-3">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              To build an Educational Institute with relevant facilities and manpower, laying a solid foundation of Godliness, Integrity, Character, and Discipline that will enhance academic, spiritual, and social excellence.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-amber-50/50 p-8 rounded-2xl border border-amber-100 relative">
            <div className="w-12 h-12 bg-[#FDB913] text-[#4C2380] rounded-xl flex items-center justify-center font-bold text-xl mb-4">
              🎯
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
            <ul className="space-y-2.5 text-gray-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[#4C2380] font-bold">•</span>
                <span>Raise learners who are godly, honest, and disciplined in lifestyle.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4C2380] font-bold">•</span>
                <span>Develop academically, socially, spiritually sound, and vocationally productive students.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4C2380] font-bold">•</span>
                <span>Empower learners to compete globally and stand the test of time.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4C2380] font-bold">•</span>
                <span>Contribute meaningfully to societal and national development.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Curriculum / Subjects Offered */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#4C2380] font-bold text-sm tracking-wide uppercase">Academic Curriculum</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">Subjects Offered</h2>
          <p className="text-gray-600 text-sm mt-2">A comprehensive academic curriculum designed for holistic intellectual growth.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjectCategories.map((cat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-purple-300 transition">
              <h3 className="font-bold text-[#4C2380] text-base mb-3 border-b border-gray-100 pb-2">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.subjects.map((sub, sIdx) => (
                  <span key={sIdx} className="bg-gray-100 text-gray-700 text-xs font-medium px-2.5 py-1 rounded-md">
                    {sub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Academic Grading Structure */}
      <section className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-[#4C2380] font-bold text-sm tracking-wide uppercase">Evaluation Standards</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">Grading Structure Explained</h2>
            <p className="text-gray-600 text-sm mt-2">Our official grading metric for secondary school assessments.</p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#4C2380] text-white text-xs md:text-sm uppercase tracking-wider">
                  <th className="py-3.5 px-6">Score Range (%)</th>
                  <th className="py-3.5 px-6">Grade</th>
                  <th className="py-3.5 px-6 text-right">Remark</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm">
                {gradingScale.map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition">
                    <td className="py-3.5 px-6 font-medium text-gray-900">{row.range}</td>
                    <td className="py-3.5 px-6 font-bold text-[#4C2380]">{row.grade}</td>
                    <td className="py-3.5 px-6 text-right">
                      <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${row.badge}`}>
                        {row.remark}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-10 border-t border-gray-800 text-center text-sm">
        <div className="max-w-6xl mx-auto px-4 space-y-2">
          <p className="font-semibold text-white">STC Group of Schools</p>
          <p className="text-xs text-gray-500">In God We Trust</p>
          <p className="pt-2">© {new Date().getFullYear()} STC Group of Schools. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}