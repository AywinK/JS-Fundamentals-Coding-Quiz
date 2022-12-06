# JS-Fundamentals-Coding-Quiz

## Description
A timed multiple choice quiz to test user's knowledge on JavaScript Fundamentals. The quiz features a hi-scores that stores the data locally, so that you can compare your score with others. The quiz features both audio and visual feedback. Created using HTML, CSS, and JavaScript (including the DOM API). <br>
The functionality can be seen in the demo below. <br>
 ![Quiz Demo](/assets/gifs/demo_gif.gif)

## Deployment
The quiz is deployed using GitHub Pages.<br>The quiz start screen can be accessed at: https://aywink.github.io/JS-Fundamentals-Coding-Quiz/<br>The hi-scores can be accessed at: https://aywink.github.io/JS-Fundamentals-Coding-Quiz/highscores.html

## Usage
### End User
The quiz content can be modified by changing the questions variable in the questions.js file. Questions must be an object element within the array. The object must contain properties with the following names:
<br>
- question
- choices
- answer

### Development - unfinished
Files for the web application are named appropriately and placed in a logically structured folder layout.

The password requirements can be easily modified through the passwordLengthAccepted variable and the charsOptions object. No other significant changes are required for modifying the password policies.

The password generator has built in checks to ensure the user's choices are acceptable. By default, not meeting the requirements, returns an empty password.

The codebase includes comments and appropriately named expressions as variables (example shown below), so that the code is easy to understand.
<br> <br>
 ![Code Example screenshot](/assets/images/code_screenshot.png)
 <br> <br>
 The script file also logs user actions to the developer console, as shown below, to aid code readability and testing changes.
 <br> <br>
  ![Web Application screenshot](/assets/images/devConsole_screenshot.png)
## Credits
- W3Schools - https://www.w3schools.com/js/default.asp
- MDN Javascript Documentation - https://developer.mozilla.org/en-US/
- Stack Overflow threads - https://stackoverflow.com/

## License
MIT License

