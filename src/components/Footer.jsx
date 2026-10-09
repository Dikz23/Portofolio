// Footer.jsx
function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 py-8 px-8 text-center text-sm text-neutral-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Andika Septa Nugraha. All rights reserved.</p>
        
        <div className="flex space-x-6 text-neutral-300 font-medium">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;