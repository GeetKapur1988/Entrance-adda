import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage, { PaymentSuccess, PaymentFailure } from './HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />
      </Routes>
    </Router>
  );
}

export default App;