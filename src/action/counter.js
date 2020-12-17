export function increment(num) {
  return {
    type: "Increment",
    num
  };
}

export function decrement(num) {
  return {
    type: "Decrement",
    num
  };
}
