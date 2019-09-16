import * as PIXI from 'pixi.js';
import { OldFilmFilter } from 'pixi-filters';

const app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x333333,
  resolution: window.devicePixelRatio || 1,
});
document.getElementById('canvas').appendChild(app.view);

app.loader.add('image', 'images/img_stars.jpg').load((loader, resources) => {
  const image = new PIXI.Sprite(resources.image.texture);
  app.stage.addChild(image);

  let f = new OldFilmFilter();
  f.noise = .4;
  f.scratch = .6;
  image.filters = [f];
});
