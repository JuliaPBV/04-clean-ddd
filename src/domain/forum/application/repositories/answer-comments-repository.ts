import { PaginationsParams } from "@/core/repositories/pagination-params";
import { AnswerComment } from "../../entreprise/entities/answer-comment";

export interface AnswerCommentsRepository {
  findById(id: string): Promise<AnswerComment | null>;
  findManyByAnswerId(
    answerId: string,
    params: PaginationsParams,
  ): Promise<AnswerComment[]>;
  create(answerComment: AnswerComment): Promise<void>;
  delete(answerComment: AnswerComment): Promise<void>;
}
