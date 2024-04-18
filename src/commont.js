import { action, observable } from "mobx";

export const counterStore = observable({
    count: 0,
  
    increment: action(function() {
      this.count++;
    }),
  
    decrement: action(function() {
      this.count--;
    })
  });