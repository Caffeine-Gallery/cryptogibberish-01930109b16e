import Int "mo:base/Int";

import Debug "mo:base/Debug";

actor Counter {
  stable var count : Int = 0;

  public func increment() : async Int {
    count += 1;
    Debug.print("Count incremented to: " # debug_show(count));
    count
  };

  public func decrement() : async Int {
    count -= 1;
    Debug.print("Count decremented to: " # debug_show(count));
    count
  };

  public query func getCount() : async Int {
    count
  };
}
