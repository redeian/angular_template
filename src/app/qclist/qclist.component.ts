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
  video_id = 'NUzJ0KUvHDc';

  constructor(private data: DataService, private embedService: EmbedVideoService) {
    this.embed(0);
  }

  ngOnInit() {
    this.data.getList(data => {
      this.quotes = data;
    });
  }

  embed(startTime) {
    this.iFrameVideo = this.embedService.embed_youtube(this.video_id, {
      query: { start: startTime },
      attr: {
        width: '100%',
        height: 250,
        allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
      }
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
