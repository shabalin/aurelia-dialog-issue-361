### The goal of this repo is to reproduce Aurelia Dialog 2.0.0-RC.3 bug

Bug url: https://github.com/aurelia/dialog/issues/361

App was created using latest Aurelia CLI, with webpack, typescript options selected.

Steps to reproduce:

#### OK Scenario

Build the app in development mode:
```bash
npm run build:dev
```  

Open a browse at http://localhost:8081/, then click on "Open Dialog" button - Dialog will be opened

#### Error Scenario

Build the app in production mode:

```bash
npm run build:prod
```  
Open a browse at http://localhost:8081/, then click on "Open Dialog" button, Dialog isn't opened, following error is printed to the console:
```
bluebird.js:1564 Unhandled rejection Error: Cannot determine default view strategy for object.
    at t.getViewStrategy (http://localhost:8081/app.7716b0bd1644fba2227b.bundle.js:1:15257)
    at http://localhost:8081/app.7716b0bd1644fba2227b.bundle.js:1:70153
    From previous event:    
        at A.L [as _captureStackTrace] (http://localhost:8081/app.7716b0bd1644fba2227b.bundle.js:1:144527)    
        at A._then (http://localhost:8081/app.7716b0bd1644fba2227b.bundle.js:1:170195)    
        at A.then (http://localhost:8081/app.7716b0bd1644fba2227b.bundle.js:1:168543)    
        at e.open (http://localhost:8081/app.7716b0bd1644fba2227b.bundle.js:1:313114)    
        at t.openDialog (http://localhost:8081/app.7716b0bd1644fba2227b.bundle.js:1:358641)    
        at e.evaluate (http://localhost:8081/app.7716b0bd1644fba2227b.bundle.js:1:227459)    
        at t.callSource (http://localhost:8081/app.7716b0bd1644fba2227b.bundle.js:1:293727)    
        at t.handleEvent (http://localhost:8081/app.7716b0bd1644fba2227b.bundle.js:1:293888)    
        at HTMLDocument.On (http://localhost:8081/app.7716b0bd1644fba2227b.bundle.js:1:249886)

```


