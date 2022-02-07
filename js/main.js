setInterval(() => {
  const skipBtn = document.getElementsByClassName("ytp-ad-skip-button");
  if (skipBtn != undefined && skipBtn.length > 0) {
    console.log(`ad detect`);
    skipBtn[0].click();
  }
}, 50);
