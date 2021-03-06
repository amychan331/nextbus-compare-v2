# Nextbus Compare - Version 2
### Hosted at http://nextbus-compare.herokuapp.com/

## What It Does:
Using the 511 SF Bay API, Nextbus Compare uses station stop code input by user to displays data regarding the public transit that stops there and corresponding arrival time. The application can display up 3 stations under the services of SF Muni, Bart and Caltrain. In addition, user can remove that station as needed.

## Why Transit App?
Most public transit application uses geolocation. I wanted to make one that 1) uses input station code instead and 2) allows comparison of station data. Geolocation is useful if you are at the station, but less so if I am planning the trip in advance away from a station point. Also, many of those transit uses what they consider the best route. As a native San Franciscan, there are certain route patterns that I feel is better due to my local knowledge - construction, accidents, safety concerns, less frequent but faster limit bus, ancient roads so bumpy I feel like my internals are going to bump right out (painful personal experience here......), etc.

Overall, I want to be able to input station code and get all the buses that stops - no geolocations required. I also want to compare them on one single screen.

## Why Version 2?
Version 1 was my first attempt of using only React. For the second version, I want:
* State management with Redux: I want the ability to control state so I can easily add and remove data without passing props too much.
* Testing with Mocha: I want to try out unit/integration testing. I decided to go with Mocha and Chai.
* Better Accessibility: With JavaScript features, there are typically async loading and dynamic interactions. In this case, I have a form with loading spinner, error messages, and async loaded data from the public transit API. For those, I would need to implement accessibility features to alert users when the screen changes.
* .......Also cause I really want to play with Redux and try out testing.

## Technology:
* React
* Redux
* Mocha with Chai
* Semantic HTML5 & CSS3
* Use of JSON API
* Fontello for social media icons
* Responsive Design
* Accessibility Features

## Image:
Desktop full site view with both error message and data output:<br />
<kbd>![Desktop view](https://github.com/amychan331/nextbus-compare-v2/blob/master/public/assets/images/full-site-error-and-data-output.png)</kbd>

Error for reaching 3 input limits:<br />
<kbd>![Error message](https://github.com/amychan331/nextbus-compare-v2/blob/master/public/assets/images/error-reach-limit.png)</kbd>

Responsive mobile view with mulitple inputs:
<div align="center">
  <img alt="Responsive mobile view" src="https://github.com/amychan331/nextbus-compare-v2/blob/master/public/assets/images/responsive-mobile-view.png" />
  <br />
  Responsive mobile view
</div>

## Installation
```
git clone git@github.com:amychan331/nextbus-compare-v2.git
```
```
cd nextbus-compare-v2
```
```
npm install
```
Get an API token from https://511.org/developers/list/tokens/create.

Create .env.local file with the content of "REACT_APP_API_KEY=[the 511 API token you just got]".

Use npm start to test it out locally, or npm run build to create the build package.
