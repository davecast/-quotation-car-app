import React from 'react';
import styled from 'styled-components';

import { firstMayus } from '../utils/helpers';

import Wrapper from '../layouts/Wrapper';

const SummaryContent = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Summary = ({information}) => {

  const { brand, year, plan } = information;

  if ( brand === '' || year === '' || plan === '' ) return null;

  return (
  <Wrapper>
    <SummaryContent>
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li>Marca: {firstMayus(brand) }</li>
        <li>Plan: {firstMayus(plan)}</li>
        <li>Ano del Auto: {year}</li>
      </ul>
    </SummaryContent>
  </Wrapper>
  );
}
 
export default Summary;