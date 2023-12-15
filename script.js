let selectableTexts = document.querySelectorAll(".js-selectable-text");
let twitterButton = document.querySelector(".twitter_button");
let selectedText;

selectableTexts.forEach((text) => {
  text.addEventListener("mouseup", (e) => {
    setTimeout(() => {
      selectedText = window.getSelection().toString().trim();
      if (selectedText.length) {
        const x = e.pageX;
        const y = e.pageY;
        const twitterButtonWidth = Number(
          getComputedStyle(twitterButton).width.slice(0, -2)
        );
        const twitterButtonHeight = Number(
          getComputedStyle(twitterButton).height.slice(0, -2)
        );
        twitterButton.style.left = `${x + twitterButtonWidth * 0.15}px`;
        twitterButton.style.top = `${y + twitterButtonHeight * 0.1}px`;
        twitterButton.style.opacity = "1";
        twitterButton.classList.add("btnEntrance");
      }
    }, 0);
  });
});

document.addEventListener("mousedown", (e) => {
  if (
    getComputedStyle(twitterButton).display === "block" &&
    !e.target.classList.contains("button")
  ) {
    twitterButton.style.opacity = "0";
    twitterButton.classList.remove("btnEntrance");
    window.getSelection().empty();
  }
});

twitterButton.addEventListener("click", (e) => {
  let twitterUrl = "https://twitter.com/intent/tweet";
  let pageUrl = encodeURIComponent(window.location.href);
  let hashTags = "techArticle,article,citibank,bahrain";
  let via = "Nraza";
  window.open(
    `${twitterUrl}?text="${encodeURIComponent(
      selectedText
    )}" by @${via} ${hashTags
      .split(",")
      .map((h) => "%23" + h)
      .join(" ")} ${pageUrl}`
  );
});
