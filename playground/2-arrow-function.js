// const square = function (x) {
//   return x * x;
// };

// const square = (x) => {
//   return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));

// Arrow functions don't bind to their own this value
// Not good for object methods, but great for everything else
const event = {
  name: "Birthday Party",
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach((guest) => {
      // if using a regular function heres, this.name is undefined as "this" is bound to the current function, not to the parent object "event" (the arrow function fixes that)
      console.log(guest + " is attending " + this.name);
    });
  },
};

event.printGuestList();
