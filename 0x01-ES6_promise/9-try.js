export default function guardrail(mathFunction) {
  const array = [];
  let i;

  try {
    i = mathFunction();
  } catch (error) {
    i = error.toString();
  }

  array.push(i);
  array.push('Guardrail was processed');

  return array;
}
