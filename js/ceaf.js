// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.height = "6vmin";
    document.getElementById("header").style.borderWidth = "1px";
    document.getElementById("header").style.opacity = 0.9;
    document.getElementById("logo").style.maxHeight = "4vmin";
    document.getElementById("menu").style.paddingTop = "1vmin";
  } else {
    document.getElementById("header").style.height = "9vmin";
    document.getElementById("header").style.borderWidth = "3px";
    document.getElementById("header").style.opacity = 1;
    document.getElementById("logo").style.maxHeight = "8vmin";
    document.getElementById("menu").style.paddingTop = "2vmin";
  }
}
