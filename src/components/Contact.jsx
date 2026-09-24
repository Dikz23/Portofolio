import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  const smoothTransition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

  return (
    <section id="contact" className="py-20 px-8 md:px-16 lg:px-24 bg-stone-50 text-stone-900 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={smoothTransition} className="text-center mb-16">
          <span className="px-3 py-1 bg-amber-100 border border-amber-900/20 rounded-full text-amber-900 text-xs font-semibold tracking-wider uppercase">Mari Terhubung</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 text-black">Hubungi Saya</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ ...smoothTransition, delay: 0.1 }} 
          className="bg-white border border-stone-200 p-8 md:p-12 rounded-3xl shadow-lg relative"
        >
          {submitted && <div className="mb-6 p-4 bg-amber-50 border border-amber-800/30 text-amber-900 text-sm rounded-xl text-center font-medium">Terima kasih! Pesan Anda berhasil dikirim.</div>}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Nama Lengkap</label>
                <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Masukkan nama Anda" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-black placeholder-stone-400 focus:outline-none focus:border-amber-800 transition-colors text-sm" />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-2">Alamat Email</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="nama@email.com" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-black placeholder-stone-400 focus:outline-none focus:border-amber-800 transition-colors text-sm" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">Pesan</label>
              <textarea rows="5" required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Tuliskan pesan..." className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-black placeholder-stone-400 focus:outline-none focus:border-amber-800 transition-colors text-sm resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-amber-900 hover:bg-amber-800 text-white font-bold rounded-xl transition-all duration-300 shadow-md text-sm">Kirim Pesan</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;