# React App for searching the two team members that worked longest on a sigle projects together

## How to run!

First you need to install the node_modules. Just write in the project directory, in the terminal 'npm install' and press Enter.

###npm install

In the project directory, in the terminal you need to run:

###npm run start

Runs the app in the development mode.
Automatically opens http://localhost:3000 to view it in the browser.

## About App

In this app you can compare different workers and projects to see the two team members that worked longest on a sigle projects together.

## How to use

Click on the button. Chose a file (.txt or .json).
The file formated: Employe ID, Project ID, Date when started working, Date when ended working on the project
Every iput is separated by space and commer ( ,)
If you whant the date to be from today you simply write NULL on the date.
Date Input can be: ISO Date, Short Date, Long Date.
Every new empl has to be on a new line.

Example for the file:
1, 12, 2013-11-01, 2014-01-05
2, 13, 2013-11-01, 2013-11-02
3, 10, 2012-05-16, NULL
4, 10, 2009-01-01, Mar 25 2009
5, 111, 2009-01-01, Mar 5 2015
6, 10, 2009-01-01, Mar 15 2015
7, 111, 2009-01-01, 03/05/2055

After choosing the file you automatically get the answer.
In the console you can see a table with the answer.

## Style Guide
Airbnb standards