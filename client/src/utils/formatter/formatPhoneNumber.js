export const formatPhoneNumber = (phone) => {

  let parsedPhone = phone;

  if(phone.indexOf('-') !== -1) {
    let phoneArr = [];

    for(let i = 0; i < phone.length; i++) {
      if(phone[i] !== '-') {
        phoneArr.push(phone[i]);
      }
      parsedPhone = phoneArr.join('');
    }
  }

  let areaCode = parsedPhone.substring(0, 3);
  let firstThree = parsedPhone.substring(3, 6);
  let lastFour = parsedPhone.substring(6, 10);
  return `(${areaCode}) ${firstThree}-${lastFour}`;
};
