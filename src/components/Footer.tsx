import { Link } from 'react-router-dom';
import { GraduationCap, Mail, MapPin, Phone } from 'lucide-react';
import { useSettings } from '../context/SettingsContext';

export default function Footer() {
  const { settings } = useSettings();

  return (
    <footer className="bg-emerald-950 text-slate-200 py-12 border-t border-emerald-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              {settings?.logoSekolah ? (
                <img src={settings.logoSekolah} alt="Logo Sekolah" className="h-12 w-auto object-contain" referrerPolicy="no-referrer" />
              ) : (
                <div className="bg-emerald-600 p-2 rounded-lg text-white">
                  <GraduationCap size={24} />
                </div>
              )}
              <span className="font-bold text-xl tracking-tight text-white">
                {settings?.namaSekolah || 'SD Negeri Unggulan'}
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              {settings?.deskripsi || 'Mencetak generasi penerus bangsa yang cerdas, berakhlak mulia, dan siap menghadapi tantangan masa depan dengan pendidikan berkualitas'}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-yellow-400 transition-colors">Beranda</Link></li>
              <li><Link to="/daftar" className="hover:text-yellow-400 transition-colors">Pendaftaran SPMB</Link></li>
              <li><Link to="/admin" className="hover:text-yellow-400 transition-colors">Login Admin</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <span>{settings?.alamat || 'Jl. Pendidikan, Kota Terpelajar, Prov. Berkarakter, Indonesia'}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-500 shrink-0" />
                <span>{settings?.telepon || '+62 822-1234-5678'}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-500 shrink-0" />
                <span>{settings?.email || 'sdnegeriunggulan@gmail.com'}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-emerald-900/50 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} {settings?.namaSekolah || 'SD Negeri Unggulan'}. Hak Cipta Dilindungi.</p>
          <p className="mt-2 md:mt-0">SPMB Online Terintegrasi</p>
        </div>
      </div>
    </footer>
  );
}
