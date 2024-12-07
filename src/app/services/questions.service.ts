import { Injectable } from '@angular/core';
import { Question } from '../feedback/questions';

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private questions: Question[] = [
    new Question('MP Metallicah'),
    new Question('Onko Jone "Cuck" Nikula ÄIJÄ?'),
    new Question('How Meganen is Dave'),
  ];

  // This method now returns the questions array
  getQuestions(): Question[] {
    return [...this.questions];
  }
}