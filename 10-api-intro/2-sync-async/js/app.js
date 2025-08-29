// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => res.json())
//   .then((json) => {
//     console.log(json);
//     fetch("https://fakestoreapi.com/products/2")
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);
//         fetch("https://fakestoreapi.com/products/3")
//           .then((res) => res.json())
//           .then((json) => {
//             console.log(json);
//             fetch("https://fakestoreapi.com/products/4")
//               .then((res) => res.json())
//               .then((json) => {
//                 console.log(json);
//                 fetch("https://fakestoreapi.com/products/5")
//                   .then((res) => res.json())
//                   .then((json) => console.log(json));
//               });
//           });
//       });
//   });

// console.log("Start");

// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// for (let i = 0; i < 3; i++) {
//   console.log("Loop:", i);
// }

// console.log("End");

// asycn => sync

// const run = async () => {
//   const product1Res = await fetch("https://fakestoreapi.com/products/1");
//   //   console.log(product1Res);
//   //   const product1Text = await product1Res.text();
//   //   console.log(product1Text);
//   const product1 = await product1Res.json();
//   console.log(product1);

//   const product2Res = await fetch("https://fakestoreapi.com/products/2");
//   const product2 = await product2Res.json();
//   console.log(product2);

//   const product3Res = await fetch("https://fakestoreapi.com/products/3");
//   const product3 = await product3Res.json();
//   console.log(product3);

//   const product4Res = await fetch("https://fakestoreapi.com/products/4");
//   const product4 = await product4Res.json();
//   console.log(product4);

//   const product5Res = await fetch("https://fakestoreapi.com/products/5");
//   const product5 = await product5Res.json();
//   console.log(product5);
// };

// run();

document.querySelector("#load").addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:8000/fruits/10");
    if (!res.ok) {
      throw "ma shi woo";
    }
    const json = await res.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
  //   console.log(res);
  //   console.log(res.ok);
  //   if (res.ok) {
  //     const json = await res.json();
  //     console.log(json);
  //   } else {
  //     console.log("error tet nay tal");
  //   }
});
