const sentence = "hello there from lighthouse labs";

//LOOPS THROUGH EACH CHARACTER IN SENTENCE AND PRINTS EACH ONE 50 ms APART
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 + 50 * i);
}
//CREATES A NEW LINE AFTER EACH CHAR IN SENTENCE HAS BEEN LOGGED TO CONSOLE
setTimeout(() => console.log('\n'), 50 * sentence.length);