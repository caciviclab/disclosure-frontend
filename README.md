[![Build Status](https://travis-ci.org/caciviclab/disclosure-frontend-alpha.svg)](https://travis-ci.org/caciviclab/disclosure-frontend-alpha)

### Setup Instructions

1. Install [node.js](http://nodejs.com)
2. Install [gulp.js](http://gulpjs.com) (```npm install -g gulp```)
3. Clone the repository.
4. From inside the repository directory, run: ```npm install``` to install all project dependencies.
5. Run ```gulp build``` (in most cases, `gulp` alone will be enough; `gulp build` rebuilds static files).
6. Open ```http://localhost:5000``` in your browser


To tweak the install,
* Edit `gulpfile.js` to change the port.

To point this front-end to another (e.g. local test) back-end:
* Run `python manage.py runserver` from your back-end repo; this should start your back-end server on port 8000.
* Edit `app/components/services/disclosure/service.js`, set `DISCLOSURE_SWAGGER_SPEC='http://localhost:8000/docs/api-docs/';`.

### Working with this application structure
1. All pipeline, automation, and testing dependencies are in the
   ```node_modules``` folder (installed using npm), while all third party
   application libraries are located in the ```thirdparty``` folder.

2. Any additional third party modules and plugins should always be installed
   automatically whenever possible using ```npm install module_name``` with the
   ```--save``` or ```--save-dev``` suffixes to save the dependencies in the
   ```package.json``` file.

3. All development takes place in the ```app``` folder. Production files are
   generated with gulp automatically and pushed to the ```dist``` folder (it
   will automatically be created the first time the ```gulp``` task is run in
   terminal post-installation).

4. The ```gulpfile.js``` is clearly commented, defining each task that takes
   place during pipeline automation. Every file change is watched and new files
   are automatically pushed to the ```dist``` folder. All files are concatenated
   into individual files for use on production servers.


### Contributing
This project is open source so collaboration is welcome. 


* If you see a way to improve something in this project, please feel free to open a Pull Request to the *develop* branch so we can discuss your code.
* Review our [Contributing|docs for contributing] to learn more about the application structure, coding style, etc.
* Always rememer to run tests! `npm test`


### Learning Resouces
- https://github.com/curran/screencasts/tree/gh-pages/introToAngular
- https://www.codeschool.com/courses/shaping-up-with-angular-js
- http://egghead.io
- http://thinkster.io


## Deployment

Travis will deploy the `master` branch to Github Pages. You shouldn't need to manually deploy
but, here are the instructions.

To deploy, just set a personal access token via GITHUB_TOKEN in your environment
and run the deploy script. The script will build your working directory as is,
and push it to Github pages.

    $ GITHUB_TOKEN=<your personal token> ./deploy.sh
