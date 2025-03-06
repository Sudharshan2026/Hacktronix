import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Description from './components/Description';
import Rules from './components/Rules';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Description />
        <Rules />
      </main>
      <Footer />
    </div>
  );
}

export default App;