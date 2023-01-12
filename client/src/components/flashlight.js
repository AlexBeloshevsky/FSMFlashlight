import React, {useEffect, useState} from "react";
import createMachine from "../fsm/fsm";
import { getInitialState } from "../api/api";
import { RedSquare } from "./flashlight.style";

const FlashLight = () =>{
    const [curState, setCurState] = useState();

    useEffect(()=>{
        getInitialState().then(res => setCurState(res))
    },[])

    const machine = createMachine({
        initialState: curState || 'off',
        off: {
          transitions: {
            switch: {
              target: 'on',
              action() {
                console.log('transition action for "switch" in "off" state')
              },
            },
          },
        },
        on: {
          transitions: {
            switch: {
              target: 'blink',
              action() {
                console.log('transition action for "switch" in "on" state')
              },
            },
          },
        },
        blink: {
            transitions: {
              switch: {
                target: 'off',
                action() {
                  console.log('transition action for "switch" in "blink" state')
                },
              },
            },
          },
      })
    
    return (
        <>
        <RedSquare/>
        <div>{curState}</div>
        <button onClick={() => {
            machine.transition(machine.value, 'switch')
            setCurState(machine.value)
        }}>click</button>
        </>
    )
}

export default FlashLight
