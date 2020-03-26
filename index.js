

// storing name in a variable.
let myName = 'Ekemini Otu';
// storing my courses in an array.
console.log('My name is', myName);
let myCourses = ['HTML', 'CSS','GIT', 'JAVASCRIPT']
for  (let i = 0; i < myCourses.length; i++) {
   // Display my courses
    console.log(myCourses[i]);
}
// Display my name

// Display Even Num btw 1-200 if my courses are Even
  if (myCourses.length % 2 ===0) {
    for (let i = 0; i <= 200; i++) {
      if  (i%2===0) {
          console.log(i);               
      }
    }
  }