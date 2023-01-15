# This is a demonstration of a FSM

This repo contains 3 folders, a server folder, a standalone demonstartion of a FSM and a client folder.

## server
This folder contains a very simple server which has only one route and which provides the initial state to the FSM in the client folder.

## FSM
This folder contains the standalone demo.

## client
This folder contains the main part of my assignment, it's a flashlight with 3 states:
    -off
    -on
    -blink

this flaslight gets its initial state from the server and hasv a fallback in case the server response is unavailable

the flashlight renders to the screen with a 'off' state

a button on the flashlight changes the state of the machine, and a ray of light is rendered (or not) depending on the state which is passed into a component definition in styled-components.

I used a css animation for the blinking effect and it's activated with a change in the className

I added unit tests and a snapshot test to the component, these tests validate all 3 states and the general cohesion of the flashlight

This was a very interesting project, and it provided me with the opprtunity to learn new things. 
Thank you for the opprtunity!