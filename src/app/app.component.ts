import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tubular';
  
  ngOnInit() {
    this.getData();
  }

  showData(data: any) {
    console.log(data);
  }

  getData = async () => {
    const data = await this.apiFetch('https://tubular-backend.herokuapp.com/profiles');
    this.showData(data);
  }

  async apiFetch(url: any) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

}
