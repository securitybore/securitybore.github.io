/* Write the XHTML code for the left hand menu. currPageIndex indicates which element in the array should be highlighted as the current page */
<!--Hide script from old browsers
function writeMenu (currPageIndex){
	var divOpenCode = "<div class=\"vMenu\">";
	var divCloseCode = "</div>"	
	var activePage = "id=\"activepage\"";
	var arrayLength;
	var i;

	var adminHref = new Array(4)
	adminHref[1] = "<a href=\"index_admin.htm\"";
	adminHref[2] = "<a href=\"admin_onsite.htm\"";
	adminHref[3] = "<a href=\"admin_charges.htm\"";
	

	var adminMenuItem = new Array(4)
	
	adminMenuItem[1] = "> Class Admin </a>";
	adminMenuItem[2] = "> Onsite Classes </a>";
	adminMenuItem[3] = "> Charges </a>";

	arrayLength = 4;

	document.write(divOpenCode);
	for(i=1; i<arrayLength; i++){ 
		document.write(adminHref[i]);	
		if (i == currPageIndex){
			document.write(activePage);
		}
		document.write(adminMenuItem[i]);	
	}
	document.write(divCloseCode);
}

writeMenu(currPageIndex);
//end hiding of script -->
