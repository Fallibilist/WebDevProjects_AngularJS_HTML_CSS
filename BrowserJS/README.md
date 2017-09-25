SPA Assignment 2
===

Basic Browser JavaScript
---
In this assignment, you are given an HTML file and linked, but blank, CSS and JavaScript files. You will write CSS, HTML, and primarily JavaScript to turn the basic layout you designed in the previous assignment into a fully-fledged incremental game.

### Tasks
Before you start, you should copy the CSS you wrote for the first assignment into this one. You should also check to see if you need to update the provided HTML with any changes you made to the HTML in the previous assignment, as well.

You will also need to add jQuery and (optionally) normalize.css to the given `index.html` file.

#### Basic Gameplay
Add a click listener to the center button that increments the player's total by the amount shown on the button. Make sure that the total displayed in the header is updated accordingly.

#### Multipliers
Add another circular button to the app, this time centered in the left sidebar. It should display the text `*1.2`. This number is the multiplier, and when this button is clicked, the amount by which the center button increases the total should be scaled by this multiplier.

For example, if the center button reads `+1`, every time it is clicked, it adds 1 to the total. If the multiplier button reads `*1.2` and it is clicked, and the center button should read `+1.2`, because `1 * 1.2 = 1.2` . If the multiplier button is clicked again, the center button should read `+1.44`, because `1.2 * 1.2 = 1.44`, and so forth.

Since multipliers make the center button much more powerful, they shouldn't be freely available. Implement a cost of `10` points per multiplier application, and display this cost with a label in the left sidebar. If the player's current total is less than the cost, the button should be greyed-out and clicking it should have no effect. If the player's total is greater than the cost, the button should return to its active state and allow clicks, although every click of the button should subtract the cost from the player's total, as well.

#### Autoclickers
Add another circular button to the app, this time centered in the right sidebar. It should display the text `+1`. This button allows the player to add autoclickers, and each click of this button should trigger an automated click of the center button once every second, forever.

Autoclickers don't provide much visual feedback, so add a label to the right sidebar that displays the total number of autoclickers added so far.

Autoclickers are at least as powerful as multipliers, and they shouldn't be freely available, either. Implement a cost of `100` points per autoclicker, and display this cost with a label in the right sidebar. If the player's current total is less than the cost, the button should be greyed-out and clicking it should have no effect. If the player's total is greater than the cost, the button should return to its active state and allow clicks, although every click of the button should subtract the cost from the player's total, as well.
b
#### Save Data
Now that the game has more depth, we want the player to be able to maintain previous progress. Investigate the browser apis for local & session storage as well as cookies, and choose one method to implement auto-save functionality.

When a player leaves the page and comes back, all progress that player has made should be reflected in the app.

Think about what state you need to save, when you should load saved state, and when you should save it.

#### Reset
Of course, automatically saving progress makes it difficult to test the app and for players to start from scratch. Add a reset button to the header which, when clicked, resets all internal state to its initial value and clears all local, session, or cookie storage, depending on the method chosen.

If the current game state matches the initial state, the reset button should be disabled.

### Milestones
- [ ] Basic gameplay
  - [ ] When the center button is clicked, the player's total is incremented by the amount shown on the button
  - [ ] The total displayed in the header updates automatically
- [ ] Multipliers
  - [ ] Multiplier button added to left side bar
  - [ ] Cost label added to left side bar
  - [ ] Disabled when cost exceeds player total
  - [ ] When clicked and not disabled updates the center button and player total accordingly
- [ ] Autoclickers
  - [ ] Autoclicker button added to right side bar
  - [ ] Autoclicker total label added to right side bar
  - [ ] Cost label added to right side bar
  - [ ] Disabled when cost exceeds player total
  - [ ] When clicked and not disabled updates the player and autoclicker totals and triggers a new autoclicker accordingly
- [ ] Save Data
  - [ ] Automatically saves application state to local, session, or cookie storage
  - [ ] Automatically loads application state on page load if data exists
- [ ] Reset
  - [ ] Reset button added to header
  - [ ] Disabled when game state matches initial
  - [ ] When clicked and not disabled, resets game state to initial values and clears session, local, or cookie storage
