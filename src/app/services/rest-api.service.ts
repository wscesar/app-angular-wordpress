import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { WindowService } from './window.service'

@Injectable()
export class RestAPIService {

  private api_url: any;

  constructor(private win: WindowService, private http: HttpClient) {
    this.api_url = (this.win.nativeWindow.api_setting) ? this.win.nativeWindow.api_settings.root + 'wp/v2/' : 'http://localhost/wordpress/wp-json/wp/v2/';
  }
  
  getPosts() {
    return this.http.get( this.api_url + 'posts' )
  }

  getPost( post_id ) {
    return this.http.get( this.api_url + 'posts/' + post_id )
  }

  getPage ( page_id ) {
    return this.http.get( this.api_url + 'pages/' + page_id )
  }
}
