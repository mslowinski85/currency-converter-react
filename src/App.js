import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Container from "./Container";



function App() {
  const [sum, setSum] = useState("");
  return (
    <Container>
      <Header />
      <Form setSum={setSum}/>
      <Footer />
    </Container>
  );
}

export default App;
