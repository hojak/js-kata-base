# js-kata-base
Basic Repo to fork for a Javascript Coding Kata

[![Open This Repo in GitPod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer)

## Useful Online Tools for a Coding Dojo
* https://mobti.me/
    Mob timer for a Team scheduling driver and navigator, sharable by QR code or link

* https://cuckoo.team/
    configurable work timer including breaks, sharable by link 

## Kata Catalogues

* https://codingdojo.org/KataCatalogue/
* http://codekata.com/

## Getting Started (Each Mob Member)
0. Crate a Git(hub.io) Account
1. Fork this repo
2. Preparation
    *  Checkout the new repo in in gitpod.io using the corresponding link above

    or

    * install necessary tools, at least
        * IDE suitable for JavaScript (e.g. visual studio Code, https://code.visualstudio.com/) 
        * npm: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
        * https://mob.sh/ 
        * oh Git, of course, you need git...
    * clone the new repo locally and open it your IDE
    * run ```npm install```
3. Make sure a ``npm run test:watch`` works
4. You're ready to start

## The Mob Session Itself

* Clarify the roles ``driver``, ``navigator`` and ``consultants``
* Choose a kata
* Set up a basic cycling timer
* Get dirty :)

    repeat:
    * run ``mob start`` to start a round
    * do some coding
    * run ``mob next`` for a hand over when the cycle timer tell you to

    finish with your session ``mob done`` and a corresponding meaningful commit message

* make sure to do a debriefing at the end of or after the session

## Hints / Recommendations

* Use Mocha for Testing
    * https://mochajs.org/
* Use chai for Assertions
    * https://www.npmjs.com/package/chai
* Run ``npm run test:watch`` to run a continuous test
