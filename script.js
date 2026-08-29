const menuButton = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const header = document.querySelector(".site-header");
const contactForm = document.querySelector("#contact-form");
const formMessage = document.querySelector("#form-message");

// 手机端导航菜单开关
menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.classList.toggle("active", isOpen);
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "关闭导航菜单" : "打开导航菜单");
});

// 点击菜单链接后自动收起手机端菜单
mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "打开导航菜单");
  });
});

// 页面滚动后为导航栏增加分隔效果
function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 12);
}

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// 演示站点不连接服务器，仅在前端显示提交反馈
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = new FormData(contactForm).get("name").trim();
  formMessage.textContent = `谢谢你，${name}！需求已记录，这是一个演示表单，不会真实发送。`;
  contactForm.reset();
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
