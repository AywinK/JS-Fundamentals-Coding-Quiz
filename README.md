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

### Development
Files for the quiz are named appropriately and placed in a logically structured folder layout. The codebase includes comments and appropriately named expressions as variables, so that the code is easy to understand. The JavaScript files for the quiz and hi-scores are structured in the following order:
- Global variables
- Functions
- Event Listeners
- Scripts autorun on page load

The codebase, currently, cannot be modified easily without any refactoring, as the codebase includes hardcoded values and repeating code that must be manually changed multiple times.

## Credits
- W3Schools - https://www.w3schools.com/js/default.asp
- MDN Javascript Documentation - https://developer.mozilla.org/en-US/
- Stack Overflow threads - https://stackoverflow.com/

## License
MIT License

