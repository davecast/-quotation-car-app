import React, { Fragment, useState } from "react";

/*COMPONENTS*/
import Header from "./components/Header";
import Form from "./components/Form";
import Summary from "./components/Summary";

function App() {
  const [summary, setSummary] = useState({
    quotation: 0,
    information: {
      brand: '',
      year: '',
      plan: ''
    }
  })

  const { information } = summary;

  return (
    <Fragment>
      <Header title="Cotizador de Seguros" />
      <Form 
        setSummary={setSummary}
      />
      <Summary
        information={information}
      />
    </Fragment>
  );
}

export default App;
