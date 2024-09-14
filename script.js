const byteSize = (str) => {
  const blobStr = new Blob([str], {type:"text/plain"});
	return blobStr.size
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
