/* Write the XHTML code for the left hand menu. currPageIndex indicates which element in the array should be highlighted as the current page */
<!-- Hide script from old browsers

var div0OpenCode = "<div class=\"vMenu\">";
	var div1OpenCode = "<div class=\"vMenu1\">";
	var div2OpenCode = "<div class=\"vMenu2\">";
	var divCloseCode = "</div>"	
	var activePage = "id=\"activepage\"";
	var array1Length;
	var array2Length;
	var array3Length;
	var change0level = "<a href=\"";
	var change1level = "<a href=\"../";
	var change2level = "<a href=\"../../";
	var change3level = "<a href=\"../../../";
	var arrayMenuHrefLevel1;
	var	arrayMenuItemLevel1;
	var arrayMenuHrefLevel2;
	var	arrayMenuItemLevel2;
	var arrayMenuHrefLevel3;
	var	arrayMenuItemLevel3;
	var i;
	var j;
	var k;

  var classesHref = new Array(5) //level0
	  classesHref[1] = "index_dsp.htm\"";
	  classesHref[2] = "index_ipcp.htm\"";
		classesHref[3] = "index_mpeg.htm\"";
		classesHref[4] = "comments.htm\"";

  var classesMenuItem = new Array(5)
		classesMenuItem[1]= ">DSP classes</a>";
		classesMenuItem[2]= ">Image classes</a>";
		classesMenuItem[3] = ">MPEG classes</a>";		
		classesMenuItem[4] = ">Comments</a>";	

 	var dspHref = new Array(4)
		
		dspHref[1] = "courses/dsp_foundation.htm\"";
		dspHref[2] = "courses/dsp_fir_filters.htm\"";		
		dspHref[3] = "courses/dsp_memory_architecture.htm\"";

	var dspMenuItem = new Array(4)

		dspMenuItem[1] = ">-DSP foundation</a>";
		dspMenuItem[2] = ">-FIR filters</a>";
		dspMenuItem[3] = ">-Memory architecture</a>";

	var ipceHref = new Array(4)
	
		ipceHref[1] = "courses/ipcp_ipcp.htm\"";
		ipceHref[2] = "courses/ipcp_video_mix.htm\"";
		ipceHref[3] = "courses/ipcp_directfb.htm\"";

	var ipceMenuItem = new Array(4)
	
		ipceMenuItem[1] = ">-Image Processing</a>";
		ipceMenuItem[2] = ">-Video Mixing</a>";
		ipceMenuItem[3] = ">-DirectFB</a>";
		
	var mpegHref = new Array(3)

		mpegHref[1] = "courses/mpeg_understanding_mpeg.htm\"";
		mpegHref[2] = "courses/mpeg_streaming_media.htm\"";

	var mpegMenuItem = new Array(3)

		mpegMenuItem[1] = ">--Understanding MPEG</a>";
		mpegMenuItem[2] = ">--Streaming media</a>";
		
function writeMenu1Level (arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length) {
	
	document.write(div0OpenCode);
 			for(i=1; i<array1Length; i++){ 
				document.write(change0level);
 				document.write(arrayMenuHrefLevel1[i]);	
 				if (i == curr1PageIndex){
 					document.write(activePage);
 				}
 				document.write(arrayMenuItemLevel1[i]);	
 			}
 			document.write(divCloseCode);			
}

function writeMenu2Level (arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length) {

  document.write(div0OpenCode);
 			for(i=1; i<array1Length; i++){ 
				document.write(change0level);
 				document.write(arrayMenuHrefLevel1[i]);	
				if(i == curr1PageIndex){
				  document.write(activePage);
				}
				document.write(arrayMenuItemLevel1[i]);

 				if (i == curr1PageIndex){
					document.write(div1OpenCode);
					for(j=1; j<array2Length; j++){
						document.write(change0level);
						document.write(arrayMenuHrefLevel2[j]);
						if (j == curr2PageIndex){
 							document.write(activePage);
						}
						document.write(arrayMenuItemLevel2[j]);
					}
					document.write(divCloseCode);
				}	
			}
 			document.write(divCloseCode);
}

function writeSecMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length) {

  document.write(div0OpenCode);
 			for(i=1; i<array1Length; i++){ 
				document.write(change1level);
 				document.write(arrayMenuHrefLevel1[i]);	
				document.write(arrayMenuItemLevel1[i]);

 				if (i == curr1PageIndex){
					document.write(div1OpenCode);
					for(j=1; j<array2Length; j++){
						document.write(change1level);
						document.write(arrayMenuHrefLevel2[j]);
						if (j == curr2PageIndex){
 							document.write(activePage);
						}
						document.write(arrayMenuItemLevel2[j]);
					}
					document.write(divCloseCode);
				}	
			}
 			document.write(divCloseCode);
}

