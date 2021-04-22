## Inspiration:

https://github.com/renproject/bridge
https://www.figma.com/file/FZX4Lg2lk9LRjFFQEY7jIR/Handcuffs?node-id=40%3A2

#### todo:

- fix rough styling on form
- make it possible to move between the form with forward/back buttons

#### lower priority:

- add theme support

#### done:

- get storybook working
- get global styled integrated into storybook
- create story for vault card
- use the reusable typography
- create the shield in 'Vault Created'
- create 'Vault Created' header component
- stitch shit up into a 'Vault Created' page
- create placeholder for 'My Vaults' page
- move out the navigation stuff & reuse
- create success page shield
- use the shared button on the Landing page
- use the shared typography on the landing page
- create a little nav helper that uses pos absolute
  - allow it to drag
  - fix the min page height issue
- create header for my vaults page
- integrate progress bar percentages via context
- add the nav logo & link back to landing page
- create placeholder for table component
- un-hardcode the devtools list & place in obj instead
- Add the favicon
- make it so that stage 1 navigation button (back) is disabled
- fix beneficiary radio buttons
- fix styling on the form navigation buttons

- create connected wallet mechanism
  - create Web3ReactProvider instantiation -> pass in a ethers.js provider
  - create a component that houses web3 connection logic
  - add Web3ReactProvider to root of application
  - add an 'x' at the top of the dialog
  - close modal on overlay click
  - import material UI modal
  - set up styled-component override for material UI
  - create connect wallet modal
  - create connect wallet modal story
  - conditionally render 'connect wallet' or connected state based on connection state
  - when clicking connect, render the wallet connect modal
  - implement connect
  - implement disconnect
  - add capability to disconnect fully from metamask; isEagerConnectDisabled
