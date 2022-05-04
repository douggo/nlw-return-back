import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacks-repository";

interface SubmitFeedbackUseCaseRequest {
  type: string,
  comment: string,
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  
  constructor(
    private feedbacksRespository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if(!type) {
      throw new Error('Feedback type is required.');
    }

    if(!comment) {
      throw new Error('Feedback must have a comment.');
    }

    if(screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format');
    }

    await this.feedbacksRespository.create({
      type,
      comment,
      screenshot
    });
    
    await this.mailAdapter.sendMail({
      subject: "Novo Feedback",
      body: [
        '<div style="font-family: sans-serif; font-size: 16px; color: #111;">',
        `<p>Tipo do Feedback: ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        '</div>'
      ].join('\n')
    })
  }

}