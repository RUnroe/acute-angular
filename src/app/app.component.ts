import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private apiService: ApiService) {
    document.addEventListener("DOMContentLoaded", this.setEventListeners);
  }

  title = 'acute-part-one';
  totalList;
  results;

  ngOnInit(): void {
    this.apiService.getusers().subscribe((data) => {
      this.totalList = data['results'];
      this.results = this.totalList;
    });
  }

  setEventListeners = () => {
    document.getElementById("searchByNameInput").addEventListener("input", this.filterResults);
    document.getElementById("noResultsText").style.visibility = "hidden";

  }

  filterResults = () => {
    this.results = [];
    for(let i = 0; i < this.totalList.length; i++) {
      let firstName = this.totalList[i].name.first.toLowerCase();
      let lastName = this.totalList[i].name.last.toLowerCase();
      if(firstName.includes( (<HTMLInputElement>document.getElementById("searchByNameInput")).value.toLowerCase() )) {
        this.results.push(this.totalList[i]);
      }
      else if(lastName.includes( (<HTMLInputElement>document.getElementById("searchByNameInput")).value.toLowerCase() )) {
        this.results.push(this.totalList[i]);
      }
    }
    if(this.results.length > 0){
      document.getElementById("noResultsText").style.visibility = "hidden";
    }
    else {
      document.getElementById("noResultsText").style.visibility = "";
    }
  }

}
