import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SuccessPayment from "./SuccessPayment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess" element={<SuccessPayment />} />
        
      </Routes>
    </Router>
  );
}

export default App;
