import loopPatcher from './loop';
import frameTable from './frame-table';
import scenePatcher from './scene';
import inputPatcher from './input';
import layersPatcher from './layers';
import tileSheetsPatcher from './tile-sheets';
import animationsPatcher from './animations';

export default () => {
  loopPatcher();
  inputPatcher();
  animationsPatcher();
  frameTable();
  scenePatcher();
  layersPatcher();
  tileSheetsPatcher();
};
