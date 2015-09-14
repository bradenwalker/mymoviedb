# Coding Challenge

## Objective

Create a webpage that manages a home movie collection.

## User Stories

- As a user I want to use the app in the latest version of Chrome.
- As a user I want to be able to enter new movies.
- As a user I want to be able to search existing movies by an arbitrary field.
- As a user I want to be able to see a list of all my movies.
- As a user I want to be able to either DELETE a movie or UPDATE a movie.
  (You must implement at least one.)
- As a user I want to record the following info about any given movie :
  - Genre
  - Actors
  - Title
  - Year
  - Rating

## Technical Requirements

- The page MUST be a single page application (though may have multiple routes and templates).
- The page MUST use ReactJS.
- The page MUST have at least 1 custom React element.
- You MUST use one-way dataflow. Instead of Flux, implement the store
  using a stream library like BaconJS
- You MUST use local storage BUT coded in a way that can be easily swapped out for
  database storage (via a REST endpoint)
- You MUST use git for version control.
- Bonus points:
  - lodash.js or underscore.js
  - bootstrap.css or equivalent
  - whatever unit tests you feel are appropriate.

You MAY use other publicly available JS components (please document separately any frameworks that you choose to use other than the ones listed here).

## Tips
- If you're using JQuery, you're doing it wrong.

## Additional Comments

- When you start the challenge, please commit a file to the git repo named "started" with the content being the current date/time.
- Use what you believe to be best practices when developing the page. You will be judged on both the function and the form of your code.
- When you finish, create a git bundle( git bundle create code_challenge.bdl --all).
- Email that bundle to the person who sent you this coding challenge or host it on dropbox and email the link to download it.
