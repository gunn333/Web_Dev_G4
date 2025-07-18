// CRYPTO

const crypto = require('crypto');
const hash=crypto.createHash('sha256').update('Hello cyctro').digest('hex');
console.log(hash);

const checkPrime=crypto.checkPrimeSync(4n);
console.log(checkPrime); 

console.log(crypto.constants);

console.log(crypto.constants.RSA_PKCS1_PADDING); 

const token = crypto.randomBytes(8).toString('hex');
console.log(token);



const secret = 'mySecretKey';
const message = 'This is a message';


const hmac = crypto.createHmac('sha256', secret).update(message).digest('hex');

console.log('HMAC:', hmac);


const x=crypto.createDecipheriv('sha256', secret, "hello")
console.log(x)
