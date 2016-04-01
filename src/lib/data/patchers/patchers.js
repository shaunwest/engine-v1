import loopPatcher from './loop';
import viewportPatcher from './viewport';
import frameTable from './frame-table';
import scenePatcher from './scene';
import inputPatcher from './input';
import layersPatcher from './layers';
import tileSheetsPatcher from './tile-sheets';
import animationsPatcher from './animations';

export default () => {
  loopPatcher();
  viewportPatcher();
  inputPatcher();
  animationsPatcher();
  frameTable();
  scenePatcher();
  layersPatcher();
  tileSheetsPatcher();
};
