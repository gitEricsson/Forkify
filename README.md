# Jonas Schmedtmann - Forkify

## Table of contents

- [Overview](#overview)
  - [About](#about)
  - [The Challenge](#the-challenge)
  - [Features](#features)
  - [Updates](#updates)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### About

Forkify is a recipe web app that lets users search, read, edit, bookmark, and upload recipes using the [Forkify API](https://forkify-api.herokuapp.com/v2).

### The Challenge

My goal was to recreate Jonas' Forkify WebApp from scratch and make some updates to it. It was especially taxing having to produce the HTML, SASS and JS code for the update, which in turn meant having to brainstorm the business, application and presentation logic of it's architecture. Nonetheless, it was altogether Insightful.

### Features

- Search functionality: input field to send request to API with search keywords
- Display results with pagination
- Display recipe with cooking time, servings and ingredients
- Change servings functionality: update all ingredients according to
  current number of servings
- Bookmarking functionality: display list of all bookmarked recipes
- User can upload own recipes
- User recipes will automatically be bookmarked
- User can only see their own recipes, not recipes from other users
- Store bookmark data in the browser using local storage
- On page load, read saved bookmarks from local storage and display

### Updates

- Responsive Web design across all devices
- Display number of pages between the pagination buttons
- Ability to sort search results by duration or number of ingredients
- Perform ingredient validation in view, before submitting the form
- Improve recipe ingredient input: separate in multiple fields and allow more than 6 ingredients
- Shopping list feature: button on recipe to add ingredients to a list
- Weekly meal planning feature: assign recipes to the next 7 days and show on a weekly calendar
- Get nutrition data on each ingredient from [Nutritionix API](https://www.nutritionix.com/business/api) and calculate total calories of recipe

### Links

- Solution URL: [Github Repo here](https://github.com/gitEricsson/Forkify)
- Live Site URL: [Live site here](https://ericsson-forkify.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript
- MVC Architecture
- AJAX
- API
- Parcel
- Babel

## Author

- Website - [Ericsson Raphael](https://github.com/gitEricsson)
- LinkedIn - [@ericsson](www.linkedin.com/in/ericssonraphael)
- Gmail - [@ericsson](ericssonraphael@gmail.com)

## Acknowledgments

[Jonas Schmedtmann](https://github.com/jonasschmedtmann)
