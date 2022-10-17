import { useState } from 'react';
import { AppStyleMain } from './styles';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Landing from './pages/Landing/Landing';
import Learning from './pages/Learning/Learning';
import Engineering from './pages/Engineering/Engineering';
import LogicApp from './pages/Learning/LogicApp/LogicApp';

function App() {
  const personalSettings = JSON.parse(localStorage.getItem('personalSettings'));
  const [mobile, setMobile] = useState(!!(window.innerWidth < 800));
  const [theme, setTheme] = useState(personalSettings?.theme ?? 'dark');

  window.addEventListener('resize', () => {
    setMobile(!!(window.innerWidth < 800))
  });

  const updateTheme = (theme) => {
    localStorage.setItem('personalSettings', JSON.stringify({ ...personalSettings, theme }));
    setTheme(theme);
  }

  return (
    <AppStyleMain theme={theme} mobile={mobile}>
      <Header theme={theme} setTheme={updateTheme} />
      <Router>
        <Routes>
          <Route exact path="/learning" element={
            <Learning theme={theme} mobile={mobile} />
          } />
          <Route exact path="/learning/logic-gates" element={
            <LogicApp theme={theme} mobile={mobile} />
          } />
          <Route exact path="/engineering" element={
            <Engineering theme={theme} mobile={mobile} />
          } />
          <Route path="/" element={
            <Landing theme={theme} mobile={mobile} />
          } />
        </Routes>
      </Router>
      <Footer theme={theme} setTheme={updateTheme} />
    </AppStyleMain>
  );
}

export default App;
