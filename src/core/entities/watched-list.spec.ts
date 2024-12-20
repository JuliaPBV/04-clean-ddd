import { WatchedList } from "./watched-list";

class NumberWatchedList extends WatchedList<number> {
  compareItems(a: number, b: number): boolean {
    return a == b;
  }
}

describe("watched list", () => {
  it("should be able to craete a watched list witch initial items", () => {
    const List = new NumberWatchedList([1, 2, 3]);

    expect(List.currentItems).toHaveLength(3);
  });

  it("should be able to add new items to the list", () => {
    const List = new NumberWatchedList([1, 2, 3]);

    List.add(4);

    expect(List.currentItems).toHaveLength(4);
    expect(List.getNewItems()).toEqual([4]);
  });

  it("should be able to remove items to the list", () => {
    const List = new NumberWatchedList([1, 2, 3]);

    List.remove(2);

    expect(List.currentItems).toHaveLength(2);
    expect(List.getRemovedItems()).toEqual([2]);
  });

  it("should be able to add an item even if it was removed before", () => {
    const List = new NumberWatchedList([1, 2, 3]);

    List.remove(2);
    List.add(2);

    expect(List.currentItems).toHaveLength(3);
    expect(List.getRemovedItems()).toEqual([]);
    expect(List.getNewItems()).toEqual([]);
  });

  it("should be able to remove an item even if it was added before", () => {
    const List = new NumberWatchedList([1, 2, 3]);

    List.add(4);
    List.remove(4);

    expect(List.currentItems).toHaveLength(3);
    expect(List.getRemovedItems()).toEqual([]);
    expect(List.getNewItems()).toEqual([]);
  });

  it("should be able to update watched list items", () => {
    const List = new NumberWatchedList([1, 2, 3]);

    List.update([1, 3, 5]);

    expect(List.getRemovedItems()).toEqual([2]);
    expect(List.getNewItems()).toEqual([5]);
  });
});
