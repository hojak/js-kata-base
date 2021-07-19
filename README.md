# js-kata-base
Basic Repo to fork for a Javascript Coding Kata


## Useful Online Tools for a Coding Dojo
* https://mobti.me/
    Mob timer for a Team scheduling driver and navigator, sharable by QR code or link

* https://cuckoo.team/
    configurable work timer including breaks, sharable by link 

## Kata Catalogues

* https://codingdojo.org/KataCatalogue/
* http://codekata.com/

## Getting Started
1. Fork this repo
2. Preparation
    *  Checkout the new repo in in gitpod.io using the corresponding link

    or

    * install necessary tools, at least
        * IDE suitable for JavaScript (e.g. visual studio Code, https://code.visualstudio.com/) 
        * npm: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
        * https://mob.sh/ 
    * clone the new repo locally and open it your IDE
    * run ```npm install```

3. Start Your Mob Session

## Mob Session

* Define the roles ``driver``, ``navigator`` and ``consultants``
* choose a kata
* Set up a basic cycling timer timer
* get dirty :)

    repeat:
    * run ``mob start`` to start a round
    * run ``mob next`` for a hand over

    finish with your session ``mob done`` and a corresponding meaningful commit message


## Hints / Recommendations

* Use Mocha for Testing
    * https://mochajs.org/
* Use chai for Assertions
    * https://www.npmjs.com/package/chai
* Run ``npm run test:watch`` to run a continuous test
