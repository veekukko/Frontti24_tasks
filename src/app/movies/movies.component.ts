import { Component, OnInit } from '@angular/core';
import { FinnkinoService } from '../services/finnkino.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  combinedData: any[] = []; // Combined list of news and movies
  searchText: string = ''; // Used for the search filter

  constructor(private finnkinoService: FinnkinoService) {}

  ngOnInit() {
    this.finnkinoService.fetchData('News/').subscribe((data) => {
      this.combinedData = data.News.NewsArticle.map((article: any) => ({
        Title: article.Title || 'No title available',
        Date: article.PublishDate ? new Date(article.PublishDate) : null,
        Body: article.HTMLLead || 'No description available',
        showMoreInfo: false, // Hide whole body
      }));
    });
  }


  toggleMoreInfo(item: any): void {
    item.showMoreInfo = !item.showMoreInfo; // More info toggle
  }
}
