import { Component, OnInit } from '@angular/core';
import { RestAPIService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  private posts: any;
  constructor(private api: RestAPIService) { }

  ngOnInit() {
    this.getPosts()
  }


  getPosts() {
    this.api.getPosts().subscribe(data => {
      this.posts = data
    })
  }

}
