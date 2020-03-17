import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

   laws: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getYoutube();
  }

  getYoutube() {
    const url = 'http://localhost:3000/laws';
    this.http.get(url).subscribe((data) => {
      this.laws = data;
      console.log('data', this.laws);
  });
  }
}
