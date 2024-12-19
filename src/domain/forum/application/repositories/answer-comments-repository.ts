import { AnswerComment } from "../../entreprise/entities/answer-comment";

export interface AnswerCommentsRepository {
  create(answerComment: AnswerComment): Promise<void>;
}
