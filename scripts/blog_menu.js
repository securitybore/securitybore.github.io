/* Write the XHTML code for the left hand menu. currPageIndex indicates which element in the array should be highlighted as the current page */
<!--Hide script from old browsers

function writeMenu (currPageIndex){
	var divOpenCode = "<div class=\"vMenu\">";
	var divCloseCode = "</div>"	
	var activePage = "id=\"activepage\"";
	var arrayLength;
	var i;

	var eBooksHref = new Array(4)
	eBooksHref[1] = "<a href=\"geometrical_representation_of_signals.htm\"";
	eBooksHref[2] = "<a href=\"new_eBooks.htm\"";
	eBooksHref[3] = "<a href=\"all_in_the_timing.htm\"";
	//eBooksHref[3] = "<a href=\"tm.htm\"";

	var eBooksMenuItem = new Array(4)
	eBooksMenuItem[1] = "> Geometry of Signals </a>";
	eBooksMenuItem[2] = "> New eBooks </a>";
	eBooksMenuItem[3] = "> All in the Timing </a>";

	arrayLength = 4;

	document.write(divOpenCode);
	for(i=1; i<arrayLength; i++){ 
		document.write(eBooksHref[i]);	
		if (i == currPageIndex){
			document.write(activePage);
		}
		document.write(eBooksMenuItem[i]);	
	}
	document.write(divCloseCode);
}

writeMenu(currPageIndex);
//end hiding of script -->
