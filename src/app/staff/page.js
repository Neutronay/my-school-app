import Link from 'next/link';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Meet Our Staff | STC Group of Schools',
  description: 'Meet the dedicated leadership, academic administrators, teachers, and support team at STC Group of Schools.',
};

export default function StaffPage() {
  const management = [
    { name: "Jimoh Sulaiman", title: "Principal", qualification: "HND Business Admin, PGDE", role: "Overall administration, academic excellence, and strategic school development." },
    { name: "Joseph Tom", title: "Vice Principal (Senior)", qualification: "B.Ed Physics", role: "Overseeing academic activities and maintaining high educational standards (10+ years experience)." },
    { name: "Edun Ayobami", title: "Vice Principal (Junior)", qualification: "Education Professional", role: "Managing junior secondary academic programs and student discipline." },
    { name: "John Emajimite Safe", title: "Ass. Principal II / Science Lead", qualification: "B.Sc (Edu) Chemistry", role: "Leading science education, critical thinking, and chemistry instruction." },
    { name: "Frank Odinaka", title: "Ass. Principal III", qualification: "Education Professional", role: "Assisting in secondary academic coordination and student affairs." },
    { name: "Taiwo Morenikeji", title: "Ass. Vice Principal", qualification: "NCE Early Childhood Education", role: "Ensuring student grooming, adherence to dress codes, and personal hygiene standards." },
    { name: "Alabi Rasheedat Adeola", title: "Ass. Vice Principal / Health Supervisor", qualification: "HND Biochemistry, PGDE", role: "Promoting student and staff health, safety, and hygiene monitoring." },
    { name: "Adetunji Sholabomi", title: "School Administrator", qualification: "B.Sc Mathematics, PGDE", role: "Coordinating administrative operations and school logistics." },
    { name: "Osundare Oluwakemi", title: "Headteacher (Primary)", qualification: "Education Specialist", role: "Directing early childhood and primary education curriculum." },
  ];

  const adminProfiles = [
    { name: "Thomas Iyannu Ireti", qualification: "B.Sc Accounting, PGDE", role: "Academic Excellence & Active Engagement" },
    { name: "Sobamowo Oluwatobiloba", qualification: "B.Sc Sociology", role: "Guidance & Student Counseling" },
    { name: "Akinl Oliva", qualification: "B.Sc (Ed) Economics", role: "Discipline & Conducive Environment" },
    { name: "Gbyomi Shakirat Funmilayo", qualification: "B.Sc Mass Communication", role: "Public Relations & Community Engagement" },
    { name: "Iwem Desmond", qualification: "B.Sc Business Administration", role: "Attendance, Punctuality & Accountability" },
    { name: "Yahya Folage Mujidat", qualification: "B.Sc Economics, PGDE", role: "Financial Operations & Bursary Management" },
  ];

  const teachingStaff = [
    { name: "Lawrence Chinazom Onyeachu", status: "Full Time" },
    { name: "Bello Folake", status: "Full Time" },
    { name: "Awotundun Motunrayo", status: "Full Time" },
    { name: "Racheal Gift Ogwe", status: "Full Time" },
    { name: "Mary Tobiloba Sobamowo", status: "Full Time" },
    { name: "Aina Adeola", status: "Full Time" },
    { name: "Alli Habibat", status: "Full Time" },
    { name: "Oshokoya Mariam", status: "Full Time" },
    { name: "Ubah Mitchel Christopher", specialty: "ICT & Computing", status: "Full Time" },
    { name: "Bankole Clara Olugbani", status: "Full Time" },
    { name: "Angba Marget", status: "Full Time" },
    { name: "Tolu Ogunmoroti", status: "Full Time" },
    { name: "Jimoh Kansarat Temitope", status: "Full Time" },
    { name: "Olaoye Olatundun Janet", status: "Full Time" },
    { name: "Akerele Bushirah", status: "Full Time" },
    { name: "Odejayi Olawale", status: "Full Time" },
    { name: "Dorcas Brown", status: "Full Time" },
    { name: "Omoragbon Juliana", status: "Full Time" },
    { name: "Atakenu Abiodun", status: "Part Time" },
    { name: "Stephen Anumu Koffi", status: "Part Time" },
    { name: "Adewuyi Segun", status: "Part Time" },
    { name: "Nkechi Chukwujekwu", status: "Part Time" },
    { name: "Nwangwugwu Thankgod Chiemela", status: "Part Time" },
    { name: "Fasina Oluwasemilore", status: "Part Time" },
    { name: "Godswill Friday Umanah", status: "Part Time" },
    { name: "Ajala Oluwadamilare Kabiru", specialty: "Yoruba Language", status: "Part Time" },
    { name: "Mr. Sesan", specialty: "Financial Accounting", status: "Part Time" },
  ];

  const supportTeam = [
    { name: "Oshokoya Olushola", role: "Bursary Officer" },
    { name: "Oluwatoyin Adenike", role: "Bursary Officer (Primary)" },
    { name: "Olalekan Samuel", role: "Chief Security Officer (CSO)" },
    { name: "Olabode Adeoti Joseph", role: "Official Driver" },
    { name: "Sulaimon Rafiat", role: "Canteen & Food Services" },
    { name: "Esiagboro Hannah", role: "Facilities & Sanitation" },
    { name: "Oluwakemi Abidemi", role: "Facilities & Sanitation" },
    { name: "Jimoh Abiola", role: "Facilities & Sanitation" },
    { name: "Omolola Adeola", role: "Facilities & Sanitation" },
    { name: "Adeyemi Rukayat", role: "Facilities & Sanitation" },
    { name: "Mrs. Folorunsho", role: "Facilities & Sanitation" },
    { name: "Shola Emuze", role: "Facilities & Sanitation" },
    { name: "Mrs. Stephan Comfort", role: "Facilities & Sanitation" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-[#4C2380] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="bg-[#FDB913] text-[#4C2380] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Our Educators & Team
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Meet Our Dedicated Staff
          </h1>
          <p className="text-purple-100 max-w-xl mx-auto text-sm md:text-base font-light">
            Committed professionals shaping minds, fostering character, and supporting a safe learning environment.
          </p>
        </div>
      </section>

      {/* Executive Leadership Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#4C2380] font-bold text-sm tracking-wide uppercase">School Administration</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">Executive Leadership</h2>
          <p className="text-gray-600 text-sm mt-2">Guiding STC Group of Schools toward continuous academic and institutional excellence.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {management.map((person, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-purple-300 transition flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div className="w-10 h-10 bg-purple-100 text-[#4C2380] font-bold rounded-full flex items-center justify-center text-sm">
                    {person.name.charAt(0)}
                  </div>
                  <span className="bg-purple-50 text-[#4C2380] text-[11px] font-bold px-2.5 py-1 rounded-md border border-purple-100">
                    {person.title}
                  </span>
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{person.name}</h3>
                <p className="text-xs text-[#FDB913] font-semibold bg-[#4C2380] inline-block px-2 py-0.5 rounded mt-1">
                  {person.qualification}
                </p>
                <p className="text-gray-600 text-xs mt-3 leading-relaxed">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Administrative Officers */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#4C2380] font-bold text-sm tracking-wide uppercase">Operational Excellence</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">Administrative & Student Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adminProfiles.map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 text-base">{item.name}</h3>
                <p className="text-xs text-purple-700 font-medium mt-0.5">{item.qualification}</p>
                <p className="text-xs text-gray-600 mt-2">
                  <strong>Focus:</strong> {item.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Staff Directory */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-[#4C2380] font-bold text-sm tracking-wide uppercase">Academic Faculty</span>
          <h2 className="text-3xl font-bold text-gray-900 mt-1">Teaching Staff</h2>
          <p className="text-gray-600 text-sm mt-2">Our passionate full-time and specialist educators.</p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {teachingStaff.map((teacher, idx) => (
              <div key={idx} className="p-3 rounded-lg border border-gray-100 bg-gray-50 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{teacher.name}</p>
                  {teacher.specialty && (
                    <span className="text-[11px] text-[#4C2380] font-medium block">{teacher.specialty}</span>
                  )}
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${teacher.status === 'Full Time' ? 'bg-emerald-100 text-emerald-800' : 'bg-purple-100 text-[#4C2380]'}`}>
                  {teacher.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Operations Team */}
      <section className="bg-gray-100 py-16 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[#4C2380] font-bold text-sm tracking-wide uppercase">Support Services</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-1">Operations & Support Staff</h2>
            <p className="text-gray-600 text-sm mt-2">The dedicated individuals who ensure our campus remains safe, efficient, and welcoming daily.</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {supportTeam.map((staff, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 text-center">
                <p className="font-bold text-gray-800 text-sm">{staff.name}</p>
                <p className="text-xs text-[#4C2380] font-medium mt-1">{staff.role}</p>
              </div>
            ))}
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