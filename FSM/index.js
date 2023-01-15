function createMachine(stateMachineDefinition) {
  const machine = {
    value: stateMachineDefinition.initialState,
    transition(currentState, event) {
      const currentStateDefinition = stateMachineDefinition[currentState];
      const destinationTransition = currentStateDefinition.transitions[event];
      if (!destinationTransition) {
        return;
      }
      const destinationState = destinationTransition.target;
      const destinationStateDefinition =
        stateMachineDefinition[destinationState];

      destinationTransition.action();

      machine.value = destinationState;

      return machine.value;
    },
  };
  return machine;
}

const machine = createMachine({
  initialState: "off",
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
