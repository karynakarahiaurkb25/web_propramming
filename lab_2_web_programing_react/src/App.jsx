import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Summary />
        <Skills />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;