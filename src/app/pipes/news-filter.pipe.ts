import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsFilter'
})
export class NewsFilterPipe implements PipeTransform {
  transform(newsList: any[], searchText: string): any[] {
    if (!newsList || !searchText) {
      return newsList; 
    }
    searchText = searchText.toLowerCase();
    return newsList.filter(news =>
      news.Title.toLowerCase().includes(searchText)
    );
  }
}