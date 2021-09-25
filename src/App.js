import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./NavigateTabs";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./style.css"


{/*My page set up sketch built  ...Still to be modified with additional tabs*/}
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <NavTabs/>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;