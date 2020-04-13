/* Write the XHTML code for the left hand menu. currPageIndex indicates which element in the array should be highlighted as the current page */
<!--Hide script from old browsers

function writeMenu (currPageIndex){
	var divOpenCode = "<div class=\"vMenu\">";
	var divCloseCode = "</div>"	
	var activePage = "id=\"activepage\"";
	var arrayLength;
	var i;

	var eBooksHref = new Array(6)
	eBooksHref[1] = "<a href=\"art_of_dsp.htm\"";
	eBooksHref[2] = "<a href=\"dsp_without_math.htm\"";
	eBooksHref[3] = "<a href=\"art_of_ip.htm\"";
	eBooksHref[4] = "<a href=\"algebra_of_mixing.htm\"";
	eBooksHref[5] = "<a href=\"directfb.htm\"";
	//eBooksHref[3] = "<a href=\"tm.htm\"";

	var eBooksMenuItem = new Array(6)
	eBooksMenuItem[1] = "> The Art of DSP </a>";
	eBooksMenuItem[2] = "> DSP Without Math </a>";
	eBooksMenuItem[3] = "> The Art of Image Processing </a>";
	eBooksMenuItem[4] = "> The Algebra of Video Mixing </a>";
	eBooksMenuItem[5] = "> DirectFB </a>";

	arrayLength = 6;

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
