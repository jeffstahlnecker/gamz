[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# Gamz App

Gamz is a platform for families and friends to come together for a virtual game night.

**The first version of Gamz will:**
* Provide one central "server" for users to authenticate with
* Allow users to use the "Play Now" feature to play the Spades card game

**Future development will include:**
* Users will create their own Gamz family/friends server
* Users will see presence of other members of the server
* Users will text chat with other members of the server
* Users will video chat with other members of the server (during a game)
* Users will use the Card Game generator to build their own card game for the server

**Current stack plan:**
* ReactJS
  * TypeScript
  * [TailwindCSS](https://tailwindcss.com/)
  * [React Query](https://react-query.tanstack.com/)
  * [Jest](https://jestjs.io/)
  * [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
  * [Cypress](https://www.cypress.io/)
* NodeJS
  * [Socket.io](https://socket.io/)
  * ExpressJS (isn't it what most people use anyways?)  
* PostgreSQL

## Setup your Dev Environment
**Prereqs**
* Node 
* NPM or YARN package manager (I use yarn)

**Setup**

Start by cloning the repo:

`git clone https://github.com/jeffstahlnecker/gamz`

Change directory and install dependencies:

`cd gamz && yarn install`

Note: you actually need to run `yarn install` in each of the following folders:
* api
* app
* docs
* ./

Start it up! When you start it, any change made will result in a hot-reload of the system that was changed.

`yarn dev`

## The Real Purpose of this App
I'm an "aspiring" developer and I enjoy it. I've read books taken online courses, and now I want to put all that learning together to build one "epic" application. 
### Here's what I did before starting: 
* Learned HTML/CSS in College
* Added Javascript along the way
* Built MANY a website  
* [Learned Gatsby](https://www.udemy.com/course/gatsby-tutorial-and-projects-course/)
* [Started Javascript Testing (60% through)](https://testingjavascript.com)
* [Started Epic React (50% through)](https://epicreact.dev/)
* [Reading a Javascript Book (20% through)](https://www.amazon.de/Javascript-Definitive-Most-Used-Programming-Language/dp/1491952024
  * I will add just after 20% I've already learned significantly more about the nuances of Javascript. I highly recommend it.
* [Skimmed Node / Express](https://www.udemy.com/course/nodejs-the-complete-guide/)  
* Built a fun Discord Bot at work (sorry - they've got that code locked down)  
  
### Some not as useful items
* [Learned Flutter and Dart](https://www.udemy.com/course/learn-flutter-dart-to-build-ios-android-apps/)
* Learned Flutter Driver (for testing)


## What will probably happen
I'm going to be working on this for a long time. It's a side project, not my full time job. But it's a fun one that I hope to really "drive" all that random learning home. Naturally I will continue the courses/books I haven't finished (there are more than I mentioned here), but I'll probably use them more as a reference at this point. 

There will be times when no progress is made, and times when lots of progress is made. 

## If you want to support me
I appreciate it! It's not necessary, but I'm always open to someone helping me stock my coffee machine. In all reality, this will go towards a dedicated budget for development software and furthering my development education.

<a href="https://www.buymeacoffee.com/jeffstahlnecker" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>