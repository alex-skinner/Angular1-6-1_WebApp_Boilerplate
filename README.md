# Angular 1.6.1 Boilerplate

A simple AngularJS (v1.6.1) boiler plate to help you quickly get a project started.

## Technologies used:
 * LESS
 * NodeJS and ExpressJS to host the application
 * NodeMon to detect changes to 'server-side' JS files and automatically re-host the web app
 * Gulp - which listens to changes in both LESS and 'client side' JS files and rebuilds the main styling and App.js files.
 * Twitter Bootstrap CSS framekwork
 
 ## Getting Started
 1. Clone the repo to your machine
 2. Extract
 3. Browse to the /cmds/ folder
 4. Run _1.Initialise project.cmd_ 
  a. This will get all project dependancies from NPM/Bower/etc. and build the client-side JS/styling files
 5. In CMD prompt, run `npm run dev` to start nodemon and host the site
 6. In another CMD prompt, run `gulp auto-build`. This will start Gulp listening for changes to 'client-side' JS changes
 
 
