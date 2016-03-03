import Rx from 'rx';


export default function Input(targetElement) {
  return Rx.Observable.fromEvent(targetElement, 'mousemove')
    .flatMapObserver((mouseEvent) => {
      return Rx.Observable.fromEvent(document, 'keydown')
        .map((keyEvent) => {
          return [mouseEvent, keyEvent]; 
        });
    });
}
