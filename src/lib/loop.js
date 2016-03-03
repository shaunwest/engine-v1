import Rx from 'rx-dom';

export default function Loop() {
  return Rx.Observable.generate(
    0,
    x => true,
    x => x + 1,
    x => x,
    Rx.Scheduler.requestAnimationFrame
  );
}
