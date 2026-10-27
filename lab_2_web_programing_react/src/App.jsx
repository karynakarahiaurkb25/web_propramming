import Header from "./components/Header";
import Summary from "./components/Summary";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed py-10 px-4"
      style={{ backgroundImage: "url('/background_pic3.jpg')" }}>
      <div className="max-w-[960px] mx-auto torn-paper-wrapper">
        <div className="torn-paper divide-y divide-[#d8c39d]">
          <Header />
          <main className="p-8 space-y-6">
            <Summary />
            <Education />
            <Skills />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}