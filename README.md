# Distraction Alert

**Distraction Alert** is a Chrome extension designed to help you stay focused and boost productivity by giving you a gentle nudge whenever you attempt to access distracting websites. 

## Key Features
- Displays a modal dialog asking if you really want to proceed when visiting selected distracting websites.
- Offers two options:
  - **Focus**: Allows you to bypass the block and use the site.
  - **Distraction**: Encourages you to refocus by displaying a motivational message and providing a link to your To-Do list.
- Customizable list of blocked websites (e.g., YouTube, Instagram, LinkedIn, etc.).

## How It Works
1. The extension monitors your browsing activity.
2. If you attempt to visit a site from the blocked list, a modal pops up with the question: "Are you sure you want to dive into distractions right now?"
3. Based on your choice, the extension either allows you to proceed or reminds you to check your tasks.

## Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/distraction-alert.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the folder containing the cloned repository.

## Customization
To customize the list of blocked websites:
1. Open `background.js`.
2. Update the `blockedSites` array with the URLs of your choice:
   ```javascript
   const blockedSites = [
       "youtube.com",
       "instagram.com",
       "linkedin.com",
       "twitter.com",
       "jiocinema.com"
   ];
   ```

## Upcoming Features
- Integration with a built-in To-Do list.
- Customizable motivational messages.
- Analytics to track time saved.

