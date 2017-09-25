SPA Assignment 4
===

Routes and Services
---


### Tasks


### Milestones
- [ ] Updated existing functionality with routing
  - [ ] Login ui moved to `/login` route
  - [ ] Game ui moved to `/game` route
  - [ ] If no user is logged in, `/login` is the only allowed route
  - [ ] If a user is logged in, `/login` is no longer allowed as a route
  - [ ] `/game` is the default route
  - [ ] Configured the `<base/>` element in the `index.html` file to support the HTML5 location api
- [ ] Game configuration
  - [ ] Added `/config` route
  - [ ] Config ui allows real-time editing of the game's parameters
    - [ ] Core parameters
      - [ ] Base click amount
      - [ ] Starting total
    - [ ] Multiplier parameters
      - [ ] Base multiplier amount
      - [ ] Base multiplier cost
      - [ ] Multiplier scaling factors
      - [ ] Multiplier cost scaling factors
    - [ ] Autoclicker parameters
      - [ ] Autoclicker interval
      - [ ] Base autoclicker cost
      - [ ] Autoclicker cost scaling factors
- [ ] Save management
  - [ ] Removed reset button from game ui
  - [ ] Added `/saves` route
  - [ ] Save ui allows for management of named and automatic save states
    - [ ] Added save button
    - [ ] Added save name input field
    - [ ] When save button is clicked, a new save is created with the given name
    - [ ] Added "Reset All" button
      - [ ] When clicked, deletes all saves associated with the current user
    - [ ] Added list of save states
      - [ ] First save state is the automatically-generated one
      - [ ] The rest are manually-created save states, in reverse chronological order
      - [ ] All entries include the name of the save and the when it was created
      - [ ] All entries include a load button
        - [ ] When clicked, loads the associated state
      - [ ] All entries include a delete button
        - [ ] When clicked, deletes the associate state
