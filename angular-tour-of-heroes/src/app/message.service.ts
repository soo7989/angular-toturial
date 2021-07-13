import { Injectable } from '@angular/core';

/**
 * message에서 구현하신 기능이 과제에서 필요한 기능들로 보입니다.
 * 과제에서 service의 기능을 구분하면 다음과 같습니다.
 * 1. 값을 받아와서 내가 가진 배열 변수에 추가.
 * 2. 배열 변수에 담긴 값을 리턴.
 * @export
 * @class MessageService
 */
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];


  /**
   * 1. 값을 받아와서 내가 가진 배열 변수에 추가
   *
   * @param {string} message
   * @memberof MessageService
   */
  add(message: string) {
    this.messages.push(message);
  }

  /**
   * 2. 배열 변수에 담긴 값을 리턴
   *
   * @return {*}
   * @memberof MessageService
   */
  get() {
    return this.messages;
  }
  clear() {
    this.messages = [];
  }

}
