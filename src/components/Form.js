import React, { useState } from "react";
import styled from "styled-components";

/*UTILS*/
import { getDifferenceYear, calcBrand, getPlan } from '../utils/helpers';

/*LAYOUTS*/
import Wrapper from "../layouts/Wrapper";

const FormContent = styled.div`
  background-color: #fff;
  padding: 3rem;
`;
const FormStyled = styled.form``;
const FormControl = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const FieldGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  grid-gap: 25px;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%; 
  padding: 1rem;
  border: 1px solid #e1e1e1;
  appearance: none;
`;
const LabelRadio = styled.label`
  position: relative;
`;
const Radio = styled.input`
  position: absolute;
  width: 0px;
  height: 0px;
  cursor: pointer;
  opacity: 0;
  margin: 0;
  &:checked ~ span {
    background-color: #027280;
    color: #fff;
  }
`;
const RadioName = styled.span`
  cursor: pointer;
  background: #26c6da;
  color: #fff;
  padding: 6px 18px;
  border-radius: 6px;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1), 0px 3px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  background: #26c6da;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-out;
  :hover {
    background-color: #027280;
  }
`;

const ErrorMessage = styled.div`
  background-color: red;
  color: #fff;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`

const Form = ({ setSummary }) => {

  const [information, setInformation] = useState({
    brand: '',
    year: '',
    plan: ''
  });
  const [error, setError] = useState(false);

  //extraemos los valores
  const { brand, year, plan} = information;

  //Leer los datos del formulario y colocarlos en el state
  const getInformation = e => {
    setInformation({
      ...information,
      [e.target.name] : e.target.value
    })
  }

  //Enviar submit
  const safeQuotation = e => {
    e.preventDefault();
    
    if (brand.trim() === '' || year.trim() === '' || plan.trim() === '' ) {
      setError(true);
      return;
    }

    setError(false);

    //Base
    let result = 2000;

    //Obtener la diferencia de anos
    const differene = getDifferenceYear(year);

    
    //Por cada ano hay que  restar el 3%
    result -= ((differene * 3) * result) / 100;

    
    //Americano 15%
    //Asiatico 5%
    //Europeo 30%
    
    result = calcBrand(brand) * result;
    
    //Basico 20%
    //Completo 50%
    const increasePlan = getPlan(plan);
    result = parseFloat( increasePlan * result ).toFixed(2);

    //Total
    setSummary({
      quotation: result,
      information
    })
  }

  return (
    <Wrapper>
      <FormContent>
        {error && <ErrorMessage>Todos los campos son obligatorios</ErrorMessage>}
        <FormStyled
          onSubmit={safeQuotation}
        >
          <FormControl>
            <Label>Marca</Label>
            <Select
              name="brand"
              value={brand}
              onChange={getInformation}
            >
              <option value="">-- Seleccione --</option>
              <option value="americano">Americano</option>
              <option value="europeo">Europeo</option>
              <option value="asiatico">Asiatico</option>
            </Select>
          </FormControl>
          <FormControl>
            <Label>Año</Label>
            <Select
              name="year"
              value={year}
              onChange={getInformation}
            >
              <option value="">-- Seleccione --</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
            </Select>
          </FormControl>
          <FormControl>
            <Label>Planes</Label>
            <FieldGroup>
              <LabelRadio>
                <Radio onChange={getInformation} type="radio" name="plan" value="basico" checked={plan === "basico"} />
                <RadioName>Basico</RadioName>
              </LabelRadio>
              <LabelRadio>
                <Radio onChange={getInformation} type="radio" name="plan" value="completo" checked={plan === "completo"}/>
                <RadioName>Completo</RadioName>
              </LabelRadio>
            </FieldGroup>
          </FormControl>
          <Button type="submit">Cotizar</Button>
        </FormStyled>
      </FormContent>
    </Wrapper>
  );
};

export default Form;
