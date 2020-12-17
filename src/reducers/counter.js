const counter = (state = 0, action) => {
  switch (action.type) {
    case "Increment":
      return state + action.num;
    case "Decrement":
      return state - action.num;
    default:
      return state;
  }
};

export default counter;
