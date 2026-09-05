const list = document.querySelectorAll(".list");

// =========================
// THỜI GIAN CHỜ TRƯỚC KHI CHUYỂN TRANG
// =========================

const PAGE_DELAY = 400;

// =========================
// XÁC ĐỊNH TRANG HIỆN TẠI
// =========================

let currentPage = window.location.pathname.split("/").pop().toLowerCase();

// Nếu URL kết thúc bằng "/"
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

    // Không có link
    if (!href) return;

    // =========================
    // NÚT href="#"
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
    // KIỂM TRA CÓ ĐANG Ở TRANG HIỆN TẠI KHÔNG
    // =========================

    const targetPage = href.split("/").pop().toLowerCase();

    if (targetPage === currentPage) {
      event.preventDefault();
      return;
    }

    // =========================
    // CHUYỂN TRANG CÓ ANIMATION
    // =========================

    event.preventDefault();

    // Xóa active cũ
    list.forEach((li) => {
      li.classList.remove("active");
    });

    // Active tab mới
    this.classList.add("active");

    // Chỉ chuyển trang sau khi animation chạy
    setTimeout(() => {
      window.location.href = href;
    }, PAGE_DELAY);
  });
});
