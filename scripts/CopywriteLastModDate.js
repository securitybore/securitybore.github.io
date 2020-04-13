
	// Assign the last modified date to the variable lastmoddate
	var lastmoddate = document.lastModified;

	// Create an if statement to test the value of the lastmoddate
	if(lastmoddate == 0)

		{
		document.write("<br />Last updated: unknown &nbsp | &nbsp &copy; 1998 - 2014 Bores Signal Processing");
		}
		else
		{
		document.write("<br />&copy; 1998 - 2014 Bores Signal Processing &nbsp|&nbsp Last updated: " + lastmoddate);
		}

