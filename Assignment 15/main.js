//Question15: Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
var guestArr = ["Liza", "Jack", "Jonney"];
console.log(guestArr);
var canNotattend = "Berlin";
console.log(canNotattend + " " + "can not make it, for dinner");
var newGuest = "William";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.map(function (item) {
    return console.log("Dear ".concat(item, ", you are cordinally invited to a dinner"));
});
