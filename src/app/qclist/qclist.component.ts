import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-qclist',
  templateUrl: './qclist.component.html',
  styleUrls: ['./qclist.component.css']
})
export class QclistComponent implements OnInit {
  constructor(private data: DataService) {}

  quotes = [];

  ngOnInit() {
    this.data.getList(data => {
      this.quotes = data;
    });
  }
}
