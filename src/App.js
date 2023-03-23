import React from 'react';
import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>

      <div className="parent">
        <div className="parent1">
          <div className="child1">
            <ul class="no-bullets1">
              <li className="li-style-2">.</li>
              <li className="li-style-1">Per Day Price</li>
              <li className="li-style-1">Total Savings</li>
              <li className="li-style-1"><strong>Total Amount</strong></li>
            </ul>
          </div>

          <div className="child2">
            <ul class="no-bullets2">
              <li className="li-style">7 Days</li>
              <li className="li-style">7000 Rs</li>
              <li className="li-style">700 Rs</li>
              <li><strong>6300 Rs</strong></li>
            </ul>
          </div>

          <div className="child3">
            <ul class="no-bullets2">
              <li className="li-style">15 Days</li>
              <li className="li-style">15000 Rs</li>
              <li className="li-style">2250 Rs</li>
              <li><strong>12750 Rs</strong></li>
            </ul>
          </div>

          <div className="child4">
            <ul class="no-bullets2">
              <li className="li-style">30 Days</li>
              <li className="li-style">30000 Rs</li>
              <li className="li-style">6000 Rs</li>
              <li><strong>24000 Rs</strong></li>
            </ul>
          </div>
        </div>

        <div className="parent1">
          <div className="child1">
            <button className="btnn info">7 Days</button>
          </div>
          <div className="child2">
            <button className="btnn info">15 Days</button>
          </div>
          <div className="child3">
            <button className="btnn info">30 Days</button>
          </div>
        </div>

        <div className="parent2">
          <Button variant="primary" size="lg" className="btnsize">
            Pay with UPI
          </Button>

        </div>

        <div className="content">
          <h6><b>OR</b></h6>
        </div>

        <div className="parent2">
          <Button variant="outline-primary" size="lg" className="btnsize">
            Pay with other option
          </Button>
        </div>

        <div className="content">
          <h6>* Terms and Conditions Applied</h6>
        </div>
      </div>

    </>
  );
}

export default App;
