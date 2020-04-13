/* Write the XHTML code for the left hand menu. currPageIndex indicates which element in the array should be highlighted as the current page */
<!--Hide script from old browsers

function writeMenu (currPageIndex){
	var divOpenCode = "<div class=\"vMenu\">";
	var divCloseCode = "</div>"	
	var activePage = "id=\"activepage\"";
	var arrayLength;
	var i;

	var eBooksHref = new Array(6)
	eBooksHref[1] = "<a href=\"dsp_foundation.htm\"";
	eBooksHref[2] = "<a href=\"dsp_lite.htm\"";
	eBooksHref[3] = "<a href=\"dsp_basics.htm\"";
	eBooksHref[4] = "<a href=\"directfb.htm\"";
	eBooksHref[5] = "<a href=\"ipce.htm\"";
	//eBooksHref[3] = "<a href=\"tm.htm\"";

	var eBooksMenuItem = new Array(6)
	eBooksMenuItem[1] = "> DSP Foundation </a>";
	eBooksMenuItem[2] = "> DSP Lite </a>";
	eBooksMenuItem[3] = "> DSP Basics </a>";
	eBooksMenuItem[4] = "> DirectFB </a>";
	eBooksMenuItem[5] = "> Image Processing </a>";
	//eBooksMenuItem[3] = "> TriMedia </a>";

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
