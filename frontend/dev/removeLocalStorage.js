export default removeLocalStorage = () => {
  // List of old data keys
  const oldDataKeys = ['AUTH', 'Cart'];

  // Remove each item
  oldDataKeys.forEach(key => {
    localStorage.removeItem(key);
  });

  console.log('Old data removed from local storage.');
};
