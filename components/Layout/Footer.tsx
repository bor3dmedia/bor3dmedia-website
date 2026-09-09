import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-12 border-t border-zinc-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
           <div className="mb-8 md:mb-0">
              <a href="#" className="text-2xl font-bold text-black">
                Bored Media<span className="text-[#c4cc14]">.</span>
              </a>
              <p className="text-black/40 text-sm mt-2 font-medium">
                Strategic YouTube Partner for <br />Industry Leaders.
              </p>
           </div>
           
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-black/30 border-t border-zinc-200 pt-8 font-medium">
           <p>&copy; {new Date().getFullYear()} Bored Media Creative Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;