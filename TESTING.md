# Testing
"Click to return back to the [README.md](README.md)"

## Browser Compatibility
The site was tested to work correctly in [Google Chrome](https://www.google.com/chrome/), Mozilla [Firefox](https://www.mozilla.org/en-US/firefox/new/) and [Safari](https://www.apple.com/safari/). Here are some screenshots of the site in the different browsers.
<details>
<summary>Google Chrome</summary>

![2020 Chrome](documentation/testing/screenshot-2020-chrome.png)
![2010 Chrome](documentation/testing/screenshot-2010-chrome.png)
</details>

<details>
<summary>Firefox</summary>

![2020 Firefox](documentation/testing/screenshot-2000-firefox.png)
![2010 Firefox](documentation/testing/screenshot-1990-firefox.png)
</details>

<details>
<summary>Safari</summary>

![2020 Safari](documentation/testing/screenshot-2020-safari.png)
![2010 Safari](documentation/testing/screenshot-1980-safari.png)
</details>

## Code Validation

### HTML
Result from [W3C Markup Validation Service](https://validator.w3.org/):
![HTML Validator](documentation/testing/HTML-validator.png)
   
### CSS
Since the website has 6 different CSS files each one has been validated.

Result from [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) for general styling:
![CSS Validator](documentation/testing/CSS-validator.png)
Result from [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) for 2020 style sheet:
![CSS Validator](documentation/testing/CSS20-validator.png)
Result from [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)for 2010 style sheet:
![CSS Validator](documentation/testing/CSS10-validator.png)
Result from [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)for 2000 style sheet:
![CSS Validator](documentation/testing/CSS00-validator.png)
Result from [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)for 1990 style sheet:
![CSS Validator](documentation/testing/CSS90-validator.png)
Result from [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)for 1980 style sheet:
![CSS Validator](documentation/testing/CSS80-validator.png)

### JavaScript
Result from [JSHint](https://jshint.com/):
![JS Validator](documentation/testing/js-validator.png)

### Lighthouse
Result from [Lighthouse](https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es):
![Lighthouse](documentation/testing/lighthouse.png)

## Responsiveness
Here are screenshots of the website on the desktop and mobile version. The breakpoint for this is at 768px of width. There is no comparisson provided for the 1980 and 1990 versions since their main structure is very similar to the 2020´s one. There are though comparisions provided for the 2000 and 2010 since they structure varies a little bit more from the 2020 version.
<details>
<summary>2020</summary>

![2020 Desktop](documentation/testing/screenshot-2020-desktop.png)
![2020 Mobile](documentation/testing/screenshot-2020-chrome.png)
</details>
<details>
<summary>2010</summary>

![2010 Desktop](documentation/testing/screenshot-2010-desktop.png)
![2010 Mobile](documentation/testing/screenshot-2010-chrome.png)
</details>
<details>
<summary>2000</summary>

![2000 Desktop](documentation/testing/screenshot-2000-desktop.png)
![2000 Mobile](documentation/testing/screenshot-2000-firefox.png)
</details>

## Bugs
* On the 1990 version there was a problem with the inputs in the Form. On [Firefox](https://www.mozilla.org/en-US/firefox/new/) the text area has a bigger size than on other browsers and in [Safari](https://www.apple.com/safari/) both text inputs and the textarea did not accept the styling rules.
This was fixed by adding a specific height rule for the text area only on Firefox and the bug with Safari required a "-webkit-appearance none" rule and setting a specific border radius.

<details>
<summary>See bug</summary>

![1990 Bug](documentation/testing/contact-bug.png)
</details>

## Unfixed Bugs
There are no remaining bugs that I am aware of.

## Version Control
During my conversations with my mentor he called to my atention the fact that I was not correctly commiting my updates to the website (I added very few commits with long texts and many changes). After he informed me this and reminded me the correct way to aproach this I quickly changed my way of working but most of the website was with a wrong aproach to commits.