function writeMenu3Level (arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length) {
  document.write(div0OpenCode);
 			for(i=1; i<array1Length; i++){
			/*1111111111111111111111111111111111111111111111111*/ 
				document.write(change3level);
 				document.write(arrayMenuHrefLevel1[i]);	
				document.write(arrayMenuItemLevel1[i]);
 				if (i == curr1PageIndex){
					document.write(div1OpenCode);
					for(j=1; j<array2Length; j++){
					/*222222222222222222222222222222222222222222222222*/
						document.write(change3level);
						document.write(arrayMenuHrefLevel2[j]);
						if(j == curr2PageIndex){
						document.write(activePage);
						}
						document.write(arrayMenuItemLevel2[j]);
						if (j == curr2PageIndex){
							 document.write(div2OpenCode);
							 for(k=1; k<array3Length; k++){
							 /*333333333333333333333333333333333333333333333333*/
							   document.write(change3level);
							   document.write(arrayMenuHrefLevel3[k]);
							 	 document.write(arrayMenuItemLevel3[k]);
							 }/* end for 3*/
							 document.write(divCloseCode);
							 /*333333333333333333333333333333333333333333333333*/
						}/* end if 2*/
					}/* end for 2*/
					document.write(divCloseCode);
				/*222222222222222222222222222222222222222222222222*/
				}/* end if 1 */
			}/* end for 1 */
			document.write(divCloseCode);
			/*1111111111111111111111111111111111111111111111111*/
}

function writeMenu3Level_sec (arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length) {
  document.write(div0OpenCode);
 			for(i=1; i<array1Length; i++){
			/*1111111111111111111111111111111111111111111111111*/ 
				document.write(change3level);
 				document.write(arrayMenuHrefLevel1[i]);	
				document.write(arrayMenuItemLevel1[i]);
 				if (i == curr1PageIndex){
					document.write(div1OpenCode);
					for(j=1; j<array2Length; j++){
					/*222222222222222222222222222222222222222222222222*/
						document.write(change3level);
						document.write(arrayMenuHrefLevel2[j]);
						document.write(arrayMenuItemLevel2[j]);
						if (j == curr2PageIndex){
							 document.write(div2OpenCode);
							 for(k=1; k<array3Length; k++){
							 /*333333333333333333333333333333333333333333333333*/
							   document.write(change3level);
							   document.write(arrayMenuHrefLevel3[k]);
								 if(k == curr3PageIndex){
						       document.write(activePage);
						     }
							 	 document.write(arrayMenuItemLevel3[k]);
							 }/* end for 3*/
							 document.write(divCloseCode);
							 /*333333333333333333333333333333333333333333333333*/
						}/* end if 2*/
					}/* end for 2*/
					document.write(divCloseCode);
				/*222222222222222222222222222222222222222222222222*/
				}/* end if 1 */
			}/* end for 1 */
			document.write(divCloseCode);
			/*1111111111111111111111111111111111111111111111111*/
}
	switch(page){

 		case "classes":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;	 			
			writeMenu1Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length);			
 		break;

		case "classes_dsp":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;
			arrayMenuHrefLevel2 = dspHref;
			arrayMenuItemLevel2 = dspMenuItem;
 			array2Length = dspHref.length;
 			writeMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;

		case "classes_schedule":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;
			arrayMenuHrefLevel2 = scheduleHref;
			arrayMenuItemLevel2 = scheduleMenuItem;
 			array2Length = scheduleHref.length;
 			writeMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;

	  case "classes_schedule_sec":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;
			arrayMenuHrefLevel2 = scheduleHref;
			arrayMenuItemLevel2 = scheduleMenuItem;
 			array2Length = scheduleHref.length;
 			writeSecMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;

	  case "classes_dsp_sec":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;
			arrayMenuHrefLevel2 = dspHref;
			arrayMenuItemLevel2 = dspMenuItem;
 			array2Length = dspHref.length;
 			writeSecMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;

		case "classes_ipce":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;
			arrayMenuHrefLevel2 = ipceHref;
			arrayMenuItemLevel2 = ipceMenuItem;
 			array2Length = ipceHref.length;
 			writeMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;

		case "classes_ipce_sec":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;
			arrayMenuHrefLevel2 = ipceHref;
			arrayMenuItemLevel2 = ipceMenuItem;
 			array2Length = ipceHref.length;
 			writeSecMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;

		case "classes_tm":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;
			arrayMenuHrefLevel2 = tmHref;
			arrayMenuItemLevel2 = tmMenuItem;
 			array2Length = tmHref.length;
 			writeMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;

	  case "classes_tm_sec":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;
			arrayMenuHrefLevel2 = tmHref;
			arrayMenuItemLevel2 = tmMenuItem;
 			array2Length = tmHref.length;
 			writeSecMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;

		case "classes_nexperia":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;
			arrayMenuHrefLevel2 = nexperiaHref;
			arrayMenuItemLevel2 = nexperiaMenuItem;
 			array2Length = nexperiaHref.length;
 			writeMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;
	
		case "classes_nexperia_sec":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;
			arrayMenuHrefLevel2 = nexperiaHref;
			arrayMenuItemLevel2 = nexperiaMenuItem;
 			array2Length = nexperiaHref.length;
 			writeSecMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;

		case "classes_mpeg":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;
			arrayMenuHrefLevel2 = mpegHref;
			arrayMenuItemLevel2 = mpegMenuItem;
 			array2Length = mpegHref.length;
 			writeMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;
		
		case "classes_mpeg_sec":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;
			arrayMenuHrefLevel2 = mpegHref;
			arrayMenuItemLevel2 = mpegMenuItem;
 			array2Length = mpegHref.length;
 			writeSecMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;

 		case "comments":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;	 			
			writeMenu1Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length);			
 		break;

		case "classes_linux":
		  arrayMenuHrefLevel1 = classesHref;
			arrayMenuItemLevel1 = classesMenuItem;
 			array1Length = classesHref.length;	 			
			writeMenu1Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length);			
 		break;
		default:;
		break;
}

//end hiding of script -->
