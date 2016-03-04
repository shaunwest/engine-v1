// createPatcher()
export default () => {
  const undos = [], pointer = 0; // <- will need for redo

  return {
    patchValue: (dataRef, keyOrIndex, value) => {
      undos.push(dataRef, keyOrIndex, dataRef[keyOrIndex]);
      dataRef[keyOrIndex] = value;
    },
    undo: () => {
      const value = undos.pop(),
        keyOrIndex = undos.pop(),
        dataRef = undos.pop();
      
      dataRef[keyOrIndex] = value;   
    }
  };
};
