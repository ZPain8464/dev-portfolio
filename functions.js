function openCollapsible() {
  const element = document.getElementById("collapsible");
  element.classList.toggle("active");
  const content = document.getElementById("content");
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
