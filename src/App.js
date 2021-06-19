import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';
import SideMenu from './component/SideMenu';

function App() {
  return (
    <div className="App">
     <Header />
     <SideMenu />
     <Content />
     <Footer />
    </div>
  );
}

export default App;
