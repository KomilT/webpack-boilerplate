import "./style.css";

document.body.addEventListener("mousedown", () => {
  document.body.classList.add("using-mouse");
});

document.body.addEventListener("keydown", (event) => {
  if (event.code === "Tab") {
    document.body.classList.remove("using-mouse");
  }
});
