
// viewport: determines what to get from background grid and sprite grid
// background grid (1d -> 2d): cells represent tile references
// sprite grid (1d -> 2d): cells are approx. half screen, reference sprites
// pool
// input
// draw

// FlatGrid = 2d data represented as 1d (preferrably Int8Array)

const spriteGrid = [[0, 1, 0], [1, 2, 0]];
const spriteObjects = {
  0: {},
  1: {},
  2: {}
};
const spriteRadius = {x: 1, y: 1};
const viewport = {x: 0, y: 0, width: 400, height: 500};
const backgroundGrid = [0, 1, 2, 1, 3];
const getArray = ArrayPool();
const getObject = ObjectPool();

// Rect, FlatGrid -> FlatGrid
const subFlatGrid = ({x, y, width, height}, flatGrid, {x as xRadius = 0, y as yRadius = 0}) => {
  // non-functional
}

// Number, Object -> SpriteEntity
const spriteEntityFromId = (id, spriteEntities) => {} 

// FlatGrid -> FlatGrid 
const spriteEntitiesFromIds = (spriteStore, spriteGrid) => {
  const newSpriteGrid = getArray();
  for (let i = spriteGrid.length; i--) {
    newSpriteGrid[i] = mapId2SpriteEntity(spriteGrid[i]);
  }
  return newSpriteGrid;
}

const sprites = () => 
  return spriteEntitiesFromIds(subFlatGrid(viewport, spriteGrid, spriteRadius));

function sprite() {
}


function backgrounds() {}
function background() {}



const activeTileGrid = subFlatGrid(viewport, backgroundGrid);
const  = mapTiles(tileStore, activeTileGrid);






// only runs 60 times/sec max
gameLoop();
