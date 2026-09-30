import React from 'react';
import './index.css';

function App() {
  return (
    <div className="min-h-screen p-margin flex flex-col items-center justify-center">
      <h1 className="text-5xl font-semibold mb-space-md text-primary">
        Cinematic Cultural Archive
      </h1>
      <p className="text-on-surface-variant mb-space-xl text-lg max-w-2xl text-center">
        A digital sanctuary for cultural exploration, positioning itself at the confluence of modern curatorial prestige, cinematic storytelling, and archival scholarship.
      </p>
      
      <div className="flex gap-space-md">
        <button className="bg-primary-container text-canvas-ground font-semibold px-space-lg py-space-sm rounded-md transition-colors hover:bg-surface-tint">
          Explore Archives
        </button>
        <button className="border border-outline text-on-surface px-space-lg py-space-sm rounded-md transition-colors hover:bg-surface-container-low">
          View Collections
        </button>
      </div>
    </div>
  );
}

export default App;
