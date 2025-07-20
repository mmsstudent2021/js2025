// document.addEventListener("click", (e) => {
//   console.log(e);
// });

// document.addEventListener("mousemove", (e) => {
//   console.log(e);
// });

// document.querySelector("#box").addEventListener("mouseover", (e) => {
//   // console.log(e);
//   console.log("mouseover");
// });

// document.querySelector("#box").addEventListener("mouseout", (e) => {
//   // console.log(e);
//   console.log("mouseout");
// });

// document.querySelector("te")

// console.log(textInput);

// document.querySelector("#textInput").addEventListener("keyup", (e) => {
//   console.log(e);
//   console.log("keyup", e.target.value);
// });

// document.querySelector("#textInput").addEventListener("keydown", (e) => {
//   console.log("keydown");
// });

// document.querySelector("#textInput").addEventListener("keypress", (e) => {
//   console.log("keypress");
// });

// document.querySelector("#textInput").addEventListener("focus", (e) => {
//   console.log("focus");
// });

// document.querySelector("#textInput").addEventListener("blur", (e) => {
//   console.log(e);
//   console.log("blur");
// });

// document.querySelector("#textInput").addEventListener("change", (e) => {
//   console.log("change");
// });

// document.querySelector("#nation").addEventListener("change", (e) => {
//   console.log(e);
//   console.log("change", e.target.value);
// });

// document.querySelector("#myFile").addEventListener("change", (e) => {
//   // console.dir(e.target.files);
//   const selectedFile = e.target.files[0];
//   const reader = new FileReader();
//   reader.readAsDataURL(selectedFile);

//   reader.addEventListener("load", (e) => {
//     const audio = new Audio(e.target.result);
//     audio.controls = true;

//     // audio.play();
//     // const img = new Image();
//     // img.src = e.target.result;
//     document.querySelector("#myFile").after(audio);
//     // document.body.append(img);
//   });
// });

// const regForm = document.querySelector("#regForm");

// regForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const data = new FormData(regForm);

//   data.append("reg_id", Date.now());

//   // console.log(data.get("name"));
//   // console.log(data.get("dob"));
//   // console.log(data.get("email"));
//   // console.log(data.get("gender"));
//   // console.log(data.get("nationality"));

//   for (let key of data.keys()) {
//     console.log(key, data.get(key));
//   }

//   // for (let val of data.values()) {
//   //   console.log(val);
//   // }
// });

// document.querySelector("#link").addEventListener("click", (e) => {
//   e.preventDefault();
//   if (confirm("do you want to go")) {
//     location.href = e.target.getAttribute("href");
//   }
// });

// window.addEventListener("scroll", (e) => {
//   console.clear();
//   console.log(e, window.scrollY);
// });

// document.addEventListener("click",(e) => {
//   console.log(e);
// })

// console.log("a");

// document.querySelector("#img").addEventListener("load", () => {
//   console.log("image loaded");
// });

// window.addEventListener("load", (e) => {
//   console.log(e);
// });
// console.log("b");
// console.log("c");

// document.querySelector(`[name='name']`).addEventListener("keyup", (e) => {
//   console.log(e);
//   if (e.key === "Backspace") {
//     console.log(e.target.value);
//   }
// });

// document.querySelector(`[name='name']`).addEventListener("keyup", () => {
//   console.log(this);
// });

// document.querySelector("#text").addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("U click Text");
//   },
//   false
// );

// document.querySelector("#div-a").addEventListener(
//   "click",
//   () => {
//     console.log("U click Div a");
//   },
//   false
// );

// document.querySelector("#div-b").addEventListener(
//   "click",
//   () => {
//     console.log("U click Div b");
//   },
//   false
// );

// document.querySelector("#div-c").addEventListener(
//   "click",
//   () => {
//     console.log("U click Div c");
//   },
//   false
// );

// document.querySelector("#div-d").addEventListener(
//   "click",
//   () => {
//     console.log("U click Div d");
//   },
//   false
// );

// const els = document.querySelectorAll(`.border-4`);

// els.forEach((el) =>
//   el.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("u click ", e.target.id);
//   })
// );

// console.log(els);

const events = ["click", "mouseover", "mouseout"];

events.forEach((el) => {
  document.querySelector("#box").addEventListener(el, (e) => {
    console.log("u ", e.type);
  });
});
