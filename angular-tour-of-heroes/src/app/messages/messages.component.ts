import { Component, OnInit } from '@angular/core';
import { MessageService } from "../message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /**
   * 이 클래스의 역할은 다음과 같습니다.
   * 1. view버튼을 클릭하면 서비스로부터 값을 받아 내 변수에 보관
   * 2. 보관한 값을 화면에 ngFor를 사용하여 출력
   * @type {string[]}
   * @memberof MessagesComponent
   */
  messages: string[] = [];

  constructor(
    public messageService: MessageService
  ) { }

  ngOnInit() {
  }

  /**
   * 1. 서비스로부터 값을 받아 내 변수에 보관
   *
   * @memberof MessagesComponent
   */
  view() {
    this.messages = this.messageService.get();
  }
}
