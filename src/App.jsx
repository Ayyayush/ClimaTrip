import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
