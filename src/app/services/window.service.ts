import { Injectable } from '@angular/core';

function  __window(): any{
  return window;
}

@Injectable()
export class WindowService {

  constructor() { }
  get nativeWindow(): any{
    return __window();
  }
}
