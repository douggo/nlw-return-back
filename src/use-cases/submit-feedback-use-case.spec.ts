import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail : sendMailSpy }
);

describe('Submit feedback', () => {
  
  it('should be able to submit a feedback', async () => {    
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'dummy comment',
      screenshot: 'data:image/png;base64,348729894y88u4rfghewjiw97r47382h'
    })).resolves.not.toThrow();
    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it('should not be possible to submit a feedback without a type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'dummy comment',
      screenshot: 'data:image/png;base64,348729894y88u4rfghewjiw97r47382h'
    })).rejects.toThrow();
  });

  it('should not be possible to submit a feedback without a comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,348729894y88u4rfghewjiw97r47382h'
    })).rejects.toThrow();
  });

  it('should not be possible to submit a feedback without a comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'dummy comment',
      screenshot: 'dummy_image123.jpg'
    })).rejects.toThrow();
  });

});