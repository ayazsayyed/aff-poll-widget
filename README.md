# AFF-POLL-WIDGET

This project is a assignment.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Steps to run this project locally
  -  Clone the repo `https://github.com/ayazsayyed/aff-poll-widget.git`
  -  Run `npm install` to install all the dependencies
  -  Build the dev server by running `npm run dev`, which will open up a dev server on your localhost:3000

## Steps to add a new widget 
  - Open `public/index.html` and add a new widget with below mentioned configurations.

| Param              | Desc                          | type     |
| ------------------ | ----------------------------- | -------- |
| data-widget-id     | A unique Poll id              | `String` |
| data-poll-question | A Poll/ Question to be hosted | `String` |
| data-poll-options  | Options for the poll          | `Array`  |

## Steps to test a component
  - Run `npm run test` to run the test cases for the component.

## Few images for reference
  - Initial state with no votes.  
    ![image](https://github.com/ayazsayyed/aff-poll-widget/assets/31244250/a53d674d-75e7-4331-b98a-c60967900ae1)  
  - Active state  
    ![image](https://github.com/ayazsayyed/aff-poll-widget/assets/31244250/9ba4085d-6697-4a9f-8aa0-5ba1ba407f96)  
  - With multiple state  
    ![image](https://github.com/ayazsayyed/aff-poll-widget/assets/31244250/d33a0cdd-9bb5-4460-a276-ed1a1cd029cf)  
  - With multple poll widget on same page  
    ![image](https://github.com/ayazsayyed/aff-poll-widget/assets/31244250/f871a045-b263-437a-8e97-a412e66d14e9)


