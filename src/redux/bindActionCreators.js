export default function (actions, dispatch) {
  let newActions = {};
  for (let key in actions) {
    if(actions.hasOwnProperty(key)) {
      newActions[key] = (...rest) => dispatch(actions[key](...rest));
    }
  }
  return newActions;
}