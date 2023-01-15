import React, { useEffect, useState } from "react";
import createMachine from "../fsm/fsm";
import { getInitialState } from "../api/api";
import {
  FlashLightWrapper,
  FlashLightBody,
  FlashLightNeck,
  FlashLightHead,
  StateChangeButton,
  FlashLightRay,
} from "./flashlight.style";

const FlashLight = () => {
  const [curState, setCurState] = useState("off");

  useEffect(() => {
    getInitialState()
      .then((res) => setCurState(res))
      .catch(() => setCurState("off"));
  }, []);

  const machine = createMachine({
    initialState: curState,
    off: {
      transitions: {
        switch: {
          target: "on",
          action() {
            console.log('transition action for "switch" in "off" state');
          },
        },
      },
    },
    on: {
      transitions: {
        switch: {
          target: "blink",
          action() {
            console.log('transition action for "switch" in "on" state');
          },
        },
      },
    },
    blink: {
      transitions: {
        switch: {
          target: "off",
          action() {
            console.log('transition action for "switch" in "blink" state');
          },
        },
      },
    },
  });

  const className = () => {
    switch (curState) {
      case "off":
        return "off";
      case "on":
        return "on";
      case "blink":
        return "blink";
      default:
        return "";
    }
  };

  return (
    <div data-testid="flashlight-1">
      <h1>A FSM flashlight</h1>
      <p>
        Currently the flashlight is in the following state:
        <span data-testid="flashlight-2">{curState}</span>
      </p>
      <FlashLightWrapper>
        <FlashLightRay className={className()} />
        <FlashLightHead />
        <FlashLightNeck />
        <FlashLightBody>
          <StateChangeButton
            className={className()}
            data-testid="flashlight-3"
            onClick={() => {
              machine.transition(machine.value, "switch");
              setCurState(machine.value);
            }}
          ></StateChangeButton>
        </FlashLightBody>
      </FlashLightWrapper>
    </div>
  );
};

export default FlashLight;
