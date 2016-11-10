Dojo- Progressbar Demo
====================================================

Quick Start
-----------

0. Make sure you have [Node.js](http://nodejs.org), Grunt and a
   [Java runtime](http://www.oracle.com/technetwork/java/index.html)
   installed.
1. Clone the repository using `git clone --recursive`.
2. Run `npm install` to install additional Node.js dependencies.
3. Develop your project in `src/` until it is amazing.
4. Run `grunt`, which will download necessary folders, build and then clean it `dist/`.
5. Upload `dist/` for millions of people the world over to enjoy.
6. Hapyness.

### Windows Users

If you have [msysgit](http://git-scm.com) installed, run Git Bash and verify
some dependencies by running the following commands:

    which java
    which node

A brief tour
------------

* All of the application's source goes in `src`. It will be built into
  `dist`.
* Build profiles for the build system go in `profiles`.
* The entrypoint of the demo application is the HTML file at
  `src/index.html`.
* The `build.sh` script takes your application files and builds them for
  production use using Stylus and the Dojo build system. It depends on the
  presence of an application build profile at `profiles/app.profile.js`.
* The file `src/app/resources/app.styl` contains all the CSS for the
  application.
* The test configuration is at
  `src/tests/pbartest.js` and defaults to using a Sauce Labs tunnel.

a) before your pull requests are
accepted, for the good of us all!)

