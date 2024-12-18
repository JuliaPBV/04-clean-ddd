import { UniqueEntityID } from "@/core/unique-entity-id";
import { Question } from "../../entreprise/entities/question";
import { QuestionsRepository } from "../repositories/question-repository";

interface GetQuestionBySlugUseCaseRequest {
  slug: string;
}

interface GetQuestionBySlugUseCaseResponse {
  question: Question;
}

export class GetQuestionBySlugUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    slug,
  }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionsRepository.findBySlug(slug);

    if (!question) {
      throw new Error("Question not found");
    }

    return {
      question,
    };
  }
}
