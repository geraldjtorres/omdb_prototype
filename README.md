# NEVERBLAND Coding Challenge

After analysing the prototype application and readme.md file I have decided to wrap the application in an object that you call once. I have done this because I wanted the application to have the ability to be expanded and improved upon for other developers and having global variables is bad practice. Having everything in its own scope ensures that there is no clashes with variables and any unwanted variable mutation.

Given the small time frame given for this project I have decided to complete the core tasks to the best of my ability. I have continued to use the JQuery library because I expanded on the original prototype code given to me. JQuery was useful fetching the response of the OMDb API and also for selecting elements and adding basic animation.

I have also decided to remove the search button from the original PSD design because AJAX gives me the ability to asynchronously fetch and display data whenever I type into the input text field.

One of the main tasks is to allow the user to click on a movie and it will display to them more information. I thought that the best way to approach this was with a lightbox. Lightboxes are great for an enjoyable user experience because it means the user doesn't have to be taken to another page and have to go back in order to get more information for another movie. I also added the ability to show and display results if a valid response has been given back. I used JQuery's slide animation to display and hide the results.

I have used Sass as the tool for styling the web page beacuse of its useful ability of nesting to help prevent DRY (Don't Repeat Yourself) code. For the logo, I used a SVG version of it and it will fallback to PNG if the user's browser is not able to render an SVG.

In hindsight, if I were to developer things further I would have added media queries for the website to be mobile and tablet compatible for an even greater experience for users who views the website in those platforms. I would have also used task runners such as webpack to minify my code for faster response loading time.

I would also use ES6 JavaScript for it's new template strings feature when rendering the results on the page. For added user experience, I would have added subtle animations when a user hovers over a movie. 

This project has been an enjoyable experience and I hope it is enough to demonstrate how hungry I am to learn more.




///////////////////////////////////////

We built a prototype of an application that let the user search for a movie and get some information about it. This application has to be simple but can potentially scale as a mid-range project in the future.

We just received the design from the graphic designer and it needs to be implemented.

How would you refactor this application using your own methods and workflow?
How would you implement the design?

The features of the app:
- Search for movies using the API http://www.omdbapi.com/
- Display a list of results
- Sort the results
- Let the user click and have more informations about a movie

We just want to have a taste of your way of working with design and code!

Happy coding!

