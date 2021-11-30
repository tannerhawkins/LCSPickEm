## Ancient Path Adventures

This web app allows students to access modules (videos and quizzes) that teach them valuable biblical and educational lessons. Teachers can assign modules created by APA or create their own modules within the app. Teachers can purchase APA modules along with ebooks to aid in their lessons.


## Getting Started

1. Begin by cloning the [repo](https://github.com/tannerhawkins/AncientPathAdventures.git)
2. Make sure you have yarn [installed](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable), open a terminal in the folder where you cloned the repo, and run `yarn install`
3. Run `yarn start` to begin a local development server

Warranty: Steps were last tested 11/10/21. If all packages are not properly installed, `npm install` may solve the issue. If not, manually install necessary packages.

## Testing

Testing is done via cypress.

To run the entire test suite, first open a command window and type `yarn start` then once the local server has been started, type `yarn run cypress run`

To run only certain test suites, begin a local server, open a command window, and type `yarn run cypress open`. Once cypress has opened, select the desired test suite.

## Deployment

Currently, the app is deployed [here](https://tannerhawkins.github.io/AncientPathAdventures). However, this is subject to change at the end of the semester when we move the app over to be deployed with firebase along with the client's other sites. This part of the README will be updated then.

Currently, there is no continuous deployment and developers should run `yarn deploy` to deploy the app.

## Technologies Used

- React
- Redux
- Firebase
- Stripe (to be added)

[Architecture Diagram](https://docs.google.com/presentation/d/1NrMkBQM_o7tQsAnEy7AK6Jq20YtF2SHbs3ElE6equC0/edit?usp=sharing)
[Application Architecture](https://docs.google.com/document/d/1A_judnnSh99EP8TB0vLDQeRYbizPc3_EPZ5PSroOOi0/edit?usp=sharing)

## Contributing

To begin working, future developers will need to request access to the repository.

The application is divided in such a way to make pages and components easy to find.

### Pages
All pages should be created in the `pages` folder. This folder is then split into subfolders `LogIn`, `Student`, and `Teacher`. Any future pages should be created in the corresponding folder.

### Main.js
All pages are wrapped in the component `Main`. This component allows the easy addition of a title and description to webpages.

### Components
The `components` folder holds all shared components in the app. Any component that would take up significant space in a file or will be used by another similar file should be created in this folder. The folder is split into subfolder based on what pages the component will be used in. The `Template` folder holds widely used components that can be used as building blocks for other components such as `Button.js`, `ModuleCard.js`, and `Header.js`.

### Firebase
All firebase code is kept in the `data/firebase.js` file. This file retrieves the appropriate databases and exports them to the rest of the app. If the app is in a Cypress test, it returns the testing databases.

### Redux
All Redux files are kept in the `app` folder. Each separate set of actions, selectors, and reducers is given its own folder and then combined in the `store.js` file.

### Routes
All routes outside of `App.js` can be found in the `routes` folder. This folder helps to simplify routes in the app and should be used to make routing more understandable and readable.

### Constants
All app constants are kept in the `data/constants.js` file. These constants include things such as colors, mock modules, header and sidebar widths, etc.

### Cypress
When new functionality is added, a new test should be added under `cypress/integration`. Currently, Cypress connects directly to the testing Firebase databases but could be configured to use fixtures instead in the future. 

### APA Modules

To add APA modules, sign into an admin account (these can be created by directly editing the `accountType` field of an account in Firebase to be `admin`) and create the module.

### Adding Epub Files

In order to add an ebook to the site, you must add it to the `epub` folder in the codebase. APA Modules are the only modules that have the ability to use these ebooks.

**MAKE SURE THE FILE HAS A TITLE IN THE METADATA**

[Project Website](https://tannerhawkins.github.io/Comp523-Website/home)

## Authors

- Alex Ho
- Tanner Hawkins
- Katrina Jagadeesan

## License
Copyright 2021 Talpha Harris

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Acknowledgements

Thank you to Talpha Harris for working with us on this project and including us in her mission to educate the next generation!

Additionally, thank you to our mentor Danny Nguyen for assisting us throughout this semester and providing us with helpful tips and information for software development and life!