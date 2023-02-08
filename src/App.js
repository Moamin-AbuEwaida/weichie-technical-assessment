import About from './components/About';
import Agenda from './components/Agenda';
import Navbar from './components/Navbar';
import Questions from './components/Questions';
import Speakers from './components/Speakers';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Speakers />
      <Agenda />
      <Questions />
    </div>
  );
}

export default App;
