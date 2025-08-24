const baseUrl = "http://localhost:8000";

// fetch(`${baseUrl}/fruits`)
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch(`${baseUrl}/movies`)
//   .then((res) => res.json())
//   .then((json) => console.log(json));

document.querySelector("#fetchBtn").addEventListener("click", () => {
  fetch(`${baseUrl}/fruits`)
    .then((res) => res.json())
    .then((json) => {
      json.map((el) => {
        const list = document.createElement("li");
        list.innerText = el.title;
        document.querySelector("#listGroup").append(list);
      });
    });
});
