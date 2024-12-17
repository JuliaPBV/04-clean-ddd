import { UniqueEntityID } from "../unique-entity-id";

export class Entity<Prosp> {
  private _id: UniqueEntityID;
  protected props: Prosp;

  get id() {
    return this._id;
  }
  constructor(props: Prosp, id?: string) {
    this.props = props;
    this._id = new UniqueEntityID(id);
  }
}
