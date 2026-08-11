'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import Navbar from '@/components/Navbar';

export default function AdminPage() {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({
    type: '',
    message: '',
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthLoading(true);
    setAuthError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ passcode }),
      });

      const result = await response.json();

      if (!response.ok) {
        setAuthError(result.error || 'Authentication failed.');
      } else {
        setIsAuthenticated(true);
        setAuthError('');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setAuthError('Unable to connect to authentication server.');
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPasscode('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewUrl(URL.createObjectURL(selectedFile));
    }
  };

  const clearFile = () => {
    setFile(null);
    setPreviewUrl(null);
  };
  
  const handlePostActivity = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      let imageUrl = null;

      if (file) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 7)}.${fileExt}`;

        const { error: uploadError } = await supabase.storage
          .from('activity-images')
          .upload(fileName, file);

        if (uploadError) throw uploadError;

        const { data: publicUrlData } = supabase.storage
          .from('activity-images')
          .getPublicUrl(fileName);

        imageUrl = publicUrlData.publicUrl;
      }

      const { error: insertError } = await supabase
        .from('activities')
        .insert([{ title, content, image_url: imageUrl }]);

      if (insertError) throw insertError;

      setStatus({ type: 'success', message: 'Activity published successfully!' });
      setTitle('');
      setContent('');
      clearFile();
    } catch (err: any) {
      console.error(err);
      setStatus({ type: 'error', message: err.message || 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 py-12">
        {!isAuthenticated ? (
          /* Authentication Card */
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden max-w-md mx-auto">
            <div className="bg-[#4C2380] px-6 py-8 text-center text-white">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/20">
                <svg className="w-6 h-6 text-[#FDB913]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold">Admin Portal</h1>
              <p className="text-purple-100 text-sm mt-1">Enter key to access management dashboard</p>
            </div>

            <form onSubmit={handleLogin} className="p-6 space-y-4">
              {authError && (
                <div className="p-3 text-xs font-medium bg-red-50 text-red-600 rounded-lg border border-red-100">
                  {authError}
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1">
                  Passcode
                </label>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#4C2380] focus:border-transparent transition text-center tracking-widest text-lg"
                />
              </div>

              <button
                type="submit"
                disabled={authLoading}
                className="w-full bg-[#4C2380] hover:bg-[#3b1b63] text-white font-medium py-2.5 rounded-lg transition duration-150 shadow-md hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-60"
              >
                {authLoading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Verifying...</span>
                  </>
                ) : (
                  <span>Authenticate</span>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Main Admin Workspace */
          <div className="space-y-6">
            {/* Header Control */}
            <div className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border border-gray-200/80">
              <div>
                <h1 className="text-2xl font-bold text-[#4C2380]">Activity Manager</h1>
                <p className="text-xs text-gray-500 mt-0.5">Publish new updates to the school feed</p>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="px-3.5 py-1.5 text-xs font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition"
              >
                Sign Out
              </button>
            </div>

            {/* Post Activity Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200/80 p-6 md:p-8">
              {status.message && (
                <div
                  className={`p-4 rounded-xl mb-6 text-sm flex items-center justify-between ${
                    status.type === 'error'
                      ? 'bg-red-50 text-red-700 border border-red-100'
                      : 'bg-purple-50 text-[#4C2380] border border-purple-200'
                  }`}
                >
                  <span>{status.message}</span>
                  <button type="button" onClick={() => setStatus({ type: '', message: '' })} className="text-xs opacity-60 hover:opacity-100">
                    ✕
                  </button>
                </div>
              )}

              <form onSubmit={handlePostActivity} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Activity Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Inter-House Sports Competition 2026"
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4C2380] focus:border-transparent transition text-gray-800 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Activity Description / Content <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Provide full details about the event, highlights, and announcements..."
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4C2380] focus:border-transparent transition text-gray-800 placeholder-gray-400 resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Attachment Media
                  </label>

                  {!previewUrl ? (
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center hover:border-[#4C2380] transition cursor-pointer bg-purple-50/30 hover:bg-purple-50/60 relative">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <svg className="mx-auto h-8 w-8 text-[#4C2380]/60 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-xs font-medium text-gray-700">
                        Click to upload photo or drag and drop
                      </p>
                      <p className="text-[10px] text-gray-400 mt-1">PNG, JPG, WEBP up to 5MB</p>
                    </div>
                  ) : (
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-gray-100 max-h-56 flex items-center justify-center">
                      <img src={previewUrl} alt="Upload preview" className="object-cover max-h-56 w-full" />
                      <button
                        type="button"
                        onClick={clearFile}
                        className="absolute top-2 right-2 bg-gray-900/80 hover:bg-gray-900 text-white text-xs px-2.5 py-1 rounded-md transition"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#4C2380] hover:bg-[#3b1b63] text-white font-medium py-3 rounded-xl transition duration-150 flex items-center justify-center space-x-2 disabled:opacity-50 shadow-md hover:shadow-lg"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Publishing...</span>
                      </>
                    ) : (
                      <span>Publish Activity</span>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}