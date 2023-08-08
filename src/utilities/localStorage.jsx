export const loadFromLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};

export const saveToLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
