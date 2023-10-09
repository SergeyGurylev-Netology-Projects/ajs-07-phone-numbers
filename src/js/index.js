export default function validatePhoneNumber(number) {
  let result = number.replace(/[()\-\_\s]/g, '');
  result = result.replace(/^8/, '+7');

  return result;
}
