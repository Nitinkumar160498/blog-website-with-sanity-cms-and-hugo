document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("copy-link-button");
  const status = document.getElementById("copy-link-status");

  if (button === null || status === null) {
    return;
  }

  const label = button.querySelector(".copy-link-button__label");

  if (label === null) {
    return;
  }

  const originalText = label.textContent;
  let timer;

  function resetButton() {
    label.textContent = originalText;
    button.classList.remove("is-copied");
  }

  function copySuccess() {
    label.textContent = "Copied!";
    button.classList.add("is-copied");
    status.textContent = "Article link copied!";

    clearTimeout(timer);
    timer = setTimeout(resetButton, 2000);
  }

  function copyFailed() {
    resetButton();
    status.textContent =
      "Unable to copy automatically. Please copy the URL from your browser.";
  }

  button.addEventListener("click", function () {
    const pageUrl = window.location.href;

    if (!navigator.clipboard) {
      copyFailed();
      return;
    }

    navigator.clipboard.writeText(pageUrl).then(copySuccess).catch(copyFailed);
  });
});
