let newmessage;
newmessage = 'abc';
let endsWithC = (<string>newmessage).endsWith('c');
let alternativeWay = (newmessage as string).endsWith('c');
