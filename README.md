# README

Use this readme to get started setting up and exploring the Apparel Store web application. *Next Steps* suggests tasks to modify the app to better familiarize you with how it works.

# About the App

This sample template creates a web application that allows you to create "listings" by filling in a few fields in a form. The listings are stored in the data.txt file.

You can mark a listing as sold which changes the color of the listing and strikes out its text. 

You can also click **Delete** on a listing to permanently delete it from the data.txt file.

Read the notes in the code to get a better idea of which parts are doing what. Don't be afraid to open the files and read through them to learn how things are working together. 

## Required tools

If you don't already have these tools, download and install them before you start working with the Apparel Store app.

* Modern web browser (may we suggest [Chrome?](https://www.google.com/chrome/browser))
* Command Line Interface (CLI)
	* Mac OSX: Terminal is already installed, or try [iTerm](https://www.iterm2.com/)
	* Windows: Command Prompt (DOS)
* [Node.js](https://nodejs.org/download/) 
* A text editor or coding tool of your choice. [Sublime Text 2](http://www.sublimetext.com/2) is available for free for Mac and Windows, but will occassionally ask you to purchase a license when you save your files. 

## Setup

Once you have all prerequisites installed, open your CLI and navigate to the project folder.

_New to command line?_ Navigate to the project folder using `cd` (which stands for change directory). If you know the full path of the directory you can type it in, or you can click and drag the folder over to your CLI window and it will automatically fill in the path to that folder.

		cd /Users/mycomp/Documents/we-code-node-starter

Press return, and you'll be taken to that folder.

To install the app, type `npm install` and press return. You should see several packages and dependencies being installed.

~~~
	npm WARN package.json apparel-listings@0.0.0 No repository field.
	npm WARN package.json apparel-listings@0.0.0 No license field.
	express@4.11.2 node_modules/express
	├── merge-descriptors@0.0.2
	├── utils-merge@1.0.0
	├── methods@1.1.1
	├── fresh@0.2.4
	├── cookie@0.1.2
	├── escape-html@1.0.1
	├── range-parser@1.0.2
	├── vary@1.0.1
	├── cookie-signature@1.0.5
	├── finalhandler@0.3.3
	├── media-typer@0.3.0
	├── parseurl@1.3.0
	├── serve-static@1.8.1
	├── content-disposition@0.5.0
	├── path-to-regexp@0.1.3
	├── depd@1.0.1
	├── qs@2.3.3
	├── on-finished@2.2.1 (ee-first@1.1.0)
	├── debug@2.1.3 (ms@0.7.0)
	├── etag@1.5.1 (crc@3.2.1)
	├── proxy-addr@1.0.8 (forwarded@0.1.0, ipaddr.js@1.0.1)
	├── send@0.11.1 (destroy@1.0.3, ms@0.7.0, mime@1.2.11)
	├── type-is@1.5.7 (mime-types@2.0.14)
	└── accepts@1.2.11 (negotiator@0.5.3, mime-types@2.1.3)

	body-parser@1.13.2 node_modules/body-parser
	├── bytes@2.1.0
	├── content-type@1.0.1
	├── depd@1.0.1
	├── qs@4.0.0
	├── on-finished@2.3.0 (ee-first@1.1.1)
	├── debug@2.2.0 (ms@0.7.1)
	├── raw-body@2.1.2 (unpipe@1.0.0)
	├── http-errors@1.3.1 (inherits@2.0.1, statuses@1.2.1)
	├── iconv-lite@0.4.11
	└── type-is@1.6.5 (media-typer@0.3.0, mime-types@2.1.3)
~~~

To start the app, type `node app.js` in the command line. After a few seconds, you should see a success message. Keep your command line tool open, and open a new tab in your web browser. In the URL bar, type `http://localhost:8889/static/index.html`.

When the page loads, there should be a sample item already in your store. To see the app in action, resize your browser window to take up one half of the screen, and the command line to take up the other half. Watch what happens in the command line when you click the "Delete" button on the existing listing. 

		Success reading file:  data.txt

In the browser, create a new listing by entering an Author, Description, and Price in the form and clicking **Add Listing**. You should get the same success message. The app is changing entries in the data.txt file as you interact with the browser. 

To stop serving the page to your browser, press Control+C in the CLI.


### Exploratory Questions 

What happens if you open data.txt and edit the file?

What file(s) would you change to add a field to the form?

How is the date being filled in? How would you change the timezone to Chicago (CST)?

## Next Steps

Try some of these tasks on your own to improve this app, and familiarize (or refresh) yourself with JavaScript and Node.js.

* Create an alert when the user tries to Delete a listing, and ask them to verify that they want to permanently delete the item.

* Add a new field to the form, 'Size'. Make the user select their size from a drop-down menu.

* Advanced: Create an "Edit" function, so that the user doesn't have to delete a listing or open the data.txt file if they make a typo.

## Resources

* [Node](https://nodejs.org/)
* [NodeSchool](http://nodeschool.io/)
* [npm](https://www.npmjs.com/)
