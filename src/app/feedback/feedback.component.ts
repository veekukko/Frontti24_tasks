import { Component, OnInit } from '@angular/core';
import { Question } from './questions';
import { QuestionsService } from '../services/questions.service';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent implements OnInit {
  questions: Question[] = [];

  constructor(private questionsService: QuestionsService) {}

  ngOnInit(): void {
    this.questions = this.questionsService.getQuestions();
  }

  onSliderChange(question: Question, event: Event): void {
    const target = event.target as HTMLInputElement;
    const value = target?.value ? parseInt(target.value, 10) : 0;
    question.setFeedback(value);
  }

  onSubmit(): void {
    const answers = this.questions.map(question => question.feedback ?? 0);
    console.log('Feedback submitted:', answers);

    console.log('Jeejee', this.questions); 
//Oli työmaa kun ei meinannu toimia
    if (this.questions.length > 1 && this.questions[1]?.feedback !== undefined && this.questions[1].feedback > 8) {
      alert('Rock Moi!');
    }
    
  }
}