import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';

export const revalidate = 0; // Fresh updates on load

export default async function ActivitiesPage() {
  const { data: activities, error } = await supabase
    .from('activities')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />

      {/* Header Banner */}
      <section className="bg-[#4C2380] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="bg-[#FDB913] text-[#4C2380] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Campus Life & Updates
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            School Activities & News
          </h1>
          <p className="text-purple-100 max-w-xl mx-auto text-sm md:text-base font-light">
            Stay informed on academic achievements, events, competitions, and daily developments at STC Group of Schools.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {(!activities || activities.length === 0) ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 max-w-md mx-auto">
            <div className="w-12 h-12 bg-purple-100 text-[#4C2380] rounded-full flex items-center justify-center font-bold mx-auto mb-4 text-xl">
              📢
            </div>
            <h3 className="font-bold text-gray-900 text-lg">No Announcements Yet</h3>
            <p className="text-gray-500 text-sm mt-1">Check back soon for the latest news and activity updates.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((item) => (
              <article 
                key={item.id} 
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  {item.image_url ? (
                    <div className="relative h-48 w-full bg-gray-100">
                      <img 
                        src={item.image_url} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="h-3 bg-[#4C2380]" />
                  )}

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-purple-50 text-[#4C2380] text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-purple-100">
                        {new Date(item.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900 leading-snug mb-3 hover:text-[#4C2380] transition">
                      {item.title}
                    </h2>

                    <p className="text-gray-600 text-sm whitespace-pre-line leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 border-t border-gray-50">
                  <span className="text-xs font-semibold text-[#4C2380] flex items-center gap-1">
                    STC Official Announcement
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

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