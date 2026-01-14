"use client";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t-10 border-white" style={{ backgroundColor: "#d80032" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-black text-white mb-2 tracking-wider">
              POKÉDEX<br />ONLINE
            </h2>
            <p className="text-white text-sm mb-1">Powered by PokéAPI</p>
            <p className="text-white text-sm">A beta website dedicated to Pokemon</p>
          </div>

          <div className="flex-1 text-right">
            <h3 className="text-2xl font-bold text-white mb-3">Connect with Me!</h3>
            <a href="mailto:argoncillo@msn.edu.ph" className="text-white text-sm block hover:underline">
              anargoncillo@mcm.edu.ph
            </a>
            <a href="mailto:alyssaargoncillo@gmail.com" className="text-white text-sm block hover:underline mb-4">
              alyssaargoncillo@gmail.com
            </a>
            
            <div className="flex items-center justify-end gap-4">
              {/* GitHub */}
              <a href="https://github.com/AlyssaArgoncillo" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-red transition">
                <svg viewBox="0 0 24 24" width="40" height="40" fill="white" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://web.facebook.com/ekleas.prsea" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-red transition">
                <svg viewBox="0 0 24 24" width="40" height="40" fill="white" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* Discord with tooltip */}
              <div className="relative group">
                <button className="text-white-800 hover:text-gray-800 transition" aria-label="Discord">
                  <svg viewBox="0 0 24 24" width="44" height="44" fill="white" aria-hidden="true">
                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs rounded px-3 py-2 opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap shadow">
                  Add me on Discord: <span className="font-semibold">ekleas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
