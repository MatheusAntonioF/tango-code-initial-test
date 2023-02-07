function generateEmployeeID({ firstName = '', lastName = '', id = '' }) {
  const OK = 'OK';
  const NOT_VALID = 'NOT VALID';

  let verified = OK;

  // first name
  const twoLettersOfFirstName = String(firstName.slice(0, 2)).toUpperCase();
  const firstNameOnId = id.slice(2, 4);

  if (twoLettersOfFirstName !== firstNameOnId) {
    verified = NOT_VALID;
  }

  // last name
  const twoLettersOfLastName = String(lastName.slice(0, 2)).toUpperCase();
  const lastNameOnId = id.slice(0, 2);

  if (twoLettersOfLastName !== lastNameOnId) {
    verified = NOT_VALID;
  }

  // year
  const yearOfId = Number(id.slice(4, 8));
  if (yearOfId <= 2000) {
    verified = NOT_VALID;
  }

  // month
  const monthOfId = Number(id.slice(8, 10));

  if (monthOfId < 0 || monthOfId > 12) {
    verified = NOT_VALID;
  }

  const [firstPartOfId, verificationDigitID] = id.split('-');

  const numbersOnId = firstPartOfId.slice(4);

  const numbers = numbersOnId.split('');

  let sumOfNumbers = 0;
  let sumOfOddNumbers = 0; // impar
  let sumOfEvenNumbers = 0; // par

  for (let index = 0; index < numbers.length; index++) {
    const currentNumber = Number(numbers[index]);

    sumOfNumbers += currentNumber;

    // sum numbers in odd position - index

    if (index % 2 === 0) {
      console.log('🚀 ~ currentNumber', currentNumber, 'par', index);

      sumOfEvenNumbers += currentNumber; // even
    } else {
      console.log('🚀 ~ currentNumber', currentNumber, 'impar', index);

      sumOfOddNumbers += currentNumber; // odd
    }
  }

  const result = sumOfOddNumbers * 2 + sumOfEvenNumbers * 3 + sumOfNumbers;

  const foundVerificationDigit = result % 10;

  // compare verificationDigit with provided ID

  if (Number(verificationDigitID) !== foundVerificationDigit) {
    verified = NOT_VALID;
    console.log('teste');
  }

  return verified;
}

// OK for Marlon
// OK for Jane
// OK for Margaret
// OK for Sigmund
const params = {
  firstName: 'Marlon',
  lastName: 'Brandon',
  id: 'BRMA20191224-9',
};

console.log(generateEmployeeID(params));
