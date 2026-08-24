const list = document.querySelectorAll(".list");

// =========================
// THỜI GIAN CHUYỂN TRANG
// =========================

const PAGE_DELAY = 400;

// =========================
// XÁC ĐỊNH TRANG HIỆN TẠI
// =========================

let currentPage = window.location.pathname.split("/").pop().toLowerCase();

// Nếu mở thư mục bằng index.html
if (currentPage === "") {
  currentPage = "index.html";
}

// =========================
// SET ACTIVE KHI TRANG LOAD
// =========================

list.forEach((item) => {
  const link = item.querySelector("a");

  if (!link) return;

  const href = link.getAttribute("href");

  if (!href || href === "#") return;

  const linkPage = href.split("/").pop().toLowerCase();

  if (linkPage === currentPage) {
    item.classList.add("active");
  } else {
    item.classList.remove("active");
  }
});

// =========================
// CLICK MENU
// =========================

list.forEach((item) => {
  item.addEventListener("click", function (event) {
    const link = this.querySelector("a");

    if (!link) return;

    const href = link.getAttribute("href");

    // =========================
    // NÚT #
    // =========================

    if (href === "#") {
      event.preventDefault();

      list.forEach((li) => {
        li.classList.remove("active");
      });

      this.classList.add("active");

      return;
    }

    // =========================
    // LINK CÓ TRANG THẬT
    // =========================

    if (href) {
      // Ngăn chuyển trang ngay lập tức
      event.preventDefault();

      // Đổi active ngay khi click
      list.forEach((li) => {
        li.classList.remove("active");
      });

      this.classList.add("active");

      // Chờ animation chạy xong rồi mới chuyển trang
      setTimeout(() => {
        window.location.href = href;
      }, PAGE_DELAY);
    }
  });
});
