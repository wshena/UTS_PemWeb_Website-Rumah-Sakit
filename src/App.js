// Bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar/NavbarComponent';

// Router
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
// Routes
import Home from './pages/homePage';
import AboutPage from './pages/aboutPage';
import FooterComponent from './components/footerComponent/footerComponent';
import FindDoctor from './pages/findDoctorPage';
import CenterOfExellence from './pages/coePage';
import BookApointment from './pages/bookApointment';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavbarComponent />      
      <Routes>
        <Route path='home' element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path='findDoctor' element={<FindDoctor />} />      
        <Route path='coe' element={<CenterOfExellence />} />
        <Route path='book' element={<BookApointment />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
    </>
  );
}

export default App;
