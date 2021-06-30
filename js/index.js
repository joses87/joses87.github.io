//import Phaser from './phaser.js';



import PlayScene from './scenes/PlayScene.js';
import MenuScene from './scenes/MenuScene.js';
import PreloadScene from './scenes/PreloadScene.js';
import ScoreScene from './scenes/ScoreScene.js';
import PauseScene from './scenes/PauseScene.js';

const WIDTH = 360;
const HEIGHT = 520;
const BIRD_POSITION = {  x : WIDTH * 0.1, y: HEIGHT / 2 }

const SHARED_CONFIG = {
  width: WIDTH,
  height: HEIGHT,
  startPosition: BIRD_POSITION
}

const Scenes = [PreloadScene, MenuScene, ScoreScene, PlayScene, PauseScene  ];
const createScene = Scene => new Scene(SHARED_CONFIG)
const initScenes = ()=> Scenes.map(createScene);

const config = {
  type: Phaser.AUTO, //WebGL (Web Graphics Library)
  ...SHARED_CONFIG,
  pixelArt: true,
  physics: {
    default: 'arcade',     //Arcade Physics plugin - manages physics simulation
    arcade: {
      // gravity: { y: 400 },
    //   debug: true
    }
  },
  scene: initScenes()
}

new Phaser.Game(config);