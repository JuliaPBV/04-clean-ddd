import { QuestionAttachment } from "../../entreprise/entities/question-attachment";

export interface QuestionAttachmentsRepository {
  findManyByQuestionId(questionId: string): Promise<QuestionAttachment[]>;
}
