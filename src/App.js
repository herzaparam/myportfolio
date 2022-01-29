import React from 'react';
import { hot } from 'react-hot-loader/root';
import './styles/header.scss';
import './styles/section.scss';
// import home from './assets/home.png'

function App() {
  return (
    <>
      {/* header */}
      <header className="header">
        {/* element with fixed/absolute position */}
        <p className="transform right">about</p>
        <p className="transform left">herzaparam@gmail.com</p>
        <div className="arrow">arrow</div>
        {/* element with fixed/absolute position (end here) */}
        <div className="content">
          <h1>HERZA PARAMAYUDHANTO</h1>
          <h3>FullStack Developer</h3>
        </div>
      </header>

      {/* main */}
      <main>
        <section className='section'>
          <div className='content'>
            <h2>Tickitz</h2>
          </div>
        </section>
      </main>
    </>
  );
}

export default hot(App);
