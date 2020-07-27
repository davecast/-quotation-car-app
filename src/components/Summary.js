import React from 'react';

const Summary = ({information}) => {

  const { brand, year, plan } = information;

  if ( brand === '' || year === '' || plan === '' ) return null;

  return (<>
    <h2>Resumen de cotizacion</h2>
    <ul>
      <li>Marca:</li>
      <li>Plan:</li>
      <li>Ano del Auto:</li>
    </ul>
  </>);
}
 
export default Summary;