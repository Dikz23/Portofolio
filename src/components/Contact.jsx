// Contact.jsx
import { motion } from "framer-motion";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost/api-portofolio/simpan_pesan.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Gagal: " + result.message);
      }
    } catch (error) {
      console.error("Terjadi Kesalahan:", error);
      alert("Gagal terhubung ke Laragon. Pastikan Laragon sudah di-start!");
    } finally {
      setLoading(false);
    }
  };

  const smoothTransition = { duration: 0.7, ease: [0.16, 1, 0.3, 1] };

  return (
    <section id="contact" className="py-24 px-8 md:px-16 lg:px-24 bg-black text-neutral-100 relative border-t border-neutral-800">
      <div className="max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={smoothTransition} className="text-center mb-16">
          <span className="px-3 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-300 text-xs font-medium tracking-wider uppercase">Mari Terhubung</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-white">Hubungi Saya</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ ...smoothTransition, delay: 0.1 }} 
          className="bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-3xl shadow-2xl relative"
        >
          {submitted && (
            <div className="mb-6 p-4 bg-neutral-950 border border-neutral-800 text-neutral-200 text-sm rounded-xl text-center font-medium">
              Terima kasih! Pesan Anda berhasil disimpan ke database.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Nama Lengkap</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  placeholder="Masukkan nama Anda" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors text-sm" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">Alamat Email</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  placeholder="nama@email.com" 
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors text-sm" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">Pesan</label>
              <textarea 
                rows="5" 
                required 
                value={formData.message} 
                onChange={(e) => setFormData({...formData, message: e.target.value})} 
                placeholder="Tuliskan pesan..." 
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-500 transition-colors text-sm resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={loading} 
              className="w-full py-4 bg-white hover:bg-neutral-200 text-black font-semibold rounded-xl transition-all duration-200 shadow-md text-sm disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim Pesan"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;