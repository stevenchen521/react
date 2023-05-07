const state = {
  action: "state1",
  value: 1,
};

// ✅ This is safe, because we made a copy
function newState() {
  return {
    ...state,
    value: 123,
  };
}

console.log(newState());
