# String Calculator

This project is an implementation of a string calculator.
- The user can enter numbers in the input and click the 'Add' button to get their sum. 
- The numbers can be separated by ',' or a new line (enter click inside textbox)
- Users can also specify a custom delimiters in following ways:
  - for single char delimiter enter `//delimiter\n` before entering numbers separated by `delimiter`. ex: `//;\n1;2;3;4`
  - for multi char delimiters enter `//[delimiter]\n` before entering numbers separated by `delimiter`. ex: `//[#$#$]\n1#$#$2#$#$3#$#$4`
  - for multiple delimiters enter `//[delimiter1][delimiter2]\n` before entering numbers separated by `delimiter1` or `delimiter2`. ex: `//[**][##]\n1**2##3**4`

### Run the project:
1. Clone the repo and change directory to project root
2. run `npm install`
3. run `npm run dev`. This would start a dev server on port 5173
4. Open `localhost:5173` in your browser

To run the tests run the command:
- `npm run test`


### Git Commits
The project follows following template for git commit messages

`<TYPE> | FEATURE | message`

The different values of `TYPE` are following:
- feature (new feature for the user, not a new feature for build script)
- docs (changes to the documentation)
- style (formatting, missing semi-colons, etc.; no production code change)
- refactor (refactoring production code, e.g. renaming a variable)
- test (adding missing tests, refactoring tests; no production code change)
- chore (updating grunt tasks etc.; no production code change)
