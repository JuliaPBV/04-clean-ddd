import { faker } from "@faker-js/faker";
import { UniqueEntityID } from "@/core/unique-entity-id";
import { Answer, AnswerProps } from "@/domain/forum/entreprise/entities/answer";

export function makeAnswer(
  override: Partial<AnswerProps> = {},
  id?: UniqueEntityID,
) {
  const answer = Answer.create(
    {
      authorId: new UniqueEntityID(),
      questionId: new UniqueEntityID(),
      content: faker.lorem.text(),
      ...override,
    },
    id,
  );

  return answer;
}
