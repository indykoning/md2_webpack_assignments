
const giveRandom = (start, end)=>{
  return Math.ceil(Math.random()*(end-start) + start);
};

export {giveRandom};