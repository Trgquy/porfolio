const list = document.querySelectorAll(".list");

list.forEach((item) => {
  item.addEventListener("click", function () {
    list.forEach((li) => {
      li.classList.remove("active");
    });

    this.classList.add("active");
  });
});
