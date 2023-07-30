// Choose a random item frrom array

const choice = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
};

// return copy of array without first appearance of item
// ****if not found return undefined

const remove = (item, items) => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
};

export { choice, remove };
