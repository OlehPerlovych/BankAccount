export const names = ['Hapoalim', 'Leumi', 'Discont'];
export const getRandomIndex = () => Math.trunc(Math.random()* names.length);
export const getBank = index => ({name : names[index]});
