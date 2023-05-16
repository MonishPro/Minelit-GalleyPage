import './App.css';
import Chapters from './components/Chapters';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Ancient from './components/Ancient';

function App() {
  return (
    <>
      <Nav/>
      {/* <Gallery/> */}
      {/* <Chapters/> */}
       <Ancient/> {/* to see chapters page comment ancient  */}
      <Footer/>
    </>
  );
}

export default App;
