const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";
// alert("asothaseotnasetu");		//test pop-up message





function setUserName() {
	const myName = prompt("Please enter your name.");

	if (!myName) {
		setUserName();	//if nothing here, try again
	} else{
		localStorage.setItem("name", myName);		
		// saves in user's browser
		myHeading.textContent = `You're pretty cool, ${myName}`;	
	}

}



let myButton = document.querySelector("button");
myButton.onclick = () => {
	//nothing runs here when I click in the html page
//	alert("asothaseotnasetu");
	setUserName();
};





