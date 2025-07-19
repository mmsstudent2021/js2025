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

document.querySelector("#myFile").addEventListener("change", (e) => {
  // console.dir(e.target.files);
  const selectedFile = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(selectedFile);

  reader.addEventListener("load", (e) => {
    const audio = new Audio(e.target.result);
    audio.controls = true;

    // audio.play();
    // const img = new Image();
    // img.src = e.target.result;
    document.querySelector("#myFile").after(audio);
    // document.body.append(img);
  });
});
