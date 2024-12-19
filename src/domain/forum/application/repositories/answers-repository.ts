import { PaginationsParams } from "@/core/repositories/pagination-params";
import { Answer } from "../../entreprise/entities/answer";

export interface AnswersRepository {
  findById(id: string): Promise<Answer | null>;
  findManyByQuestionId(
    questionId: string,
    params: PaginationsParams,
  ): Promise<Answer[]>;
  create(answer: Answer): Promise<void>;
  save(answer: Answer): Promise<void>;
  delete(answer: Answer): Promise<void>;
}
