import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qclist',
  templateUrl: './qclist.component.html',
  styleUrls: ['./qclist.component.css']
})
export class QclistComponent implements OnInit {
  quotes = [];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getList(data => {
      this.quotes = data;
    });
  }

  share(shareText) {
    if ('share' in navigator) {
      (navigator as any)
        .share({ title: 'Quote Share', text: shareText, url: window.location.href })
        .then(() => console.log('shared'))
        .catch(() => console.log('Error sharing'));
    } else {
      const shareURL = `https://www.facebook.com/sharer/sharer.php?u=${shareText}`;
      location.href = shareURL;
    }
  }
}
