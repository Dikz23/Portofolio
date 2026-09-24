function Footer() {
  return (
    <footer className="bg-white border-t border-stone-200 py-8 px-8 text-center text-sm text-stone-600">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {new Date().getFullYear()} Portofolio. All rights reserved.</p>
        
        <div className="flex space-x-6 text-amber-900 font-medium">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;