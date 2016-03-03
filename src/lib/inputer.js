/**
 * Created by shaunwest on 11/27/15.
 *
 * FIXME: the event loop shouldn't rely on the update()
 * function. It can just make a call to get "values" when
 * it needs the information.
 * So... return a getValues() function or something.
 * The update() function could still be optional though
 *
 */

import { point } from './util/geom.js';

export default function Inputer(targetElement, update = function() {}) {
  const values = {
    isPressed: false,
    isActive: false,
    position: null,
    initialPressPosition: null,
    lastPosition: null
  };

  //const getPosition = (x, y) => (translator) ? translator(x, y, targetElement) : point(x, y);

  // PRESS
  targetElement.addEventListener('mousedown', event => {
    values.isActive = true;
    values.position = values.initialPressPosition = point(event.clientX, event.clientY);
    values.isPressed = true;
    update(values);
  });

  // RELEASE
  targetElement.addEventListener('mouseup', event => {
    values.isActive = true;
    values.position = point(event.clientX, event.clientY);
    values.isPressed = false;
    update(values);
  });

  // OUT
  targetElement.addEventListener('mouseout', event => {
    values.isActive = false; 
    values.position = point(event.clientX, event.clientY);
    //values.isPressed = false;
    update(values);
  });

  // DRAG && HOVER OVER
  targetElement.addEventListener('mousemove', event => {
    const mouseLocation = point(event.clientX, event.clientY);
    values.isActive = true;
    values.lastPosition = (values.position || mouseLocation);
    values.position = mouseLocation;
    update(values);
  });

  return () => values;
}
