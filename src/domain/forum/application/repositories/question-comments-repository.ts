import { QuestionComment } from "../../entreprise/entities/question-comment";

export interface QuestionCommentsRepository {
  create(questionComment: QuestionComment): Promise<void>;
}
