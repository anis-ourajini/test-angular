import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss']
})
export class ReadMoreComponent implements OnInit {

  @Input() content: string;
  @Input() limit: number;

  isContentToggled: boolean;
  nonEditedContent: string;

  constructor() {

  }

  ngOnInit() {
    this.nonEditedContent = this.content;
    this.content = this.formatContent(this.content);
  }

  toggleContent() {
    this.isContentToggled = !this.isContentToggled;
    this.content = this.isContentToggled ? this.nonEditedContent : this.formatContent(this.content);
  }

  formatContent(content: string) {
    return `${content.substr(0, content.substr(0, this.limit).lastIndexOf(' '))}`;
  }

}
