function getProductDetails (objRefProductData)
{   // objRefProductData = product
    console.log(objRefProductData);
    objRefProductData.price = 2000; // 2 references for same object - objRefProductData & product
}

let product = {
    productType: 'laptop',
    brand: 'apple',
    name: 'macbook Pro',
    stock: 'in-stock',
    price: 1000

}

getProductDetails(product); //call by Ref - product here is a reference in stack & the object is in heap. 

console.log(product.price); // 2000