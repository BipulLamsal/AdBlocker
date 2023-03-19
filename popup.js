chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const url = tabs[0].url;
    const domain = new URL(url).hostname.split('.').slice(-2).join('.');
      document.getElementById("url").textContent = domain;
  });