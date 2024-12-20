import { UniqueEntityID } from "@/core/unique-entity-id";
import {
  AnswerAttachment,
  AnswerAttachmentProps,
} from "@/domain/forum/entreprise/entities/answer-attachment";

export function makeAnswerAttachment(
  override: Partial<AnswerAttachmentProps> = {},
  id?: UniqueEntityID,
) {
  const answerAttachment = AnswerAttachment.create(
    {
      answerId: new UniqueEntityID(),
      attachmentId: new UniqueEntityID(),
      ...override,
    },
    id,
  );

  return answerAttachment;
}
