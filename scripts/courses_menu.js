/* Write the XHTML code for the left hand menu. currPageIndex indicates which element in the array should be highlighted as the current page */
<!--Hide script from old browsers

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

  var onlineHref = new Array(4) //level0
	  onlineHref[1] = "courses/intro/index.htm\"";
	  onlineHref[2] = "courses/advanced/index.htm\"";
	  onlineHref[3] = "courses/tm_overview/index.htm\"";

  var onlineMenuItem = new Array(4)
		onlineMenuItem[1]= ">Intro to DSP</a>";
		onlineMenuItem[2]= ">Advanced DSP</a>";
		onlineMenuItem[3]= ">TriMedia</a>";	
		
  var introHref = new Array(8);//level2
		introHref[1] = "courses/intro/basics/index.htm\"";
 		introHref[2] = "courses/intro/time/index.htm\"";	
		introHref[3] = "courses/intro/freq/index.htm\"";
		introHref[4] = "courses/intro/filters/index.htm\"";
		introHref[5] = "courses/intro/iir/index.htm\"";
		introHref[6] = "courses/intro/chips/index.htm\"";
		introHref[7] = "courses/intro/program/index.htm\"";

	var introMenuItem = new Array(8);//level2

		introMenuItem[1] = ">--basics</a>";
		introMenuItem[2] = ">--time domain</a>";	
		introMenuItem[3] = ">--frequency</a>";
		introMenuItem[4] = ">--filtering</a>";
		introMenuItem[5] = ">--IIR filters</a>";
		introMenuItem[6] = ">--DSP chips</a>";
		introMenuItem[7] = ">--programming</a>";

	var 	basicsHref = new Array(8); //level3_sec

	  basicsHref[1] = "courses/intro/basics/1_whatis.htm\"";
	  basicsHref[2] = "courses/intro/basics/1_conver.htm\"";
	  basicsHref[3] = "courses/intro/basics/1_alias.htm\"";
	  basicsHref[4] = "courses/intro/basics/1_antia.htm\"";
	  basicsHref[5] = "courses/intro/basics/1_resol.htm\"";
	  basicsHref[6] = "courses/intro/basics/1_quant.htm\"";
	  basicsHref[7] = "courses/intro/basics/1_summar.htm\"";
		
	var 	basicsMenuItem = new Array(8); //level3_sec

	  basicsMenuItem[1] = ">----what is DSP?</a>";
	  basicsMenuItem[2] = ">----conversion</a>";
	  basicsMenuItem[3] = ">----aliasing</a>";
	  basicsMenuItem[4] = ">----antialiasing</a>";
	  basicsMenuItem[5] = ">----freq resolution</a>";
	  basicsMenuItem[6] = ">----quantisation</a>";
	  basicsMenuItem[7] = ">----summary</a>";	
		
	var timeHref= new Array(11); //level 3_sec
	  timeHref[1]= "courses/intro/time/2_ave.htm\"";
		timeHref[2] = "courses/intro/time/2_corr.htm\"";
	  timeHref[3] = "courses/intro/time/2_func.htm\"";
	  timeHref[4] = "courses/intro/time/2_auto.htm\"";	
	  timeHref[5] = "courses/intro/time/2_locate.htm\"";
	  timeHref[6] = "courses/intro/time/2_ident.htm\"";
	  timeHref[7] = "courses/intro/time/2_conv.htm\"";
	  timeHref[8] = "courses/intro/time/2_smooth.htm\"";
	  timeHref[9] = "courses/intro/time/2_concor.htm\"";	
	  timeHref[10] = "courses/intro/time/2_even.htm\"";
		
	var timeMenuItem = new Array(11); //level3_sec
	
	  timeMenuItem[1] = ">---correlation I</a>";
  	timeMenuItem[2] = ">---correlation II</a>";
  	timeMenuItem[3] = ">---correlation function</a>";
  	timeMenuItem[4] = ">---auto correlation</a>";	
  	timeMenuItem[5] = ">---cross correlation I</a>";
	  timeMenuItem[6] = ">---cross correlation II</a>";
	  timeMenuItem[7] = ">---convolution I</a>";
	  timeMenuItem[8] = ">---convolution II</a>";
	  timeMenuItem[9] = ">---convol & corr I</a>";	
	  timeMenuItem[10] = ">---convol & corr II</a>";	
		
	var freqHref = new Array(14); //level3_sec
	
	  freqHref[1] = "courses/intro/freq/3_ft.htm\"";
	  freqHref[2] = "courses/intro/freq/3_spect.htm\"";
	  freqHref[3] = "courses/intro/freq/3_sanal.htm\"";
	  freqHref[4] = "courses/intro/freq/3_conv.htm\"";	
	  freqHref[5] = "courses/intro/freq/3_stft.htm\"";
	  freqHref[6] = "courses/intro/freq/3_period.htm\"";
	  freqHref[7] = "courses/intro/freq/3_exact.htm\"";
	  freqHref[8] = "courses/intro/freq/3_approx.htm\"";						
	  freqHref[9] = "courses/intro/freq/3_length.htm\"";
	  freqHref[10] = "courses/intro/freq/3_leak.htm\"";
	  freqHref[11] = "courses/intro/freq/3_window.htm\"";	
	  freqHref[12] = "courses/intro/freq/3_dist.htm\"";
	  freqHref[13] = "courses/intro/freq/3_decay.htm\"";	
		
	var freqMenuItem = new Array(14);
	
	  freqMenuItem[1] = ">---fourier transform</a>";
	  freqMenuItem[2] = ">---freq spectra I</a>";
	  freqMenuItem[3] = ">---freq spectra II</a>";
	  freqMenuItem[4] = ">---convolution</a>";	
	  freqMenuItem[5] = ">---short term FT</a>";
	  freqMenuItem[6] = ">---short signals I</a>";
	  freqMenuItem[7] = ">---short signals II</a>";
	  freqMenuItem[8] = ">---short signals III</a>";						
	  freqMenuItem[9] = ">---freq leakage I</a>";
	  freqMenuItem[10] = ">---freq leakage II</a>";
	  freqMenuItem[11] = ">---windowing I</a>";	
	  freqMenuItem[12] = ">---windowing II</a>";
	  freqMenuItem[13] = ">---wavelets</a>";
		
	var filtersHref = new Array(11);
	  
		filtersHref[1] = "courses/intro/filters/4_def.htm\"";
	  filtersHref[2] = "courses/intro/filters/4_spec.htm\"";
	  filtersHref[3] = "courses/intro/filters/4_freq.htm\"";
	  filtersHref[4] = "courses/intro/filters/4_eq.htm\"";
	  filtersHref[5] = "courses/intro/filters/4_resp.htm\"";
	  filtersHref[6] = "courses/intro/filters/4_fir.htm\"";
	  filtersHref[7] = "courses/intro/filters/4_window.htm\"";
	  filtersHref[8] = "courses/intro/filters/4_trunc.htm\"";
	  filtersHref[9] = "courses/intro/filters/4_pain.htm\"";	
	  filtersHref[10] = "courses/intro/filters/4_equi.htm\"";	
		
	var filtersMenuItem = new Array(11);
	
	  filtersMenuItem[1] = ">---frequency selection</a>";
	  filtersMenuItem[2] = ">---filter specifications</a>";
	  filtersMenuItem[3] = ">---freq domain</a>";
	  filtersMenuItem[4] = ">---filter equation</a>";
	  filtersMenuItem[5] = ">---freq response</a>";
	  filtersMenuItem[6] = ">---FIR filters</a>";
	  filtersMenuItem[7] = ">---window design I</a>";
	  filtersMenuItem[8] = ">---window design II</a>";
	  filtersMenuItem[9] = ">---window design III</a>";	
	  filtersMenuItem[10] = ">---equiripple design</a>";		

	var iirHref = new Array(17);

		iirHref[1] = "courses/intro/iir/5_eq.htm\"";
		iirHref[2] = "courses/intro/iir/5_resp.htm\"";
		iirHref[3] = "courses/intro/iir/5_ztran.htm\"";
		iirHref[4] = "courses/intro/iir/5_z.htm\"";
		iirHref[5] = "courses/intro/iir/5_decay.htm\"";
		iirHref[6] = "courses/intro/iir/5_poles.htm\"";
		iirHref[7] = "courses/intro/iir/5_invar.htm\"";
		iirHref[8] = "courses/intro/iir/5_warp.htm\"";
		iirHref[9] = "courses/intro/iir/5_form1.htm\"";
		iirHref[10] = "courses/intro/iir/5_form2.htm\"";
		iirHref[11] = "courses/intro/iir/5_transp.htm\"";
		iirHref[12] = "courses/intro/iir/5_quant.htm\"";
		iirHref[13] = "courses/intro/iir/5_struct.htm\"";
		iirHref[14] = "courses/intro/iir/5_scale.htm\"";
		iirHref[15] = "courses/intro/iir/5_para.htm\"";
		iirHref[16] = "courses/intro/iir/5_order.htm\"";	

  var iirMenuItem = new Array(17);

		iirMenuItem[1] = ">---filter equation</a>";
		iirMenuItem[2] = ">---freq response</a>";
		iirMenuItem[3] = ">---z transform I</a>";
		iirMenuItem[4] = ">---z transform II</a>";
		iirMenuItem[5] = ">---meaning of z</a>";
		iirMenuItem[6] = ">---poles and zeros</a>";
		iirMenuItem[7] = ">---impulse variance</a>";
		iirMenuItem[8] = ">---bilinear transform</a>";
		iirMenuItem[9] = ">---direct form 1</a>";
		iirMenuItem[10] = ">---direct form 2 I</a>";
		iirMenuItem[11] = ">---direct form 2 II</a>";
		iirMenuItem[12] = ">---quantisation I</a>";
		iirMenuItem[13] = ">---quantisation II</a>";
		iirMenuItem[14] = ">---quantisation III</a>";
		iirMenuItem[15] = ">---parallel & cascade</a>";
		iirMenuItem[16] = ">---cascade structure</a>";	

	var chipsHref = new Array (13);//level3

		chipsHref[1] = "courses/intro/chips/6_basics.htm\"";	
		chipsHref[2] = "courses/intro/chips/6_maths.htm\"";
		chipsHref[3] = "courses/intro/chips/6_world.htm\"";
		chipsHref[4] = "courses/intro/chips/6_io.htm\"";
		chipsHref[5] = "courses/intro/chips/6_mem.htm\"";
		chipsHref[6] = "courses/intro/chips/6_chips.htm\"";
		chipsHref[7] = "courses/intro/chips/6_data.htm\"";
		chipsHref[8] = "courses/intro/chips/6_precis.htm\"";
		chipsHref[9] = "courses/intro/chips/6_2181.htm\"";
		chipsHref[10] = "courses/intro/chips/6_56002.htm\"";
		chipsHref[11] = "courses/intro/chips/6_texas.htm\"";
		chipsHref[12] = "courses/intro/chips/6_c60.htm\"";

	var chipsMenuItem = new Array (13);//level3

		chipsMenuItem[1] = ">---DSP processors</a>";	
		chipsMenuItem[2] = ">---mathematics</a>";
		chipsMenuItem[3] = ">---i/o interfacesI</a>";
		chipsMenuItem[4] = ">---i/o interfacesII</a>";
		chipsMenuItem[5] = ">---mem architectures</a>";
		chipsMenuItem[6] = ">---processors</a>";
		chipsMenuItem[7] = ">---data format</a>";
		chipsMenuItem[8] = ">---precision</a>";
		chipsMenuItem[9] = ">---ADSP2181</a>";
		chipsMenuItem[10] = ">---DSP56002</a>";
		chipsMenuItem[11] = ">---TMS320C25</a>";
		chipsMenuItem[12] = ">---TMS320C60</a>";

	var programHref = new Array(7);//level3
	
		programHref[1] = "courses/intro/program/7_filter.htm\"";
		programHref[2] = "courses/intro/program/7_array.htm\"";
		programHref[3] = "courses/intro/program/7_misc.htm\"";
		programHref[4] = "courses/intro/program/7_asm.htm\"";
		programHref[5] = "courses/intro/program/7_real.htm\"";
		programHref[6] = "courses/intro/program/7_mops.htm\"";

	var programMenuItem = new Array(7);
	
		programMenuItem[1] = ">---simple FIR</small></a>";
		programMenuItem[2] = ">---pointers</small></a>";
		programMenuItem[3] = ">---memory access</small></a>";
		programMenuItem[4] = ">---assembler</small></a>";
		programMenuItem[5] = ">---real time</small></a>";
		programMenuItem[6] = ">---MIPS MOPS Mflops</a>";

	var advancedHref = new Array(3);	//level2

		advancedHref[1] = "courses/advanced/windows/index.htm\"";
		advancedHref[2] = "courses/advanced/matched/index.htm\"";

	var advancedMenuItem = new Array(3);	//level2

		advancedMenuItem[1] = ">--windows</a>";
		advancedMenuItem[2] = ">--matched filters</a>";

	var windowsHref = new Array(9); 

		windowsHref[1] = "courses/advanced/windows/10_kern.htm\"";
		windowsHref[2] = "courses/advanced/windows/10_filt.htm\"";
		windowsHref[3] = "courses/advanced/windows/10_cpg.htm\"";
		windowsHref[4] = "courses/advanced/windows/10_enb.htm\"";
		windowsHref[5] = "courses/advanced/windows/10_pl.htm\"";
		windowsHref[6] = "courses/advanced/windows/10_leak.htm\"";
		windowsHref[7] = "courses/advanced/windows/10_resol.htm\"";
		windowsHref[8] = "courses/advanced/windows/10_end.htm\"";

	var windowsMenuItem = new Array(9); 

		windowsMenuItem[1] = ">----window kernals</a>";
		windowsMenuItem[2] = ">----FFT windows</a>";
		windowsMenuItem[3] = ">----power gain</a>";
		windowsMenuItem[4] = ">----noise bandwidth</a>";
		windowsMenuItem[5] = ">----processing loss</a>";
		windowsMenuItem[6] = ">----spectral leakage</a>";
		windowsMenuItem[7] = ">----freq resolution</a>";
		windowsMenuItem[8] = ">----FFT quality</a>";

	var matchedHref = new Array(4);	//level4

		matchedHref[1] = "courses/advanced/matched/11_filt.htm\"";
		matchedHref[2] = "courses/advanced/matched/11_snr.htm\"";
		matchedHref[3] = "courses/advanced/matched/11_mat.htm\"";

	var matchedMenuItem = new Array();	//level4

		matchedMenuItem[1] = ">----extract signals</a>";
		matchedMenuItem[2] = ">----signal to noise</a>";
		matchedMenuItem[3] = ">----matched filters</a>";

	var trimediaHref = new Array(11); //level4

		trimediaHref[1] = "courses/tm_overview/trimedia/markets.htm\"";
		trimediaHref[2] = "courses/tm_overview/trimedia/soc.htm\"";
		trimediaHref[3] = "courses/tm_overview/trimedia/io.htm\"";
		trimediaHref[4] = "courses/tm_overview/trimedia/1300.htm\"";
		trimediaHref[5] = "courses/tm_overview/trimedia/1500.htm\"";
		trimediaHref[6] = "courses/tm_overview/trimedia/dspcpu.htm\"";
		trimediaHref[7] = "courses/tm_overview/trimedia/compiler.htm\"";
		trimediaHref[8] = "courses/tm_overview/trimedia/tsa.htm\"";
		trimediaHref[9] = "courses/tm_overview/trimedia/applications.htm\"";
		trimediaHref[10] = "courses/tm_overview/trimedia/training.htm\"";

	var trimediaMenuItem = new Array(11); //level4

		trimediaMenuItem[1] = ">----markets</a>";
		trimediaMenuItem[2] = ">----System on Chip</a>";
		trimediaMenuItem[3] = ">----smart peripherals</a>";
		trimediaMenuItem[4] = ">---TM-1300 I/O</a>";
		trimediaMenuItem[5] = ">---TM-1500 I/O</a>";
		trimediaMenuItem[6] = ">----core CPU</a>";
		trimediaMenuItem[7] = ">----compiler</a>";
		trimediaMenuItem[8] = ">----software</a>";
		trimediaMenuItem[9] = ">----applications</a>";
		trimediaMenuItem[10] = ">----training</a>";

