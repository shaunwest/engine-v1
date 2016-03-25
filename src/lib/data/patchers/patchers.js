import loopPatcher from './loop';
import frameTable from './frame-table';
import levelPatcher from './level';
import tileSheetsPatcher from './tile-sheets';
import animationsPatcher from './animations';

export default () => {
  loopPatcher();
  animationsPatcher();
  frameTable();
  levelPatcher();
  tileSheetsPatcher();
};
