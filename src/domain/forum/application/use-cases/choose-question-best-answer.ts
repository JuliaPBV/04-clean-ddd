import { AnswersRepository } from "../repositories/answers-repository";
import { Question } from "../../entreprise/entities/question";
import { QuestionsRepository } from "../repositories/question-repository";

interface ChooseQuestionBestAnswerCaseRequest {
  authorId: string;
  answerId: string;
}

interface ChooseQuestionBestAnswerCaseResponse {
  question: Question;
}

export class ChooseQuestionBestAnswerCase {
  constructor(
    private questionsRepository: QuestionsRepository,
    private answersRepository: AnswersRepository,
  ) {}

  async execute({
    authorId,
    answerId,
  }: ChooseQuestionBestAnswerCaseRequest): Promise<ChooseQuestionBestAnswerCaseResponse> {
    const answer = await this.answersRepository.findById(answerId);

    if (!answer) {
      throw new Error("Answer not found");
    }

    const question = await this.questionsRepository.findById(
      answer.questionId.toString(),
    );

    if (!answer) {
      throw new Error("Question not found");
    }

    if (authorId !== question?.authorId.toString()) {
      throw new Error("Not allowed");
    }

    question.bestAnswerId = answer.id;

    await this.questionsRepository.save(question);

    return {
      question,
    };
  }
}
