//Diferencia de anos
export function getDifferenceYear(year) {
  return new Date().getFullYear() - year;
}

//Calcula  el total a pagar segun la marca
export function calcBrand(brand) {
  let increase;

  switch(brand) {
    case 'europeo':
      increase = 1.30;
      break;
    case 'americano':
      increase = 1.15;
      break;
    case 'asiatico':
      increase = 1.05;
      break;
    default:
      break;
  }

  return increase;
}

//Calcula el tipo de seguro
export function getPlan(plan) {
  return (plan === 'basico') ? 1.20 : 1.50;
}