// S => State
// T => Type
// K => Key
// V => Value
// E => Element

function useState<S extends number | string = string>() {
  // We can get number and string, and the default value is string
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
    ("1");
  }

  return { getState, setState };
}

const newState = useState();
// newState.setState(123);

console.log(newState.getState());
newState.setState("123");
