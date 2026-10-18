document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("site-search");

  if (searchInput === null) {
    return;
  }

  const searchForm = document.getElementById("site-search-form");
  const postCards = document.querySelectorAll(".post-tile");
  const noResultsMessage = document.getElementById("search-no-results");

  function getText(postCard, selector) {
    const element = postCard.querySelector(selector);
    if (element === null) {
      return "";
    }
    return element.textContent.toLowerCase();
  }

  function filterPosts() {
    let searchText = searchInput.value;
    searchText = searchText.toLowerCase();
    searchText = searchText.trim();

    let matchCount = 0;

    for (let cardIndex = 0; cardIndex < postCards.length; cardIndex++) {
      const postCard = postCards[cardIndex];

      const titleText = getText(postCard, ".post-tile__title a");
      const categoryText = getText(postCard, ".post-tile__category");
      const authorText = getText(postCard, ".post-tile__author-name");
      const excerptText = getText(postCard, ".post-tile__excerpt");
      const searchableText =
        titleText + " " + categoryText + " " + authorText + " " + excerptText;

      let isMatch = false;
      if (searchText === "") {
        isMatch = true;
      } else if (searchableText.indexOf(searchText) !== -1) {
        isMatch = true;
      }

      if (isMatch === true) {
        postCard.classList.remove("is-hidden");
        matchCount = matchCount + 1;
      } else {
        postCard.classList.add("is-hidden");
      }
    }

    if (noResultsMessage !== null) {
      if (matchCount === 0 && searchText !== "") {
        noResultsMessage.classList.remove("is-hidden");
      } else {
        noResultsMessage.classList.add("is-hidden");
      }
    }
  }

  searchInput.addEventListener("input", filterPosts);

  if (searchForm !== null) {
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
      filterPosts();
    });
  }
});
