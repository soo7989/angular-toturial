import { MessageService } from './message.service';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

/**
 * 과제 1주차를 기준으로 AppComponent역할은 다음과 같습니다.
 * 1. input을 받음
 * 2. add 버튼을 누르면 input에서 받은 값을 자식 component와 service에 전달합니다.
 * @export
 * @class AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';

  // 2번 케이스의 input값을 service에 전달하기 위해 연결
  constructor(private messageService: MessageService) {}

  // 1. input을 받음.
  heroControl = new FormControl();
  // input으로 입력 받은 값
  heroList: string[] = [];

  /**
   * 2. add 버튼을 누르면 input에서 받은 값을 자식 component와 service에 전달합니다.
   * 이 이벤트는 버튼의 click 이벤트로부터 호출됩니다.
   * @memberof AppComponent
   */
  add() {
    // 자식 component에 전달하기 위해 변수에 담음.
    this.heroList.push(this.heroControl.value);
    // service에 전달
    this.messageService.add(this.heroControl.value);
  }
}
