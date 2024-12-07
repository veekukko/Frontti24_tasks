// questions.ts
export class Question {
  feedback: number | undefined;
   
  constructor(public questionText: string) {
    this.feedback = 5;
  }

  setFeedback(value: number): void {
    this.feedback = value;
  }
}
