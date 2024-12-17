import { randomUUID } from "node:crypto";

export class Entity<Prosp> {
  private _id: string;
  protected props: Prosp;

  get id() {
    return this._id;
  }
  constructor(props: Prosp, id?: string) {
    this.props = props;
    this._id = id ?? randomUUID();
  }
}
