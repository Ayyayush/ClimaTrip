import React from 'react';
import { Loader2, Sun } from 'lucide-react';

function Loader() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
      <div className="animate-spin rounded-full p-4 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
        <Sun className="h-8 w-8 text-white" />
      </div>
      <p className="mt-4 text-sm text-gray-600">Loading your perfect weather stay...</p>
    </div>
  );
}

export default Loader;
