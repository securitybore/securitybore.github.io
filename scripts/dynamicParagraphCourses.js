<!--Hide script from old browsers
function dynamicParagraphCourses(paragraph) {

	document.write(paragraph);
}

switch(paragraph) {
//*****************************index pages**********************
//*************************************************************
	case "index_courses_description":
		paragraph = "<p>We offer two types of class:</p><p><strong>Foundation classes </strong>are 'pre-packaged classes which offer a thorough treatment of all aspects of a field. They are planned based on our experience of the things that people need to know.</p><p><strong>'Pic'N'Mix' classes</strong> focus on one aspect of a field. You can 'Pic'N'Mix these classes to tailor a custom class to fit your specific need.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "index_DSP_description" :
		paragraph = "<p>We teach how and why DSP is used in practical applications and focus on practical questions. Many people find our approach easy because our teaching does not rely on math. We use it when it is helpful, and also explain where and why and how the math breaks down and what to do about it in practice. This can often avoid or resolve problems that otherwise seem impossible. </p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "index_tm_description" :
		paragraph = "In our TriMedia classes we clarify and explain how the TriMedia family of Media Processors work and how they are applied. We cover every aspect of TriMedia - the core, cache, peripherals, System on Chip architecture, software architecture and optimization strategies. They will enable you to work efficiently and effectively and to get the most out of the TriMedia processor.</p> ";
		dynamicParagraphCourses(paragraph);
		break;
//++++++++++++++++++++++++++++++++++++
//++++++++++++Chris+++++++++++++++++++++
	case "index_nexperia_description" :
		paragraph = " In our Nexperia classes we explain how to program platforms based on the Philips Nexperia architectures. This includes the STB810 and STB225 IP-STB platform. The classes are aimed at developers who will use the platforms to develop products, to add middleware or to add new components.</p> ";
		dynamicParagraphCourses(paragraph);
		break;
//++++++++++++++++++++++++++++++++++++
//++++++++++++Chris+++++++++++++++++++++
	case "index_UHAPI_description" :
		paragraph = " We explain and clarify all aspects of UHAPI, focusing on how to implement it on your own platform. When you complete this class you will be ready to satrt productive work implementing or extending your own UHAPI patform.</p> ";
		dynamicParagraphCourses(paragraph);
		break;
//benefits
	case "index_courses_benefits" :
		paragraph = "<p>With years of experience and good skills at communicating, we will get you up to speed fast. We provide excellent notes, which include full color copies of the class slides, sumarising bulleted notes and full written notes. We show you insights, understanding and practical tips that would take months to gain and can correct misunderstandings that might cost months of delay.</p><p> In <a href=\"courses/feedback.htm\" target='_new'>customer recommendations</a> 99% of customers rate our seminars as '<strong>good</strong>' to '<strong>excellent</strong>' for content, presentation and quality of course notes.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "index_DSP_benefits" :
		paragraph = "<p>Many people comment that in a few days they understand things that have confused them for many years. In <a href=\"courses/feedback.htm\" target='_new'>customer recommendations</a> 99% of customers rate our seminars as '<strong>good</strong>' to <strong>excellent</strong>' for:<ul><li>content</li><li>presentation</li><li>quality of course notes</li></ul></p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "index_tm_benefits" :
		paragraph = "In our TriMedia classes we clarify and explain how the TriMedia family of Media Processors work, and how they are applied: we cover every aspect of TriMedia - the core, cache, peripherals, System on Chip architecture, software architecture and optimization strategies. They will enable you to work efficiently and effectively.";
		dynamicParagraphCourses(paragraph);
		break;
//contents
	case "index_courses_contents" :
		paragraph = "<p>Class are offerred in the following areas: &nbsp; &nbsp;<a href=\"javascript:newWindow('w_index_DSP.htm', 'description')\">DSP</a> | <a href=\"javascript:newWindow('w_index_tm.htm', 'description')\">TriMedia</a> |  <a href=\"javascript:newWindow('w_index_nexperia.htm', 'description')\">Nexperia</a>  |  <a href=\"javascript:newWindow('w_index_UHAPI.htm', 'description')\">UHAPI</a></p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "index_DSP_contents" :
		paragraph = "<p><a href=\"javascript:newWindow('courses/w_DSP_foundation.htm', 'description')\">DSP Foundation</a> : a 4-day class which teaches you to apply DSP to real world design problems, make well informed choices and write DSP programs.</p><p><a href=\"javascript:newWindow('courses/w_Introduction_to_DSP.htm', 'description')\">Introduction to DSP</a>: a 1-day class which explains DSP including its advantages, applications and limitations.</p><p><a href=\"javascript:newWindow('courses/w_FIR_filters.htm', 'description')\">FIR filters</a>: a 1-day class which explains how FIR digital filters are used and how to implement them efficiently on DSP hardware.</p><p><a href=\"javascript:newWindow('courses/w_IIR_filters.htm', 'description')\">IIR filters</a>: a 1-day class which covers how IIR filters are designed and how to resolve problems when implementing them on real hardware.</p><p><a href=\"javascript:newWindow('courses/w_DSP_programming.htm', 'description')\">DSP programming</a> : a 1-day class where you learn to write C programs that relate well to DSP operations, that will run efficiently when compiled for DSP hardware.</p><p><a href=\"javascript:newWindow('courses/w_DSP_cache_optimization.htm', 'description')\">DSP cache architectures and optimization</a> : a 1-day class to learn how to write programs that use cache architectures efficiently and how to avoid common pitfalls.</p><p><a href=\"javascript:newWindow('courses/w_DSP_software_component_architecture.htm', 'description')\">DSP software component architecture</a> : a 1-day class where you will learn to design, specify and use component-based software architectures for DSP and streaming media applications in this 1-day class.</p><p><a href=\"javascript:newWindow('courses/w_DSP_streaming_media_API_usability.htm', 'description')\">API usability for DSP</a> : a 1-day class which teaches you to assess the usability of an API, to design more usable APIs and to discuss API usability in a well-informed way.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "index_tm_contents" :
		paragraph = "<p><a href=\"javascript:newWindow('courses/w_TriMedia_foundation.htm', 'description')\">TriMedia foundation</a> : a 4-day class after which engineers and programmers can immediately start work building TriMedia systems that are well designed and efficient.</p><p><a href=\"javascript:newWindow('courses/w_TriMedia_system.htm', 'description')\">TriMedia system architecture</a>: a 1-day class to learn how all the parts of TriMedia - software, hadware, SoC issues - fit together and should be used.</p><p><a href=\"javascript:newWindow('courses/w_TriMedia_TSA.htm', 'description')\">TriMedia Software Architecture class</a>: a 1-day class in which you will learn to build systems from components and work effectively with TriMedia's software layers</p><p><a href=\"javascript:newWindow('courses/w_TriMedia_peripherals.htm', 'description')\">TriMedia peripheral architecture class</a>: a 1-day class after which you will know how to use TriMedia peripherals and how to write new device drivers including interrupt handlers.</p><p><a href=\"javascript:newWindow('courses/w_TriMedia_core.htm', 'description')\">TriMedia CPU core</a> : a 1-day class which will teach you to take full advantage of the TriMedia core. You will use compilation tools, profile and schedule reports to guide you to write more efficient programs.</p><p><a href=\"javascript:newWindow('courses/w_TriMedia_optimization_basic.htm', 'description')\">TriMedia Optimization - basic</a> : a 1-day class where you will learn to increase the speed and reduce the size of TriMedia programs by applying simple and straightforward strategies that work.</p><p><a href=\"javascript:newWindow('courses/w_TriMedia_optimization_advanced.htm', 'description')\">TriMedia Optimization - advanced</a> : a 4-day class where you will learn advanced optimization techniques and strategies that can work even in difficult cases.</p><p><a href=\"javascript:newWindow('courses/w_TriMedia_TSSA4.htm', 'description')\">TriMedia TSSA 4</a> : a 1-day class about the TSSA 4 software architecture. You will learn how to write wrappers to make earlier TSSA components usable in TSSA4.</p><p><a href=\"javascript:newWindow('courses/w_TriMedia_for_managers.htm', 'description')\">TriMedia for managers</a> : a 1-day seminar in which you will learn enough to be well-informed in discussions and evaluation enabling you to make sensible decisions and recommendations for TriMedia's proper use.</p><p><a href=\"javascript:newWindow('courses/w_TriMedia_for_sales_people.htm', 'description')\">TriMedia for sales people and FAEs</a> : a 1-day seminar which will help you understand TriMedia and its aims, so you can match customer requirements to TriMedia solutions and jstify your proposals.</p><p><a href=\"javascript:newWindow('courses/w_nexperia_pnx1300_peripheral_architecture.htm', 'description')\">Nexperia pnx1300 peripherals</a> : a 1-day class about the pnx1300 peripherals and co-processors and how to program them using device libraries and interrupt service routines</p><p><a href=\"javascript:newWindow('courses/w_nexperia_pnx1500_peripheral_architecture.htm', 'description')\">Nexperia pnx1500 peripherals</a> : a 1-day class about the pnx1500 peripherals and co-processors and how to program them using device libraries and interrupt service routines</p><p><a href=\"javascript:newWindow('courses/w_nexperia_pnx1300_video_programming.htm', 'description')\">Nexperia pnx1300 video programming</a> : a 2-day class where you will learn how to program the pnx1300 and to use the video I/O, working directly at the Device Layer without the streaming software architecture</p><p><a href=\"javascript:newWindow('courses/w_TriMedia_tm2270_CPU_core.htm', 'description')\">TriMedia tm2270 CPU core</a> : a 1-day class where you will learn about the tm2270 TriMedia core, understand its innovative features and how to take full advantage of them.</p><p><a href=\"javascript:newWindow('courses/w_TriMedia_tm5250_CPU_core.htm', 'description')\">TriMedia tm5250 CPU core</a> : a 1-day class where you will learn about the tm5250 TriMedia core, the new TMA3 TriMedia core architecture and how it can speed up H.264.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "index_nexperia_contents" :
		paragraph = "<p><a href=\"javascript:newWindow('courses/w_nexperia_stb810.htm', 'description')\">Programming the STB810</a> : a 4-day class where you will learn to program the Philips Nexperia STB810 IP-STB platform.</p>"
		dynamicParagraphCourses(paragraph);
		break;
	case "index_UHAPI_contents":
		paragraph = "<p><a href=\"javascript:newWindow('courses/w_UHAPI_using_the_universal_home_API.htm', 'description')\">Using the UHAPI</a> : a 2-day class where you will learn hot to program the UHAPI properly, to build products and middleware that are robust and readily maintained.</p><p><a href=\"javascript:newWindow('courses/w_UHAPI_implementing_the_universal_home_API.htm', 'description')\">Implementing the UHAPI</a> : a 2-day class after which you will be ready to start productive work implementing or extending your own UHAPI platform.</p>";
		dynamicParagraphCourses(paragraph);
		break;
//information
	case "Class_information_index" :
		paragraph = "Class can be offered 'on site' anywhere in the world, which saves attendees the hassle of expensive and time consuming travel. We also schedule open classes for individuals who would like to attend.<p> <strong>Download:</strong>&nbsp; &nbsp;<a href=\"javascript:newWindow('courses/files/class_brochure.pdf', 'pdf')\">brochure</a> |  <a href=\"javascript:newWindow('courses/files/BORES_class_booking_form.pdf', 'pdf')\">booking form</A> &nbsp; &nbsp; <strong> Look at: </strong>&nbsp; &nbsp; <a href=\"javascript:newWindow('courses/w_prices.htm', 'prices')\">prices</a> | <a href=\"javascript:newWindow('schedule.htm', 'course_details')\">schedule</a>";
		dynamicParagraphCourses(paragraph);
		break;
//*********************************************************************************************
//***************************** class benefits paragraphs in alphabetical order************************
//********************************************************************************************
//********************************************************************************************
	case "DSP_cache_optimization_benefits" :
		paragraph = "In this class we describe and explain cache architectures and their impact on program execution speed. We also explain the question of 'cache coherency' which can be a problem when peripherals bypass the cache to access memory directly. You will learn to write programs that use the cache architecture efficiently and avoid the common pitfalls. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/DSP_cache_optimization.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a></p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "DSP_foundation_benefits" :
		paragraph = "DSP lets you build better, cheaper, more robust designs: but there is a lot to learn and it is often hidden behind academic mathematics. In this class you will learn the why, what and how of DSP, filters and programming - and how to apply that knowledge in making well-informed design choices. Engineers and programmers working with DSP get started quicker and work more productively, with clarity and understanding, thanks to the insights offered by this 4-day foundation class. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/DSP_foundation.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a></p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "DSP_programming_benefits" :
		paragraph = "In this class you will learn to relate C programming to the DSP operations that are being implemented. We particularly look at their efficiency and appropriateness, which will enable you to write better DSP programs.  &nbsp; &nbsp; <a href=\"javascript:newWindow('files/DSP_programming.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a></p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "DSP_streaming_media_API_usability_benefits" :
		paragraph = "In this class we discuss the measure of 'usability' for an API in terms of the time it takes to learn about it and to complete tasks using it. We outline simple but effective ways to assess the relative usability of and API, and set out guidelines for designing with usability in mind. You will be learn to objectively assess API's when deciding which one will best suit your application, and to specify and design more usable APIs. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/DSP_software_component_architecture.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a></p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "DSP_software_component_architecture_benefits" :
		paragraph = "In this class we explain the fundamental principles of software component-based architectures, especially for DSP and streaming media processing. We introduce models for implementation including embedded COM and we give guidelines for decomposing an application into components. You will learn to design, specify and use component-based architectures for DSP and straming media applications. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/DSP_software_component_architecture.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a></p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "Introduction_to_DSP_benefits" :
		paragraph = "Get started quickly, make well-informed DSP design choices, and  implement DSP programs correctly and efficiently, thanks to the insights and understanding we give you through this well-established 1-day seminar. This seminar is unique in offering real insight and depth of knowledge, without getting bogged down in unnecessary formal mathematical proofs and derivations. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/Introduction_to_DSP.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "FIR_filters_benefits" :
		paragraph = "Understand how and why to use FIR digital filters, and how to program them on DSP hardware efficiently, through the clear and practical insights offered by this 1-day seminar. FIR digital filters are often misunderstood and even more often inefficiently implemented. In this very practical seminar we show you how FIR filters are designed and used, and how to program them efficiently in C and in typical DSP assembly language. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/FIR_filters.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "IIR_filters_benefits" :
		paragraph = "Avoid the common disasters encountered by naive IIR filter designers, understand how IIR filters are designed, and learn to control problems when implementing on real hardware, through our clear and practical 1-day seminar presentation. IIR filters are prone to really horrid failures. when implemented. Many texts ignore the problems of implementation, even though these can lead to catastrophic failure. We focus on implementation issues, and explain how to avoid the common pitfalls. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/IIR_filters.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "Introduction_to_TriMedia_benefits" :
		paragraph = "Introducing TriMedia' is a 2-day 'on-site insight' seminar for programmers working with chips based on the TriMedia programmable core. Inter-disciplinary teams working with TriMedia will work together more productively, and understand each other&#146;s work better, through insights offered by this introductory seminar series. TriMedia is a powerful processor capable of supporting large and complex multimedia applications: teams working on different aspects benefit from a common understanding, which this seminar offers. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/Introduction_to_TriMedia.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "nexperia_stb810_benefits" :
		paragraph = "This is a 4-day class which explains how to program the NXP STB810 IP-TV platform. The class is aimed at developers who will use the STB810 to develop products, to add middleware or to add new media components.. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/nexperia_stb810.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "stb225_benefits" :
		paragraph = "This is a 5-day master class with an emphasis on 'hands-on'. You will learn how to set up a Linux PC for STB225 development; install the software and how to write and compile new programs. The class is aimed at developers who will use the STB225 to develop products, to add middleware or to add new media components.. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/stb225.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "nexperia_pnx1300_peripheral_architecture_benefits" :
		paragraph = "This 1-day class describes the Nexperia pnx1300 peripheral architecture and explains how peripherals are configured and programmed. It also includes explanation of basic digital video and sampling schemes, as used in video peripherals. You will understand and know how to program the pnx1300 peripherals using device libraries and interrupt service routines. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/nexperia_pnx1300_periperhal_architecture.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "nexperia_pnx1300_video_programming_benefits" :
		paragraph = "This 2-day class explains how to program the pnx1300 Media Processor and to use its video I/O peripherals. It focuses on direct C programming at the Device Layer, without using the higher-layer Streaming Software Achitecture or TriMedia Operating System. It also outlines basic digital video and sampling schemes as used in the video peripherals. This is a self-contained class and specific to people who want to use this device but do not wish to use the streaming software architecture. You will learn how to program the pnx1300 and to use the video I/O, working directly at the Device Layer, without the streaming software architecture. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/nexperia_pnx1300_video_programming.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "nexperia_pnx1500_peripheral_architecture_benefits" :
		paragraph = "This 1-day describes the Nexperial pnx1500 peripheral architecture and explains how peripherals are configured and programmed. It also includes explanation of basic digital video and sampling schemes, as used in the video peripherals. You will learn all about the pnx1500 peripherals and co-processors, and be able to program them using device libraries and interrupt service routines. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/nexperia_pnx1500_peripheral_architecture.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	
	case "TriMedia_cache_benefits" :
		paragraph = "'An advanced 1-day class describing and explaining the cache architecture used in the TriMedia CPU core, used in the pnx1300 and pnx1500 Media Processors.&nbsp; &nbsp; <a href=\"javascript:newWindow('files/TriMedia_cache.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_core_benefits" :
		paragraph = "This 1-day class describes the TriMedia CPU core and explains both why it was made this way and how to get the best performance from it. It includes basic understanding of how to generate, read and use schedule and profile reports to guide better and more eficient programming. This will enable you to take full advantage of the TriMedia core. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/TriMedia_core.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_for_managers_benefits" :
		paragraph = "If you want to make decisions about which technology to choose from a position of knowledge, then this is the class for you. In this 1-day executive summary we explain the TriMedia system in its proper context. We make it clear what the TriMedia can do, why it is designed this way and how best to use it. You will be well-informed enough to be able to participate in discussions and evaluations, and to make sensible decisions and recommendations. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/TriMedia_for_managers.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_for_sales_people_benefits" :
		paragraph = "This class equips sales people and FAEs to analyze and evaluate customer requirements and then suggest and demonstrate TriMedia-based solutions. You will be able to justify the TriMedia design choice and explain and demonstrate the TriMedia tools. &nbsp; &nbsp; <a href=\"javascript:newWindow('files/TriMedia_for_sales_people.pdf', 'pdf')\">brochure</a>  |  <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_foundation_benefits" :
		paragraph = "A 4-day intensive class for engineers and programmers working with chips based on the TriMedia programmable core: including the pnx1300, pnx1500 and pnx8550 Nexperia Media Processors. &nbsp; &nbsp;  <a href=\"javascript:newWindow('files/TriMedia_foundation.pdf' , 'pdf')\">brochure</a> | <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_optimization_basic_benefits" :
		paragraph = "A 1-day class which introduces the basic optimization techniques and tools. You will learn to increase the speed and reduce the size of TriMedia programs, by applying simple strategies that work. &nbsp; &nbsp;  <a href=\"javascript:newWindow('files/TriMedia_optimization_basic.pdf' , 'pdf')\">brochure</a> | <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_optimization_advanced_benefits" :
		paragraph = "A 4-day class wich progressively introduces optimization strategies, illustrated through 'hands-on' exercises. You will master advanced optimization techniques that can work even in difficult applications. &nbsp; &nbsp;  <a href=\"javascript:newWindow('files/TriMedia_optimization_advanced.pdf' , 'pdf')\">brochure</a> | <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_peripherals_benefits" :
		paragraph = "A 1-day class which describes and explains TriMedia peripheral architecture and shows how peripherals are configured and programmed. This includes interrupt handling. After this seminar you will know how to use TriMedia peripherals and how to write new device drivers including interrupt handlers. &nbsp; &nbsp;  <a href=\"javascript:newWindow('files/TriMedia_peripherals.pdf' , 'pdf')\">brochure</a> | <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_system_benefits" :
		paragraph = "In this 1-day class we explaing the TriMedia system in its proper context and make clear what it can do, why it is designed this way and how best to use it. This gives a solid basis from which to learn about specific aspects of the system. &nbsp; &nbsp;  <a href=\"javascript:newWindow('files/TriMedia_system.pdf' , 'pdf')\">brochure</a> | <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_TSA_benefits" :
		paragraph = "In this 1-day class we explain the TriMedia Streaming Software Architecture including software components, data packets, and connections. You will learn to build systems from components, make new components and work effectively with TriMedia'a software layers. &nbsp; &nbsp;  <a href=\"javascript:newWindow('files/TriMedia_TSA.pdf' , 'pdf')\">brochure</a> | <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_tm2270_CPU_core_benefits" :
		paragraph = "In this 1-day class you will learn about the tm2270 TriMedia core, understand its innovative features and how to take full advantage of them. &nbsp; &nbsp;  <a href=\"javascript:newWindow('files/TriMedia_tm2270_CPU_core.pdf' , 'pdf')\">brochure</a> | <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_tm5250_CPU_core_benefits" :
		paragraph = "In this 1-day class you will learn about the nre generation tm5250 TriMedia core. You will understand its innovative features and how to take full advantage of them. &nbsp; &nbsp;  <a href=\"javascript:newWindow('files/TriMedia_tm5250_CPU_core.pdf' , 'pdf')\">brochure</a> | <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_TSSA4_benefits" :
		paragraph = "In this 1-day class we describe and explain the new TSSA 4 standard for TriMedia Streaming Software Architecture including software components, data packets and connections. You will be able to write wrappers to make earlier TSSA components usable in TSSA 4. &nbsp; &nbsp;  <a href=\"javascript:newWindow('files/TriMedia_TSSA4.pdf' , 'pdf')\">brochure</a> | <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "UHAPI_implementing_the_universal_home_API_benefits" :
		paragraph = "after this 2-day class you will be ready to start productive work implementing or extending your own UHAPI platform. It is aimed at engineers and managers involved in implementing or adding to a UHAPI platform. &nbsp; &nbsp;  <a href=\"javascript:newWindow('files/UHAPI_implementing_the_universal_home_API.pdf' , 'pdf')\">brochure</a> | <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
	case "UHAPI_using_the_universal_home_API_benefits" :
		paragraph = "In this 2-day class we explain and clarify all aspects of UHAPI. You will learn how to program the UHAPI properly to build products and middleware that are robust and readily maintained . &nbsp; &nbsp;  <a href=\"javascript:newWindow('files/UHAPI_using_the_universal_home_API.pdf' , 'pdf')\">brochure</a> | <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a>";
		dynamicParagraphCourses(paragraph);
		break;
// ********************class contents paragraphs in alphabetical order****************
//***************************************************************************
	case "DSP_cache_optimization_contents" :
		paragraph = "<h3>Class content:</h3><p>We cover : the background to cache architecture design and how you can take advantage of them; cache coherency and how to dope with it; cache mapping and compromises that have to be accepted and their impact on performance; how a cache handles cache hits and cache misses and how to measure the delays that this involves; tools to measure and estimate the effects of the cache; how to make the best use of caches by data organization and program design.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "DSP_foundation_contents" :
		paragraph = "<h3>Class content:</h3><p>In this class we show why, when and how to apply DSP in real practical situations. The class offers insight and understanding without getting bogged down inmath. We take a practical approach, considering from the outset computational load and limitations of implementation on real hardware.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "DSP_programming_contents" :
		paragraph = "<h3>Class content:</h3><p>We cover; DSP data types and math; the C operators most used in DSP, their order of evaluation and how they relate to typical DSP hardware; DSP hardware and compilers and what techniques make sense for each. Using example programs that implement common DSP functions, we start with an initial version and step through the various stages of optimization. At each stage we explain the compromises and advantages of the optimizations being implemented.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "DSP_software_component_architecture_contents" :
		paragraph = "<h3>Class content:</h3><p>We cover: the basis for software component architectures and the different models that can be applied; the separation of specification from implementation by the use of interfaces and how this allows component re-use; a model for an embedded implementation of Microsfot's Component Object Model (COM) and a comparisson of this with other component models; an implementation of DSP/streaming media component model - the Universal Home API (UHAPI).</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "DSP_streaming_media_API_usability_contents" :
		paragraph = "<h3>Class content:</h3><p>We cover: what is meant by suability, how to measure it quickly and how to use this information; how usability is measured and relate this to traditional quidelines on programming style; Cognitive Dimensions, what they are, how they are used and what their limitations are; guidelines for assessing usability and a simple way to quickly assess API usability; how to design a usable API following simple guidelines.";
		dynamicParagraphCourses(paragraph);
		break;
	case "IIR_filters_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>We focus on real-world implementations and the limitations and compromises that are forced on implementers by limited-precision hardware, and show useful principles and rules-of-thumb that lead to good designs.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "Introduction_to_DSP_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>In this class we explain DSP including its advantages, applications and limitations. We offer real understanding of the practice and limitations of converting analogue to digital signals; principles and applications of correlation and convolution; frequency spectrum analysis and the Fourier Transform; basics of digital filters and their application; and an initial introduction to digital filters and their design.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "FIR_filters_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>This class describes and explains how FIR digital filters are used, and also gives very clear and practical guidance in how to implement them efficiently on DSP hardware. We take the view that the aim is an efficient implementation, and show how this aim affects design choices throughout: this focus on implementation is a key feature of our presentation.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "Introduction_to_TriMedia_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>This class introduces the TriMedia processor core, peripherals and software architecture. It is designed as an introduction for team members working with TriMedia projects at all levels. The seminar offers insight and understanding into the elements of a TriMedia system and how they work together.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "nexperia_stb810_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>The STB810 software architecture and how to use it; DirectFB and VideoProviders; the media processing resource model; adding a new resource and VideoProvider; building resources, VideoProviders and applications; a sample application program.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "nexperia_pnx1300_peripheral_architecture_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>The basics of sampling schemes and storage formats; how vidoe data is stored by and for the pnx1300 video peripherals and co-porcessors; the pnx1300 video output peripheral as an example of a peripheral; the organization of peripheral software support, including the relationship to the TriMedia Software Architecture (TSA) Software layers; the important question of synchronizing the cache with data entered directly to memory by the peripherals (which bypasses the cache); the pnx1300 peripherals in detail.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "nexperia_pnx1300_video_programming_class_contents" :
		paragraph = "<h3>Class content:</h3><p>Programming the TriMedia core; how video data is stored by and for the pnx1300 video peripherals and co-processors; peripheral architecture; video input and output; the image co-processor; optimization.";
		dynamicParagraphCourses(paragraph);
		break;
	case "nexperia_pnx1500_peripheral_architecture_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>The organization of peripheral software support including the relationship to the TriMedia Software Architecture (TSA) and software layers; the important question of synchronizing the cache with data entered directly to memory by the peripherals (which bypasses the cache); in-depth look at pnx1500 peripherals.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_cache_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>Understanding the TriMedia cache is crucial to getting the best performance from the processor. Both data and instruction caches impact program speed: but the demands of cache optimization and global scheduling optimization often conflict and interact. This seminar describes and explains the TriMedia cache architecture including its optimization. This seminar describes the TriMedia data and instruction cache architectures and explains their impact on program execution speed: including the often-complex interaction between the demands of cache efficiency and of overall global scheduling optimization. It also explains the important question of &#145;cache coherency&#146;: how the operation of peripherals - which bypass the cache to access memory directly - can be controlled and synchronized.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_core_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>The design choices in the TriMedia CPU core; understanding of the challenges of parallel scheduling; the importance of the TriMedia instruction set for fast performance; how to use register-based design and the memory heirarchy; types and uses of functional units; basic optimization strategies; TriMedia compilation tools including profiling, debugging and simulation; basic cache architecture and its impact on performance and optimization; purpose and proper usage of custom operations.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_for_managers_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>The background to TriMedia's design; how the design choices relate to performance in particular new projects; how TriMedia software architecture speeds high-level product development and addresses problems of software re-use, maintenance and efficiency; how TriMedia fits into a System on Chip architecture and how a peripheral architecture can surround it; why the TriMedia CPU is designed this way, what it can do, how it is programmed and how its software toolchain works.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_for_sales_people_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>How TriMedia's design delivers performance with economy; how the design choices relate to performance in particular new projects; how TriMedia software architecture speeds high-level product development and addresses the problems of software re-use, maintenance and efficiency; how TriMedia fits into a System on Chip architecture and the benefits of its smart well-targeted set of peripherals; why the TriMedia CPU is designed the way it is, what it can do, how it is programmed and how its software tool chain works; how different groups of customers and supporters perceive TriMedia and its relation to competitive products; learn the facts that underline those perceptions. </p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_foundation_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>We focus on real-world implementations and the limitations and compromises that are forced on implementers by limited-precision hardware, and show useful principles and rules-of-thumb that lead to good designs.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_optimization_advanced_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>In-depth profiling to investigate program behaviour; using this knowledge to guide choices of optimization strategies; understanding levels of optimization; compiler optimizations; using pragmas and separately linked files to tune optimization; how to increase parallelism; how to eliminate memory accesses; progressively discover possibilities to use custom operations; how to monitor code size when optimizing; the effect of optimizing on code size and power consumption.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_optimization_basic_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>How CPU and chache architectures affect program behaviour and optimization; how to investigate program behaviour and choose optimizations; understanding levels of optimization; how and when to use compiler optimizations and what they do; investigating parallelism in code; how to eliminate memory accesses; how to use the cache optimally; how to use the register file efficiently; why, when and how to use custom operations</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_peripherals_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>The TriMedia peripheral architecture and the basic peripheral organization of some TriMedia based SoC devices; memory-mapped registers which configure and control peripherals; use of standard peripheral software support; how interrupts are configured and handled; synchronizing the cache with data entered directly to memory by peripherals; a complete worked example of peripheral programming, putting into practice all the things learnt during the class.</p>";
		dynamicParagraphCourses(paragraph);
		break;		
	case "TriMedia_tm2270_CPU_core_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>The TriMedia tm2270 core and the innovative features it introduces; the context and scope of the TriMedia architecture and how the design relates to its target applications; the new TMA3 TriMedia core architecture and how to apply it; how the TMA3 instruction set design increases speed for H.264 and learn to apply the new SIMD custom operations; the types of functional units available and their purpose; basic optimization strategies and how to measure functional unit usage and efficiency; how to use the TriMedia compilation tools, including profiling, debugging and simulation; the tm2270 cache architecture and its impact on performance and optimization; efficient strategies for optimization.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_tm5250_CPU_core_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>The context and scope of the TriMedia architecture and how the design relates to its target applications; the new TMA3 TriMedia core achitecture and how to apply it; how the TMA3 instruction set design increases speed for H.264; how to apply the new SIMD custom operations; types of functional units available and their purpose; basic optimization strategies and how to measure functional unit usage and efficiency; how to use the TriMedia compilation tools including for profiling, debugging and simulation; the tm5250 cache architecture and its impact on performance and optimization.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_system_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>The background to TriMedia's design driven by its desire for performance in certain applications; how the resulting design choices relate to performance; how TriMedia software architecture speeds high-leve product development and addresses problems of software re-use, maintenance and efficiency; how TriMedia fits into a System on Chip architecture and how a peripheral architecture can surround it; why the TriMedia CPU is deisgned this way, what it can do, how it is programmed and how its software tool chain works.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_TSA_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>The principles of the TriMedia software architecture including the evolution of different versions and their consequences for the programmer; how to use, configure and identify software components and build complete systems; use of connectors and components to build complete systems; the streaming Media Processing Tool Kit and be familiar with some example programs; how to define and use TriMedia software data packets; how to work at the Application Layer to make components that are efficient and that conform to the architecture rules; organization, distribution and use of component files and makefiles.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_TSSA4_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>The principles of the new TSSA 4 standard for TriMedia software architecture, including the evolution of different versions and their consequences for the programmer; how to use, configure and identify TSSA 4 components and build complete systems; how to define and use TSSA 4 software data packets; how to use TSSA 4 clocks for audio/video synchronisation; how to create and set up TSSA 4 components; writing wrappers for TSSA 1.5 and TSSA 1.4 components.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "UHAPI_implementing_the_universal_home_API_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>Explanation and clarification of all aspects of UHAPI, focusing on how to implement it on your own platform; use of worked examples on generic UHAPI platform; the concepts behind, and functions of, UHAPI in the contect of implementing or adding to a platform; generic UHAPI Software Development Kit as an example of a platform implementation; UHAPI components, their functionality and interfaces; implementation of some components and use cases.</p>";
		dynamicParagraphCourses(paragraph);
		break;
	case "UHAPI_using_the_universal_home_API_class_contents" :
		paragraph = "<h3>Class content:</h3> <p>The aims and design choices of the UHAPI architecture, in the proper context of designing a product of add-on; the concepts behind UHAPI demonstrated by programming examples; what to expect from a UHAPI Software Development Kit (SDK) and learn to use a generic PC-based UHAPI-PC SDK as an example of a platform implementation; in-depth study of some typical UHAPI components, their functionality and interfaces; work through a practical example application program.</p>";
		dynamicParagraphCourses(paragraph);
		break;
// ****************class contents list in alphabetical order***********************
//***********************************************************************
	case "DSP_cache_optimization_contents_list" :
		paragraph = "<ul><li>Purpose of a cache</li><li>Temporal and spatial locality</li><li>Cache coherency - invalidation and copyback</li><li>Cache mapping - direct mapped, associative and set associative</li><li>Sets and ways</li><li>Cache search mechanisms</li><li>Copy back and copy through</li><li>Cache hits and misses/dirty and invalid status</li><li>Pre-fetching, mini-caches and cache levels</li><li>Memory hierarchy</li><li>Using the register file</li><li>Data size and data organization</li><li>Cache lines, cache sets and ways</li><li>Optimizing for cache ways</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "DSP_foundation_contents_list" :
		paragraph = "<ul><li>DSP basics</li><li>Time domain processing</li><li>Frequency analysis</li><li>Fourier Transform limitations</li><li>FIR filter basics</li><li>FIR filter design</li><li>Windowing</li><li>FIR design by optimization</li><li>Practical limitations</li><li>IIR filter basics</li><li>Analysis of IIR filters</li><li>IIR filter design</li><li>Design workarounds</li><li>Rules of thumb</li><li>Debunking nonsense</li><li>Implementation and programming</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "DSP_programming_contents_list" :
		paragraph = "<p><ul><li>Data types and data structure</li><li>Arrays, data packets and complex numbers</li><li>Pointers and pointer arithmetic</li><li>Arithmetic, multiply/accumulate and logic</li><li>Traditional DSP hardware, VLIW and compliers</li><li>FIR programming with use of registers and pointers</li><li>Using DSP hardware parallelism</li><li>Pipelines and filters</li><li>Component-based models</li><li>FIR/IIR filtering</li><li>Generating and applying window functions</li></ul></p> ";
		dynamicParagraphCourses(paragraph);
		break;
	case "DSP_software_component_architecture_contents_list" :
		paragraph = "<ul><li>Principles of component models</li><li>Streaming media/connection management</li><li>Pipelines and filters</li><li>Buffering streaming data</li><li>Decomposition of an application</li><li>Component API usability</li><li>Contracts, interfaces/interface suites/interface naming and notifications</li><li>Pros and cons of embedded COM</li><li>COM function tables</li><li>Getting interfaces/standard interfaces/interface navigation</li><li>Implementing embedded COM/interface calls/component creation</li><li>UHAPI contect and scope</li><li>Use cases</li><li>Creating components</li><li>Implementation</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "DSP_streaming_media_API_usability_contents_list" :
		paragraph = "<ul><li>Usability - applied to an API/profiling API usability</li><li>Profiling API usability by observation</li><li>Cognitive dimensions</li><li>Simplicity, generality, clarity</li><li>The true aim of usability</li><li>Kernighan's guidelines</li><li>Programming style</li><li>API mapping to application</li><li>Measuring API generality/focus/simplicity/clarity</li><li>Layered APIs</li><li>Examples: UHAPI/TSSA</li><li>Logical decomposition</li><li>Choice of components</li><li>Infrastructure versus application</li><li>Layering and wrappers</li><li>Abstraction layers</li></ul> ";
		dynamicParagraphCourses(paragraph);
		break;
	case "Introduction_to_DSP_class_contents_list" :
		paragraph = "<ul><li>Background to DSP</li><li>DSP basics</li><li>Practical limitations</li><li>Time domain processing</li><li>Frequency analysis</li><li>Fourier Transform limitations</li><li>Windowing</li><li>Filtering</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "FIR_filters_class_contents_list" :
		paragraph = "<ul><li>FIR filter basics</li><li>Analysis of FIR filters</li><li>FIR filter design</li><li>Practical limitations</li><li>Windowing</li><li>FIR design by optimization</li><li>DSP processors</li><li>Implementation and programming</li></ul> ";
		dynamicParagraphCourses(paragraph);
		break;
	case "IIR_filters_class_contents_list" :
		paragraph = "<ul><li>IIR filter basics</li><li>Analysis of IIR filters</li><li>IIR filter design</li><li>IIR filter programming</li><li>Practical limitations</li><li>Design workarounds</li><li>Rules of thumb</li><li>Debunking nonsense</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "Introduction_to_TriMedia_class_contents_list" :
		paragraph = "<ul><li>Background to DSP</li><li>DSP basics</li><li>Practical limitations</li><li>Time domain processing</li><li>Frequency analysis</li><li>Fourier Transform limitations</li><li>Windowing</li><li>Filtering</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "nexperia_stb810_class_contents_list" :
		paragraph = "<ul><li>STB810 software architecture</li><li>DirectFB and VideoProviders</li><li>STB810 Resource Modules</li><li>Making STB810 VideoProviders</li><li>Adding a new Resource</li><li>Building resources, VideoProviders and aplications</li><li>Example programs</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "nexperia_pnx1300_peripheral_architecture_class_contents_list" :
		paragraph = "<ul><li>Pnx 1300 peripheral architecture</li><li>Pnx 1300 MMIO registers</li><li>Digital video </li><li>RGB/YUV color spaces/Raster scan sampling</li><li>Flicker and motion</li><li>Packed video storage</li><li>Video output features/overlay</li><li>Peripherals and TSA</li><li>Device Layer</li><li>Board Support Library</li><li>Configuration structures/functions</li><li>Interrupt handling/programming</li><li>Image co-processor</li><li>ICP overlay</li><li>Audio input and output</li><li>SPDIF output</li><li>SSI 12C/PCI and IXO</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;	
	case "nexperia_pnx1300_video_programming_class_contents_list" :
		paragraph = "<ul><li>CPU core and cache architecture</li><li>VLIW scheduling/schedule reports and profiling</li><li>RGB and YUV color spaces</li><li>Video fields and frames</li><li>Video sampling schemes</li><li>YUV 420 and 422/Planar and semi-planar storage</li><li>Device Layer conventions</li><li>Configuring peripherals/interrupts and handling interrupts</li><li>Pnx 1300 video input and output</li><li>Video input configuration</li><li>Sampling schemes and storage</li><li>Horizontal video scaling</li><li>Video overlay</li><li>Pnx1300 ICP and ICP configuration</li><li>Vertical and horizontal scaling</li><li>Compiler, register cache and scheudling optimization</li><li>Custom operations</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "nexperia_pnx1500_peripheral_architecture_class_contents_list" :
		paragraph = "<ul><li>Pnx 1500 peripheral architecture</li><li>Pnx 1500 MMIO registers</li><li>Peripherals and TSA</li><li>Device Layer</li><li>Board Support Library</li><li>Configuration structures/functions</li><li>Interrupt handling/programming</li><li>Data cache coherency and MMIO</li><li>Data cache copyback simulation</li><li>In-depth look at pnx1500 peripherals</li><li>Video Input Processor</li><li>Video scaling module</li><li>Auxillary video data extraction</li><li>Test pattern generator module</li><li>Fast generic Parallel input</li><li>Video Input Router</li><li>Video Composition Processor</li><li>Layers and composition</li><li>Video enhancement features</li><li>Video Output Router/LCD output<li>Memory based scalar</li><li>Scaling and conversion</li><li>2D Drawing engine</li><li>Audio/SPDIF input and output</li><li>General Purpose I/O</li><li>Signal generation/capture</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;	
	case "TriMedia_cache_class_contents_list" :
		paragraph = "<ul><li>Cache architecture</li><li>Cache mapping</li><li>Cache management</li><li>Cache simulation</li><li>Cache hits and misses</li><li>Cache coherency</li><li>Cache profiling</li><li>Optimization</li><li>Instruction cache</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_core_class_contents_list" :
		paragraph = "<ul><li>CISC, RISC and Superscalar</li><li>VLIW architecture</li><li>Parallel scheduling/program parallelism</li><li>Instruction set design/format</li><li>Registers and data format/Registers, cache and memory</li><li>CPU functional units/Measuring functional unit usage</li><li>TM32A, 3260, 3270, 5250, TM-Lite</li><li>The compilation tool chain</li><li>Decision trees and parllelism</li><li>Cache architecture overview</li><li>Using cache profile reports</li><li>Custom operations</li><li>SIMD operations</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_for_managers_class_contents_list" :
		paragraph = "<ul><li>Context and scope</li><li>Targeted applications</li><li>System design issues</li><li>System architecture choices</li><li>Software/CPU/System on Chip  architecture</li><li>Application/architecture mapping</li><li>Component architectures</li><li>Purpose and proper use of Layers</li><li>Streaming media toolkit</li><li>Operating system issues</li><li>Reasons for VLIW</li><li>TriMedia core design methods/functional units</li><li>Compilations tools</li><li>Optimization</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_for_sales_people_class_contents_list" :
		paragraph = "<ul><li>Context and scope</li><li>TriMedia core design/architectural choices</li><li>Importance of development time</li><li>Efficiency aim of Layers</li><li>Software/CPU/System on Chip  architecture</li><li>Examples applications</li><li>Component architectures</li><li>Sizing the application</li><li>DVC/MPEG-2/MPEG-4</li><li>Co-processors and peripherals</li><li>Benefits of smart peripherals</li><li>Focus on target applications</li><li>Reasons for VLIW</li><li>Sales versus customer views</li><li>Competition/target markets</li><li>Pros and cons of TriMedia tools</li><li>Third party network/technical support</li><li>Reputation and roadmap</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_foundation_class_contents_list" :
		paragraph = "<ul><li>TriMedia System architecture</li><li>TriMedia Software Architecture</li><li>CPU core architecture</li><li>System on Chip architecture</li><li>Optimization</li><li>Simulation and debugging</li><li>custom operations</li><li>cache architecture</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_optimization_advanced_class_contents_list" :
		paragraph = "<ul><li>Registers, cache, parallelism</li><li>Read and graph dtree code</li><li>Read and use schedule reports</li><li>Using the profiling API</li><li>Reduce memory traffic</li><li>Using the cache and registers efficiently</li><li>Get more from each issue slot</li><li>Unrolling, grafting and inlining</li><li>Profile-driven optimization</li><li>Investigating parallelism in code/barriers to parallelism</li><li>Memory latency</li><li>Avoiding implied memory loads</li><li>Using packed memory data</li><li>Cache spatial/temporal locality</li><li>Organize data for cache</li><li>REgister-to-register operations/monitoring register usage</li><li>Reducing code size</li><li>When not to optimize</li><li>Optimizing for power consumption</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_optimization_basic_class_contents_list" :
		paragraph = "<ul><li>CPU and cache architectures</li><li>Parallel scheduling</li><li>Tree code and parllelism</li><li>How to read and use schedule/profile reports</li><li>Increasing parallelism</li><li>Reducing memory traffic</li><li>Using cache/registers efficiently</li><li>Compiler optimization levels</li><li>Unrolling, grafting and inlining</li><li>Profile driven optimization</li><li>Pointer (and array) aliasing</li><li>Using packed memory data</li><li>Organising data for the cache</li><li>Register-to-register operations</li><li>Monitoring register usage</li><li>Custom operations/SIMD</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_peripherals_class_contents_list" :
		paragraph = "<ul><li>Pnx1300, 1500, 8550 peripheral architectures and peripherals</li><li>SoC memory maps</li><li>Peripheral MMIO registers</li><li>Peripherals and TSA</li><li>Device Layer</li><li>Board Support Layer</li><li>Configuration structures/functions</li><li>Interrupt architecture/configuration/programming/interrupts and decision trees</li><li>Data cache coherency and MMIO</li><li>Data cache copyback/invalidation</li><li>Cache handling in ISRs</li><li>Overview of VO peripheral</li><li>Video sampling formats</li><li>Device configurationfunction/setup</li><li>Video fields and frames</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_system_class_contents_list" :
		paragraph = "<ul><li>System architecture choices</li><li>Software/CPU core/System on chip architecture</li><li>Optimization and development tools</li><li>TriMedia system context</li><li>Platforms</li><li>Streaming media</li><li>Application/architecture mapping</li><li>TriMedia system/TriMedia software/component architecture</li><li>Purpose and proper use of layers</li><li>Streaming media toolkit</li><li>MPEG-2/4/Digital TV</li><li>Operating system issues</li><li>Development environment</li><li>Co-processors and peripherals</li><li>Examples of SoC devices</li><li>Reasons for VLIW</li><li>TriMedia core functional units</li><li>Profiling and schedule reporting</li><li>Optimization and the purpose of custom ops</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_tm2270_CPU_core_class_contents_list" :
		paragraph = "<ul><li>system context and scope</li><li>streaming media</li><li>TriMedia architecture - software and hardware architecture</li><li>SoC and CPU core architecture</li><li>TriMedia VLIW RISC architecture</li><li>TMA1 and TMA2</li><li>TMA3 architecture</li><li>cache architecture</li><li>instruction set design and format</li><li>custom operations and new TMA3 operations</li><li>unaligned load/store</li><li>new SIMD for H.264</li><li>CPU functional units - measuring usage</li><li>tm2270 functional units and load/store architecture</li><li>compilation too chain</li><li>schedule and profile reports</li><li>simulation and debugging</li><li>tm2270 data cache</li><li>software and hardware prefectch</li><li>region based prefetch</li><li>cache/scheduling/custom operation optimizations</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_tm5250_CPU_core_class_contents_list" :
		paragraph = "<ul><li>system context and scope</li><li>streaming media</li><li>TriMedia software/hardware/SoC/CPU core  architecture</li><li>TriMedia VLIW RISC architecture</li><li>TMA1 and TMA2</li><li>TMA3 architecture</li><li>cache architecture</li><li>CPU functional units and measuring their usage</li><li>tm5250 functional units and load/store architecture</li><li>compilation too chain</li><li>schedule and profile reports</li><li>simulation and debugging</li><li>cache architecture overview</li><li>tm5250 L1 and L2 cache</li><li>software and hardware prefetch</li><li>region-based prefetch</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_TSA_class_contents_list" :
		paragraph = "<ul><li>TSSA 1.6, 1.5, and 1.4</li><li>Operating layer/Operating System Abstraction</li><li>Application Layer</li><li>Component architecture/component configuration/component capabilities</li><li>AV synchronisation</li><li>Component connection</li><li>Packet queues and pools</li><li>Connection toolkit/InOutDescriptors</li><li>Media Processing Tool Kit/MPTK components</li><li>DV decoder</li><li>MPEG-2 deoding/MPEG-2 transport strea/MPEG-4 player</li><li>TriMedia data packets</li><li>Audio and video data formats</li><li>Purpose of the Application layer/Application Layer processing</li><li>Using the Default Layer/Using Device Libraries</li><li>Software environment/environment configuration</li><li>Component file organisation</li><li>Building an application</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "TriMedia_TSSA4_class_contents_list" :
		paragraph = "<ul><li>TSSA 1.6, 1.5, and 1.4</li><li>Operating layer/Operating System Abstraction</li><li>Application Layer</li><li>Component architecture/component configuration/component connection and connection pins</li><li>Packet queues and pools</li><li>Connection toolkit</li><li>Streaming interfaces</li><li>Connection sequence</li><li>TSSA 4 data packets</li><li>Audio and video data formats</li><li>TSSA4 clocks</li><li>A/V synchronization</li><li>Creating TSSA4 components</li><li>History of TSSA versions</li><li>TSSA 1.5 wrapper</li><li>Creating/Set up a component via wrappers</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "UHAPI_implementing_the_universal_home_API_class_contents_list" :
		paragraph = "<ul><li>UHAPI architecture concepts</li><li>The UHAPI component model</li><li>Role and implementation of uhCOM</li><li>UHAPI frameworks, platforms and SDK</li><li>An example UHAPI platform</li><li>Study of a UHAPI component</li><li>An example UHAPI application</li><li>UHAPI in overview</li><li>Streaming media</li><li>Use cases and supported use cases</li><li>Connection management</li><li>Components and Interfaces</li><li>UHAPI PC platforms and components</li><li>Component Object Model (COM)</li><li>System design issues</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
	case "UHAPI_using_the_universal_home_API_class_contents_list" :
		paragraph = "<ul><li>UHAPI architecture concepts</li><li>The UHAPI component model</li><li>UHAPI frameworks, platforms and SDK</li><li>Implementing UHAPI components</li><li>Making a connection manager</li><li>How to build Use Cases</li><li>An example UHAPI application</li><li>UHAPI in overview</li><li>Streaming media</li><li>Use cases and supported use cases</li><li>Connection management</li><li>Components and Interfaces</li><li>UHAPI PC platforms and components</li><li>Component Object Model (COM)</li><li>Implementation of uhCOM</li></ul>";
		dynamicParagraphCourses(paragraph);
		break;
// *****************************class recommendation paragraphs in alphabetical order***************
//******************************************************************************************
	case "Recommendation_for_1day_DSP_classes" :
		paragraph = "This can be taken as a 1-day class, but we recommend that it be taken as part of the 4-day '<a href=\"javascript:newWindow('w_DSP_foundation.htm', 'description')\">DSP foundation</a>' class which gives a thorough grounding in the principles and practice of DSP including both FIR and IIR filters.";
		dynamicParagraphCourses(paragraph);
		break;
	case "Recommendation_for_1day_DSP_classes_2" :
		paragraph = "This is a 1-day class. For a good grounding in the basics of DSP we recommend our 4-day '<a href=\"javascript:newWindow('w_DSP_foundation.htm', 'description')\">DSP foundation</a>' class which gives a thorough understanding of the principles and practice of DSP including both FIR and IIR filters.";
		dynamicParagraphCourses(paragraph);
		break;
//++++++++++++++++++++++++++++++++++++++++
//++++write recommendation for Introduction to TriMedia++++
//++++++++++++++++++++++++++++++++++++++++
	case "Recommendation_for_nexperial_stb810_class" :
		paragraph = "We also offer an in-depth TriMedia class <a href=\"javascript:newWindow('w_TriMedia_foundation.htm', 'description')\">TriMedia Foundation</a>  which includes in-depth treatment of programming the STB810's core TriMedia processor including optimization and profiling.";
		dynamicParagraphCourses(paragraph);
		break;
	case "Recommendation_for_uhapi_using_the_universal_home_API_class" :
		paragraph = "We also offer an in-depth TriMedia class <a href=\"javascript:newWindow('w_TriMedia_foundation.htm', 'description')\">TriMedia Foundation</a>  which includes in-depth treatment of programming the STB810's core TriMedia processor including optimization and profiling.";
		dynamicParagraphCourses(paragraph);
		break;
	case "Recommendation_for_video_programming_class" :
		paragraph = "For programmers not familiar with the TriMedia we recommend the 4-day <a href=\"javascript:newWindow('w_TriMedia_foundation.htm', 'description')\">TriMedia foundation</a>  which gives a thorough grounding in TriMedia core, cache, optimization, peripherals and software architecture. <a href=\"javascript:newWindow('w_TriMedia_optimization.htm', 'description')\">Optimizing TriMedia programs</a>.";
		dynamicParagraphCourses(paragraph);
		break;
	case "Recommendation_for_basic_TriMedia_class" :
		paragraph = "This is 1-day basic class. We also offer <a href=\"javascript:newWindow('w_TriMedia_optimization_advanced.htm', 'description')\">TriMedia Optimization Advanced</a>  class for programmers already familiar with the TriMedia CPU core. For programmers not familiar with the TriMedia we recommend the 4-day <a href=\"javascript:newWindow('w_TriMedia_foundation.htm', 'description')\">TriMedia foundation</a>  which gives a thorough grounding in TriMedia core, cache, optimization, peripherals and software architecture.";
		dynamicParagraphCourses(paragraph);
		break;
	case "Recommendation_for_advanced_TriMedia_class" :
		paragraph = "This is an advanced class for programmers already familiar with the TriMedia CPU core. For programmers not familiar with the TriMedia we recommend the 4-day <a href=\"javascript:newWindow('w_TriMedia_foundation.htm', 'description')\">TriMedia foundation</a>  which gives a thorough grounding in TriMedia core, cache, optimization, peripherals and software architecture.";
		dynamicParagraphCourses(paragraph);
		break;
	case "Recommendation_for_TriMedia_for_managers_class" :
		paragraph = "If you are looking for technical training then our  <a href=\"javascript:newWindow('w_TriMedia_foundation.htm', 'description')\">TriMedia foundation</a>  gives a thorough grounding in TriMedia, covering the core, cache, optimization, peripherals and software architecture.";
		dynamicParagraphCourses(paragraph);
		break;
	case "Recommendation_for_TriMedia_Foundation" :
		paragraph = "For experienced programmers we recommend our 4-day 'hands on' workshop on <a href=\"javascript:newWindow('w_TriMedia_optimization.htm', 'description')\">Optimizing TriMedia programs</a>.";
		dynamicParagraphCourses(paragraph);
		break;
	case "Recommendation_for_TriMedia_1day_classes_1" :
		paragraph = "This class can be taken as a 1-day class, but we recommend that it be taken as part of the 4-day<a href=\"javascript:newWindow('w_TriMedia_foundation.htm', 'description')\">TriMedia Foundation Class</a>.";
		dynamicParagraphCourses(paragraph);
		break;
	case "Recommendation_for_extension_TriMedia_class" :
		paragraph = "This is an extension class and of interest to people wanting to know about this specialist topic. For programmers not familiar with the TriMedia we recommend the 4-day <a href=\"javascript:newWindow('w_TriMedia_foundation.htm', 'description')\">TriMedia foundation</a>  which gives a thorough grounding in TriMedia core, cache, optimization, peripherals and software architecture.";
		dynamicParagraphCourses(paragraph);
		break;
//****************************class information paragraphs - same for all classes************************
//*********************************************************************************************
	case "Class_information" :
		paragraph = "This class can be offered 'on site' anywhere in the world. This saves attendees the hassle of expensive and time consuming travel.  <p><strong>Download:</strong> <a href=\"javascript:newWindow('files/BORES_class_booking_form.pdf', 'pdf')\">booking form</A> &nbsp; &nbsp; <strong> Look at: </strong> <a href=\"javascript:newWindow('w_prices.htm', 'prices')\">prices</a></p>";
		dynamicParagraphCourses(paragraph);
		break;
	default :
		paragraph = " ";
		dynamicParagraphCourses(paragraph);
		break;
}