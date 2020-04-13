<!--Hide script from old browsers
		function newWindow(file, name) {
		
			switch(name) {
				case "calendar" :
					x = 350;
					y = 520;
					sBars = "no";
					tBar= "no";
					rSize = "no";
					break;
				case "venue" :			
					x = 500;
					y = 600;
					sBars = "yes";
					tBar= "no";
					rSize = "yes";
					break;
				case "venue_htm" :			
					x = 800;
					y = 600;
					sBars = "yes";
					tBar= "yes";
					rSize = "yes";
					break;
				case "prices" :			
					x = 500;
					y = 400;
					sBars = "no";
					tBar= "no";
					rSize = "yes";
					break;
				case "description" :
					x = 500;
					y = 400;
					sBars = "no";
					tBar= "no";
					rSize = "yes";
					break;
				case "webpage" :
					x = 1000;
					y = 600;
					sBars = "yes";
					tBar= "yes";
					rSize = "yes";
					break;
				case "pdf" :
					x = 600;
					y = 800;
					sBars = "yes";
					tBar= "yes";
					rSize = "yes";
					break;
				case "documents" :
					x = 700;
					y = 600;
					sBars = "yes";
					tBar= "no";
					rSize = "yes";
					break;
				case "course_details" :			
					x = 900;
					y = 600;
					sBars = "yes";
					tBar= "no";
					rSize = "yes";
					break;
				default :
					x = 800;
					y = 600;
					sBars = "yes";
					tBar= "no";
					rSize = "yes";
					break;
			}
		
			windowName = name + "Win";
			displayWindow = window.open(file, windowName, "scrollbars=" + sBars + ", toolbar=" + tBar + ", width=" + x + "px,"+ "height=" + y + "px" + ", resizable=" + rSize);
			//displayWindow.focus(); 
}

// End hiding from old browsers -->
															



