import { UniqueEntityID } from '../unique-entity-id'

export class Entity<Prosp> {
  private _id: UniqueEntityID
  protected props: Prosp

  get id() {
    return this._id
  }

  protected constructor(props: Prosp, id?: UniqueEntityID) {
    this.props = props
    this._id = id ?? new UniqueEntityID()
  }
}
