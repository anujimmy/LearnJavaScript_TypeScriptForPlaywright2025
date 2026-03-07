let lngWait = 5000;
async function getProductsInBasketwithPrice(orderID){
      return new Promise(resolve =>{
            setTimeout(() => {
                  resolve([
                        {orderID : orderID},
                        {productID : 3425, price : 11.00, quantity : 3},      
                        {productID : 1234, price : 1.00, quantity : 39}, 
                        {productID : 10000, price : 0.00, quantity : 10}
                  ])
            }, lngWait);
      });
};

let prGetProductsInBasketwithPrice = await getProductsInBasketwithPrice(879678);
console.log(prGetProductsInBasketwithPrice);

console.log('**************************');