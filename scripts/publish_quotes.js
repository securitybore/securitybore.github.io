<!-- Hide script from old browsers

var quoteCount;

var quotes_tmf = new Array(17)
	
	quotes_tmf[0]= "Chris has the ability to take something complex and make it seem simple";	
	quotes_tmf[1]= "The training was one of the most deeply insightful and technical ones.I enjoyed it a lot";
	quotes_tmf[2]= "Great training, nicely optimized for our questions.Can't wait to get my hands on some real stuff";
	quotes_tmf[3]= "Although almost new to TriMedia I really loved being trained by such a nice team - not \"boring\" at all!";
	quotes_tmf[4]= "I was looking forward to 2-weeks of training to get me started on the right track. I was not disappointed! Excellent presentation and level of preparation by the training team. Congratulations";
	quotes_tmf[5]= "Absolutely wonderful. Thanks so much for your preparation and enthusiasm.You guys are a great team";
	quotes_tmf[6]= "Covered lots of material in a clear and concise manner";
	quotes_tmf[7]= "Very useful material well explained";
	quotes_tmf[8]= "Excellent course and well structured. Chris made the course interesting with his teaching methods and jokes";
	quotes_tmf[9]= "Very interesting. Who is able to clone Dr Bore to give NXP more people to support TriMedia?";
	quotes_tmf[10]= "Now I shall start understanding what TriMedia embedded system is...";
	quotes_tmf[11]= "Strong background, well documented, many examples, and this unforgettable and so British sense of humour. Thanks";	
	quotes_tmf[12]= "Very interesting, even when starting from scratch. Two enjoyable days.";	
	quotes_tmf[13]= "Excellent. Well studied and very informative. It re-inforced the important concepts of the software component module taught at CISM Kingston University.";	
	quotes_tmf[14]= "It was an exploring training in TriMedia architecture which will help us to put efforts in the right direction";
	quotes_tmf[15]= "Very helpful in-depth presentation of all TriMedia related topics such as hardware, software architecture and optimization techniques.";
	quotes_tmf[16]= "Very interesting and very well explained even for a beginner.";

var attribute_tmf = new Array(17)

	attribute_tmf[0]="R de Jong, NXP Semiconductors, Eindhoven";
	attribute_tmf[1]="M Ozturk, NXP Semiconductors, Turkey";
	attribute_tmf[2]="R Jansen, NXP Semiconductors, The Netherlands";
	attribute_tmf[3]="S Fumagalli, NXP Semiconductors, Italy";
	attribute_tmf[4]="Dr S Velastin, Reader Kingston University, London";
	attribute_tmf[5]="T Shirley, Consultant USA";
	attribute_tmf[6]="M Underwood, NXP Semiconductors, UK";
	attribute_tmf[7]="S James, NXP Semiconductors, UK";
	attribute_tmf[8]="B Battu, NXP Semiconductors, UK";
	attribute_tmf[9]="M Vinez, Arrow, France";
	attribute_tmf[10]="P Kuo, Kingston University London";
	attribute_tmf[11]="A Lepine, NXP Semiconductors, France";
	attribute_tmf[12]="H Bus, Roax, The Netherlands";
	attribute_tmf[13]="Dr S Khaddaj, Kingston University London";
	attribute_tmf[14]="N D Chorge, NXP Semiconductors, India";
	attribute_tmf[15]="R Maillard, NXP Semiconductors, France";
	attribute_tmf[16]="J Cobb, Kingston University London";

var quotes_dsp = new Array(7)
	
	quotes_dsp[0]= "Chris has the ability to take something complex and make it seem simple";	
	quotes_dsp[1]= "The training was one of the most deeply insightful and technical ones.I enjoyed it a lot";
	quotes_dsp[2]= "Great training, nicely optimized for our questions.Can't wait to get my hands on some real stuff";
	quotes_dsp[3]= "Excellent course and well structured. Chris made the course interesting with his teaching methods and jokes";	
	quotes_dsp[4]= "Absolutely wonderful. Thanks so much for your preparation and enthusiasm.You guys are a great team";
	quotes_dsp[5]= "Covered lots of material in a clear and concise manner";
	quotes_dsp[6]= "Very useful material well explained";	

