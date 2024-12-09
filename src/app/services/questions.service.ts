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
// returns Questions array
  getQuestions(): Question[] {
    return [...this.questions];
  }
}