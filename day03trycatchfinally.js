function reverseString(s) {
  try {
      s = s.split("").reverse().join("");
  } catch(e) {
      console.log(e.message); // exception.message
  } finally {
      console.log(s); // string 1,2,3,4
  }
}