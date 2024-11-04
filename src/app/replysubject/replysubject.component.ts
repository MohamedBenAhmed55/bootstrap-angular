import { Component, destroyPlatform, OnInit } from '@angular/core';
import { DesignUtilityService } from '../design-utility.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-replysubject',
  templateUrl: './replysubject.component.html',
  styleUrl: './replysubject.component.css',
})
export class ReplysubjectComponent implements OnInit {
  constructor(private designUtility: DesignUtilityService) {}
  adminList = ['Angular1', 'Angular2'];
  user1List: string[] = [];
  user2List: string[] = [];
  user1Mode: boolean = false;
  user2Mode: boolean = false;
  user1Subscription: Subscription = new Subscription();
  user2Subscription: Subscription = new Subscription();
  ngOnInit(): void {
    this.designUtility.blog.subscribe((res) => {
      console.log(res);
      this.adminList.push(res);
    });
  }

  onChange(addBlog: string) {
    // console.log(addBlog);
    this.designUtility.blog.next(addBlog);
  }
  user1sub() {
    if (this.user1Mode) {
      this.user1Subscription.unsubscribe();
    } else {
      this.user1Subscription = this.designUtility.blog.subscribe((res) => {
        this.user1List.push(res);
      });
    }

    this.user1Mode = !this.user1Mode;
  }

  user2sub() {
    if (this.user2Mode) {
      this.user2Subscription.unsubscribe();
    } else {
      this.user2Subscription = this.designUtility.blog.subscribe((res) => {
        this.user2List.push(res);
      });
    }

    this.user2Mode = !this.user2Mode;
  }
}
