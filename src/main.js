import $ from 'jquery';
import storeState from "./js/store-state.js";
import changeState from "./js/change-state.js";

$(document).ready(function() {

  const stateControl = storeState();

  // We create four functions using our function factory. We could easily create many more.

  const feed = changeState("soil")(1);
  const blueFood = changeState("soil")(5);

  const hydrate = changeState("water")(1);
  const superWater = changeState("water")(5);


  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect. Note that we only use one of our functions to alter soil. You can easily add more.

  $('#feed').click(function() {
    console.log(
      'cats'
    );
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });

  // This function doesn't actually do anything useful in this application - it just demonstrates how we can "look" at the current state (which the DOM is holding anyway). However, students often do need the ability to see the current state without changing it so it's included here for reference.

  $('#show-state').click(function() {
    // We just need to call stateControl() without arguments to see our current state.
    const currentState = stateControl();
    $('#soil-value').text(`Soil: ${currentState.soil}`);
  });

});