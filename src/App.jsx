import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [content, setContent] = useState('Home'); // State to manage the displayed page

  return (
    <div className="app">
      <Header setContent={setContent} />
      <main className="main-content">
        <h1>{content}</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
