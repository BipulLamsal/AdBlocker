chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const url = tabs[0].url;
    const regex = /\(.*)\//;
    const result = regex.exec(url)[1];
    document.getElementById("url").textContent = result;
  });