var attribute_dsp = new Array(7)

	attribute_dsp[0]="R de Jong, NXP Semiconductors, Eindhoven";
	attribute_dsp[1]="M Ozturk, NXP Semiconductors, Turkey";
	attribute_dsp[2]="R Jansen, NXP Semiconductors, The Netherlands";
	attribute_dsp[3]="B Battu, NXP Semiconductors, UK";
	attribute_dsp[4]="T Shirley, Consultant USA";
	attribute_dsp[5]="M Underwood, NXP Semiconductors, UK";
	attribute_dsp[6]="S James, NXP Semiconductors, UK";
	

function chooseQuote(quote_type){

	var quote;
	var attribute;

	switch(quote_type){

		case "tmf":

			quoteCount = quotes_tmf.length;

			if(quoteCount > 1) {

				randomNumber = Math.floor((Math.random() * quoteCount));

				quote = "<div class=\"quote\"><p>" + quotes_tmf[randomNumber];
				attribute = "<br /><span class=\"attribute\">" + attribute_tmf[randomNumber] + "</span></p></div>";

				document.write(quote);
				document.write(attribute);
			}
			else {
				document.write("<p>Chris has the ability to take something complex and make it seem simple"); 
				document.write("<br />R de Jong, NXP Semiconductors, Eindhoven</p>"); 
			}
		break;

		case "tmf_rj":

			quoteCount = quotes_tmf.length;

			if(quoteCount > 1) {

				randomNumber = Math.floor(((Math.random() * (quoteCount-1))+1));

				quote = "<div class=\"quote\"><p>" + quotes_tmf[randomNumber];
				attribute = "<br /><span class=\"attribute\">" + attribute_tmf[randomNumber] + "</span></p></div>";

				document.write(quote);
				document.write(attribute);
			}
			else {
				document.write("<p>Absolutely wonderful. Thanks so much for your preparation and enthusiasm.<br />You guys are a great team"); 
				document.write("<br />T Shirley, Consultant USA</p>"); 
			}
		break;

		case "dsp":

			quoteCount = quotes_dsp.length;

			if(quoteCount > 1) {

				randomNumber = Math.floor((Math.random() * quoteCount));

				quote = "<div class=\"quote\"><p>" + quotes_dsp[randomNumber];
				attribute = "<br /><span class=\"attribute\">" + attribute_dsp[randomNumber] + "</span></p></div>";

				document.write(quote);
				document.write(attribute);
			}
			else {
				document.write("<p>Chris has the ability to take something complex and make it seem simple"); 
				document.write("<br />R de Jong, NXP Semiconductors, Eindhoven</p>"); 
			}
		break;

		case "dsp_rj":

			quoteCount = quotes_dsp.length;

			if(quoteCount > 1) {

				randomNumber = Math.floor(((Math.random() * (quoteCount-1))+1));

				quote = "<div class=\"quote\"><p>" + quotes_dsp[randomNumber];
				attribute = "<br /><span class=\"attribute\">" + attribute_dsp[randomNumber] + "</span></p></div>";

				document.write(quote);
				document.write(attribute);
			}
			else {
				document.write("<p>Absolutely wonderful. Thanks so much for your preparation and enthusiasm.<br />You guys are a great team"); 
				document.write("<br />T Shirley, Consultant USA</p>"); 
			}
		break;

		case "comments":

			var i;
			quoteCount = quotes_tmf.length;

			if(quoteCount > 1) {
		
				for(i=0; i<quoteCount; i++){

					quote = "<div class=\"quote\"><p>" + quotes_tmf[i];
					attribute = "<br /><span class=\"attribute\">" + attribute_tmf[i] + "</span></p></div>";

					document.write(quote);
					document.write(attribute);
				}
			}
			else {
				document.write("<p>Chris has the ability to take something complex and make it seem simple"); 
				document.write("<br />R de Jong, NXP Semiconductors, Eindhoven</p>"); 
			}
		break;

		default:	
			document.write("<p>Although almost new to TriMedia I really loved being trained by such a nice team<br />- not \"boring\" at all!"); 
			document.write("<br />S Fumagalli, NXP Semiconductors, Italy</p>"); 
		break;

		



	}
}

chooseQuote(quote_type);

// End hiding from old browsers -->