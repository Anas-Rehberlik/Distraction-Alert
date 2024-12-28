chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const url = new URL(details.url);  // Create URL object to get the hostname
    const blockedSites = [
      "youtube.com",
      "instagram.com",
      "jiocinema.com",
      "twitter.com",
      "linkedin.com"
    ]; // Blocked sites (only domain name)

    // Check if the hostname matches any of the blocked sites
    if (blockedSites.some(site => url.hostname.includes(site))) {
      // Inject content script to show the modal
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        files: ["content.js"]
      });

      // Temporarily cancel the navigation
      return { cancel: true };
    }
  },
  {
    // Specify URL pattern to match, restricting to specific sites
    urls: [
      "*://*.youtube.com/*",
      "*://*.instagram.com/*",
      "*://*.jiocinema.com/*",
      "*://*.twitter.com/*",
      "*://*.linkedin.com/*"
    ]
  },
  ["blocking"]
);
