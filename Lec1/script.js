// let userData = [
//   { name: "Prachi", age: "20" },
//   { name: "Gaurav", age: "24" },
//   { name: "Jiya", age: 20 }
// ];

// let result = userData
//   .filter(user => Number(user.age) > 20)
//   .map(user => ({ name: user.name, age: Number(user.age) }));

// console.log(result);

// const myPromise=new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //     resolve("Resolved")
//     // },5000)
// })
// const myPromise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("Rejected")
//     },5000)
// })
// console.log(myPromise1);

// myPromise.then((res)=>{
//     console.log("Resolve 1")
//     console.log(res);
// }).then((res)=>{
//     console.log("Resolve 2")
// })
// .then((res)=>{
//     console.log("Resolve 3")
// })
// .catch((err)=>{
//     console.log("Error: "+err);
// })

// let demoPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Demo Promise")
//     },3000)
// })

// demoPromise.then((res)=>{
//     console.log("First")
// }).then((res)=>{
//     console.log("Second")
// }).catch((err)=>{
//     console.log("Error "+ err);
// })

// let PrachiPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Placed!!")
//     })
// })
// //we can attach multiple .then() .catch()
// .then((res)=>{
//     console.log("Prachi got 50lpa package")
// })
// .catch((err)=>{
//     console.log("Prachi got rejected"); 
//     // works specifically for above then
// })
// .then((res)=>{
//     console.log("Prachi chose different field")
// })
// .catch((err)=>{
//     console.log("Prachi got rejected again");
// })
//the last catch works for every error


//Promise APIs-->
// const promise1=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject("Assignment 1 complete")
//     })
// })
// const promise2=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject("Assignment 2 complete")
//     })
// })
// const promise3=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Assignment 3 complete")
//     })
// })
// const promise4=new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject("Assignment 4 complete")
//     })
// })

// Promise.all([promise1,promise2,promise3,promise4]).then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//         console.log("Error "+err)
// })
//if all resolved then  only .all() works if even one fails then it gives error
//if all rejected then first output with error

// Promise.allSettled([promise1,promise2,promise3,promise4]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("Error "+err);
// })
//if all are resolved it return all with status fulfilled and its value
//if some are rejected some are resolved it gives their status rejected/resolved and their value
//if all are rejected it gives their status rejected and their value

// Promise.race([promise1,promise2,promise3,promise4]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("Error "+err);
// })
// Waits for the first promise to resolve/reject and its result/error becomes the outcome

// Promise.any([promise1,promise2,promise3,promise4]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log("Error "+err);
// })
// Waits for the first promise to fullfill(resolve) and its result becomes the outcome, throws aggregated error if all promises are rejected

//async/await
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Assignment complete")
//     },3000)
// })
// async function checkAssignment(){
//     const dataAssignment=await p1;
//     console.log("Checking the assignment "+dataAssignment)
// }
// checkAssignment();

//fetch api--> fetch data from https://dummyjson.com/products
/*
async function fetchData(){
    try{
        const a =await fetch("https://dummyjson.com/products")
        const data=await a.json();
        console.log(data);
    }
    catch(err){
        console.log("Error: "+err.message);
    }
}
fetchData();

//HW- data jo arha hai website se us mein se title, description, prize nikal ke store krvao and return krvao

async function fetchData() {
  try {
    const b = await fetch("https://dummyjson.com/products");
    const data = await b.json();

    const simplifiedProducts = data.products.map(product => {
      return {
        title: product.title,
        description: product.description,
        price: product.price
      };
    });

    console.log(simplifiedProducts);
    return simplifiedProducts;

  } catch (err) {
    console.log("Error: " + err.message);
  }
}

fetchData();
*/

async function fetchData() {
  try {
    const b = await fetch("https://dummyjson.com/products");
    const data = await b.json();

    const simplifiedProducts = data.products.map(product => {
      return {
        title: product.title,
        description: product.description,
        price: product.price
      };
    });

    // Display in frontend
    const container = document.getElementById("productContainer");
    simplifiedProducts.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <div class="product-title">${product.title}</div>
        <div class="product-description">${product.description}</div>
        <div class="product-price">Price: ₹${product.price}</div>
      `;
      container.appendChild(div);
    });

    return simplifiedProducts;

  } catch (err) {
    console.log("Error: " + err.message);
  }
}

fetchData();
