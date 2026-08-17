import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SlideDeck } from './components/SlideDeck';
import { DocView } from './components/DocView';
import { SLIDES_META } from './data/presentationData';

export function App() {
  const [viewMode, setViewMode] = useState<'slides' | 'doc'>('slides');
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const TOTAL_SLIDES = SLIDES_META.length;

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col justify-between selection:bg-blue-500 selection:text-white">
      <div>
        <Navbar viewMode={viewMode} setViewMode={setViewMode} />

        <main className="py-4">
          {viewMode === 'slides' ? (
            <SlideDeck
              currentSlide={currentSlide}
              setCurrentSlide={setCurrentSlide}
              totalSlides={TOTAL_SLIDES}
              onSwitchToDocView={() => setViewMode('doc')}
            />
          ) : (
            <DocView onSwitchToSlides={() => setViewMode('slides')} />
          )}
        </main>
      </div>

      <footer className="border-t border-gray-800/60 py-4 px-6 text-center text-xs text-gray-500 bg-slate-950/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <span>Top Scholar Enterprise OS & AI Brain Presentation Deck</span>
          <span>内部绝密汇报材料 · Designed for Executive Presentation</span>
          <span>© 2026 Top Scholar Education</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
