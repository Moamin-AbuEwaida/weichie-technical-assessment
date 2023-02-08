import About from './components/About';
import Agenda from './components/Agenda';
import Join from './components/Join';
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
      <Join />
    </div>
  );
}

export default App;
