const url_list = ['setopati.com',
'onlinekhabar.com',
'nagariknetwork.com',
'ekantipur.com',
'annapurnapost.com',

];
const btn = document.getElementById('check-btn');

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const url = tabs[0].url;
    const domain = new URL(url).hostname.split('.').slice(-2).join('.');
    
    if (url_list.includes(domain)){
      document.getElementById("url").textContent = domain;
      
    }
    else
    {
      document.getElementById("url").textContent = "Sorry, Unsupported Site 😔";
      btn.style.display = 'none';
      
    }
  });


