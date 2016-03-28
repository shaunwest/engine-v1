import loopPatcher from './loop';
import frameTable from './frame-table';
import levelPatcher from './level';
import inputPatcher from './input';
import tileSheetsPatcher from './tile-sheets';
import animationsPatcher from './animations';

export default () => {
  loopPatcher();
  inputPatcher();
  animationsPatcher();
  frameTable();
  levelPatcher();
  tileSheetsPatcher();
};
