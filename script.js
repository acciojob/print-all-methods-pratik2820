//your JS code here. If required.
function allMethods() {
  //write your code here
	const methods = Object.getOwnPropertyNames(Math).filter(
    (property) => typeof Math[property] === 'function'
  );

  console.log(methods);
}

// alert(allMethods());
