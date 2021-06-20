# The movie Database

A place where you can browse through and search for your favourite movies, TV shows.

## Project Screenshot

![Landing screen](images/photo1.PNG)
![Movie detail](images/photo2.PNG)

## Installation and Setup Instructions

Clone down this repository. You will need node and npm installed globally on your machine.

Installation:

`npm install`

To start the application in development mode:

`npm start`

To build the app for production

`npm run build`

## Technologies Used

- React
- Redux
- Sass
- <a href="https://developers.themoviedb.org/3">TMDB API</a>
- <a href="https://github.com/downshift-js/downshift">Downshift</a>
- <a href="https://github.com/axios/axios">Axios</a>
- <a href="https://github.com/cferdinandi/smooth-scroll">Smooth Scroll</a>

## Reflection

This was a one-month-long project I built right after I finished learning about React and Redux. The project's primary goal was to familiarize myself with the development process of an application using React and Redux. Another goal was to learn how to implement using information coming from a public API.

At first, I wanted to build a Netflix clone that looked and felt exactly like Netflix. However, as I was developing it, I thought to myself, "Why don't I make it original so that I can practice my design skill as well?". That was when I planned out how I researched and designed the project, then coded it from the design. In the end, I was pretty satisfied with the design, especially the design of the movie detail page.

One of the main challenges I ran into was Deployment. At first, I deployed the website to `Heroku`. However, I ran into an issue when I tested the search functionality. For some reason, the TMDB searching route was in `http`, while my website on `Heroku` was `https`, and it was not possible to make a request using `http` protocol from a `https` website. I spent a few days researching on this topic and ended up deploying the website to `Digital Ocean`, then bought a custom domain and served the website using `http`.

Another challenge was implementing the searching functionality. I used <a href="https://github.com/downshift-js/downshift">Downshift</a> for the autocomplete search box. It was quite simple to implement the feature with the library. However, I ran into a performance issue when the search box fired a request on every character typed into it. This led me to look for a way to limit the number of API calls fired. That was when I came across the concept of debounce, and then later applied it using the <a href="https://lodash.com/">Lodash</a> library.
