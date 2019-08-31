import React, { Component } from "react";
import "./App.css";
import { Row, Container } from "react-bootstrap";

import { Subtotal } from "./components/subtotal/subtotal.js";
import { PickupSavings } from "./components/PickupSaving/pickup-savings.js";

class App extends Component {
  state = {
    total: 100,
    PickupSavings: -3.85
  };
  render() {
    return (
      <Container className="container">
        <Row className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)} />
          <PickupSavings price={this.state.PickupSavings} />
        </Row>
      </Container>
    );
  }
}

export default App;