/*

var trimedia = new Array(); //level4

	trimedia[1] = "courses/tm_overview/trimedia/markets.htm><small>----markets</small></a>";
	trimedia[2] = "courses/tm_overview/trimedia/soc.htm><small>----System on Chip</small></a>";
	trimedia[3] = "courses/tm_overview/trimedia/io.htm><small>----smart peripherals</small></a>";
	trimedia[4] = "courses/tm_overview/trimedia/1300.htm><small>---TM-1300 I/O</small></a>";
	trimedia[5] = "courses/tm_overview/trimedia/1500.htm><small>---TM-1500 I/O</small></a>";
	trimedia[6] = "courses/tm_overview/trimedia/dspcpu.htm><small>----core CPU</small></a>";
	trimedia[7] = "courses/tm_overview/trimedia/compiler.htm><small>----compiler</small></a>";
	trimedia[8] = "courses/tm_overview/trimedia/tsa.htm><small>----software</small></a>";
	trimedia[9] = "courses/tm_overview/trimedia/applications.htm><small>----applications</small></a>";
	trimedia[10] = "courses/tm_overview/trimedia/training.htm><small>----training</small></a></div>";

*/
		
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
				document.write(change2level);
 				document.write(arrayMenuHrefLevel1[i]);	
				if(i == curr1PageIndex){
				  document.write(activePage);
				}
				document.write(arrayMenuItemLevel1[i]);

 				if (i == curr1PageIndex){
					document.write(div1OpenCode);
					for(j=1; j<array2Length; j++){
						document.write(change2level);
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

function writeTmMenu2Level (arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length) {

  document.write(div0OpenCode);
 			for(i=1; i<array1Length; i++){ 
				document.write(change3level);
 				document.write(arrayMenuHrefLevel1[i]);	
				document.write(arrayMenuItemLevel1[i]);

 				if (i == curr1PageIndex){
					document.write(div1OpenCode);
					for(j=1; j<array2Length; j++){
						document.write(change3level);
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
 		case "index_online":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;	 			
			writeMenu1Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length);			
 		break;
		case "online_dsp_index":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
 			writeMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;
			
    case "online_dsp_basics_index":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = basicsHref;
			arrayMenuItemLevel3 = basicsMenuItem;
 			array3Length = basicsHref.length;
 			writeMenu3Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
 			
    break;
			
	  case "online_dsp_basics_sec":
	    arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = basicsHref;
			arrayMenuItemLevel3 = basicsMenuItem;
 			array3Length = basicsHref.length;
 			writeMenu3Level_sec(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
 			
		break;
		
		case "online_dsp_time_index":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = timeHref;
			arrayMenuItemLevel3 = timeMenuItem;
 			array3Length = timeHref.length;
 			writeMenu3Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
 						
    break;
			
	  case "online_dsp_time_sec":
	    arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = timeHref;
			arrayMenuItemLevel3 = timeMenuItem;
 			array3Length = timeHref.length;
 			writeMenu3Level_sec(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
  		break;
				
	case "online_dsp_freq_index":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = freqHref;
			arrayMenuItemLevel3 = freqMenuItem;
 			array3Length = freqHref.length;
 			writeMenu3Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
 			break;
			
	 case "online_dsp_freq_sec":
	    arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = freqHref;
			arrayMenuItemLevel3 = freqMenuItem;
 			array3Length = freqHref.length;
 			writeMenu3Level_sec(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);

		break;
		
	case "online_dsp_filters_index":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = filtersHref;
			arrayMenuItemLevel3 = filtersMenuItem;
 			array3Length = filtersHref.length;
 			writeMenu3Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
 			break;
			
	 case "online_dsp_filters_sec":
	    arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = filtersHref;
			arrayMenuItemLevel3 = filtersMenuItem;
 			array3Length = filtersHref.length;
 			writeMenu3Level_sec(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
      break;

	case "online_dsp_iir_index":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = iirHref;
			arrayMenuItemLevel3 = iirMenuItem;
 			array3Length = iirHref.length;
 			writeMenu3Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
 			break;
			
	 case "online_dsp_iir_sec":
	    arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = iirHref;
			arrayMenuItemLevel3 = iirMenuItem;
 			array3Length = iirHref.length;
 			writeMenu3Level_sec(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
      break;

	case "online_dsp_chips_index":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = chipsHref;
			arrayMenuItemLevel3 = chipsMenuItem;
 			array3Length = chipsHref.length;
 			writeMenu3Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
 			break;
			
	 case "online_dsp_chips_sec":
	    arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = chipsHref;
			arrayMenuItemLevel3 = chipsMenuItem;
 			array3Length = chipsHref.length;
 			writeMenu3Level_sec(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
      break;

	case "online_dsp_program_index":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = programHref;
			arrayMenuItemLevel3 = programMenuItem;
 			array3Length = programHref.length;
 			writeMenu3Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
 			break;
			
	 case "online_dsp_program_sec":
	    arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = introHref;
			arrayMenuItemLevel2 = introMenuItem;
 			array2Length = introHref.length;
			arrayMenuHrefLevel3 = programHref;
			arrayMenuItemLevel3 = programMenuItem;
 			array3Length = programHref.length;
 			writeMenu3Level_sec(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
      break;

		case "online_advanced_index":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = advancedHref;
			arrayMenuItemLevel2 = advancedMenuItem;
 			array2Length = advancedHref.length;
 			writeMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;	

	case "online_advanced_windows_index":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = advancedHref;
			arrayMenuItemLevel2 = advancedMenuItem;
 			array2Length = advancedHref.length;
			arrayMenuHrefLevel3 = windowsHref;
			arrayMenuItemLevel3 = windowsMenuItem;
 			array3Length = windowsHref.length;
 			writeMenu3Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
 			break;
			
	 case "online_advanced_windows_sec":
	    arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = advancedHref;
			arrayMenuItemLevel2 = advancedMenuItem;
 			array2Length = advancedHref.length;
			arrayMenuHrefLevel3 = windowsHref;
			arrayMenuItemLevel3 = windowsMenuItem;
 			array3Length = windowsHref.length;
 			writeMenu3Level_sec(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
      break;

	case "online_advanced_matched_index":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = advancedHref;
			arrayMenuItemLevel2 = advancedMenuItem;
 			array2Length = advancedHref.length;
			arrayMenuHrefLevel3 = matchedHref;
			arrayMenuItemLevel3 = matchedMenuItem;
 			array3Length = matchedHref.length;
 			writeMenu3Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
 			break;
			
	 case "online_advanced_matched_sec":
	    arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = advancedHref;
			arrayMenuItemLevel2 = advancedMenuItem;
 			array2Length = advancedHref.length;
			arrayMenuHrefLevel3 = matchedHref;
			arrayMenuItemLevel3 = matchedMenuItem;
 			array3Length = matchedHref.length;
 			writeMenu3Level_sec(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length, arrayMenuHrefLevel3, arrayMenuItemLevel3, array3Length);
      break;

	case "online_trimedia_index":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = trimediaHref;
			arrayMenuItemLevel2 = trimediaMenuItem;
 			array2Length = trimediaHref.length;
 			writeMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;

	case "online_trimedia_sec":
		  arrayMenuHrefLevel1 = onlineHref;
			arrayMenuItemLevel1 = onlineMenuItem;
 			array1Length = onlineHref.length;
			arrayMenuHrefLevel2 = trimediaHref;
			arrayMenuItemLevel2 = trimediaMenuItem;
 			array2Length = trimediaHref.length;
 			writeTmMenu2Level(arrayMenuHrefLevel1, arrayMenuItemLevel1, array1Length, arrayMenuHrefLevel2, arrayMenuItemLevel2, array2Length);
 		break;


	
		  
    default:;
			break;
}/* end of switch */

//end hiding of script -->
