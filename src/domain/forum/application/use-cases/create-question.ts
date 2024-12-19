import { UniqueEntityID } from "@/core/unique-entity-id";
import { Question } from "../../entreprise/entities/question";
import { QuestionsRepository } from "../repositories/questions-repository";
import { Either, right } from "@/core/either";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

interface CreateQuestionUseCaseRequest {
  authorId: string;
  title: string;
  content: string;
}

type CreateQuestionUseCaseResponse = Either<
  null,
  {
    question: Question;
  }
>;

export class CreateQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}

  async execute({
    authorId,
    title,
    content,
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse> {
    const question = Question.create({
      authorId: new UniqueEntityID(authorId),
      title,
      content,
    });

    await this.questionsRepository.create(question);

    return right({
      question,
    });
  }
}
