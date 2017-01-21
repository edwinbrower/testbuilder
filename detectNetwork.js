// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  //represents the length of the prefix. for example prefix(5) should return the first 5 characters of the number.
  var prefix = function(x){
    return cardNumber.substring(0,x);
  }

  var cardLength = cardNumber.length;

  if (cardLength==14 && (prefix(2)==38 || prefix(2)==39)) return "Diner's Club";
  if (cardLength==15 && (prefix(2)==34 || prefix(2)==37)) return "American Express";
  if ((cardLength==16 || cardLength==18 || cardLength==19) && (prefix(4)==4903 || prefix(4)==4905 || prefix(4)==4911 || prefix(4)==4936 || prefix(6)==564182 || prefix(6)==633110 || prefix(4)==6333 || prefix(4)==6759) ) return "Switch";
  if ( (cardLength==13 || cardLength==16 || cardLength==19) && prefix(1)==4) return "Visa";
  if (cardLength==16 && (prefix(2)>=51 && prefix(2)<=55)) return "MasterCard";
  if ((cardLength==16 || cardLength == 19) && (prefix(4)==6011 || (prefix(3)>=644 && prefix(3)<=649) || prefix(2)==65)) return "Discover";
  if ((cardLength>=12 && cardLength<=19) && (prefix(4)==5018 || prefix(4) == 5020 || prefix(4) == 5038 || prefix(4) == 6304)) return "Maestro";
  if ((cardLength>=16 && cardLength<=19) && ( (prefix(6)>=622126 && prefix(6)<=622925) || (prefix(3)>=624 && prefix(3)<=626) || (prefix(4)>=6282  && prefix(4)<=6288) ) ) return "China UnionPay";  
  return "Card not matched";
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
};


//Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.