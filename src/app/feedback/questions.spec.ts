import { Question } from './questions';

describe('Question', () => {
  it('should create an instance with properties', () => {
    const question = new Question('What is your favorite color?');
    expect(question).toBeTruthy();
    expect(question.questionText).toBe('What is your favorite color?');
    expect(question.feedback).toBeUndefined(); // Adjusted to reflect no initial feedback
  });

  it('should set feedback based on slider value', () => {
    const question = new Question('How satisfied are you?');
    question.setFeedback(8); // This sets the feedback based on the slider value
    expect(question.feedback).toBe('Feedback: 8'); // Ensure the feedback matches
  });
});
