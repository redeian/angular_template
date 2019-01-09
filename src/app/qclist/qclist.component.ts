import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-qclist',
  templateUrl: './qclist.component.html',
  styleUrls: ['./qclist.component.css']
})
export class QclistComponent implements OnInit {
  quotes = [];

  iFrameVideo: any;
  video_url = 'https://www.youtube.com/watch?v=NUzJ0KUvHDc';

  constructor(private data: DataService, private embedService: EmbedVideoService) {
    this.iFrameVideo = this.embedService.embed(this.video_url, {
      attr: { width: '100%', height: 250 }
    });
  }

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
