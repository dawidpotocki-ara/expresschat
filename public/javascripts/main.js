if (window.location.pathname === "/app" || window.location.pathname === "/app/") {
  let chatHistory = document.querySelector("#history");
  window.onload=()=> {
    chatHistory.scrollTop = chatHistory.clientHeight;
  }

  let messagebox = document.querySelector("#messagebox");
  let messageboxObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (messagebox.textContent == "") messagebox.innerHTML = "";
    });
  });
  messageboxObserver.observe(messagebox, {
    attributes: true,
    childList: true,
    characterData: true,
  });
  messagebox.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey && messagebox.innerHTML !== "") {
      console.log(`Message "${messagebox.innerHTML}" sent`);
      messagebox.innerHTML = "";
    }
  });
}
