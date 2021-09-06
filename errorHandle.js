try {
  alert("Program start...");
  alert(x); // error code
} catch (err) {
  // handle error
  console.log("Error! Inside catch block");
  console.log(err);
  console.log(err.name);
} finally {
  alert("End program.");
}
