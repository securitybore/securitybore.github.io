<!--Hide script from old browsers

function horizontalMenu(section) {

	document.write(menu);
}

switch(section) {
	case "home" :
	menu = "<a href=\"index.htm\" class=\"hMenulink\" id=\"activepage\"> Home </a><a href=\"index_courses.htm\" class=\"hMenulink\"> Classes </a><a href=\"class_admin/index_admin.htm\" class=\"hMenulink\"> Class Admin </a><a href=\"consultancy/index_consultancy.htm\" class=\"hMenulink\"> Consultancy </a><a href=\"eBooks/index_ebooks.htm\" class=\"hMenulink\"> eBooks </a><a href=\"blog/index_blog.htm\" class=\"hMenulink\"> Blog </a><a href=\"aboutUs.htm\" class=\"hMenulink\"> About Us </a><a href=\"contactUs.htm\" class=\"hMenulink\"> Contact Us </a>";
	horizontalMenu(section);
	break;
	case "classes" :
	menu = "<a href=\"index.htm\" class=\"hMenulink\"> Home </a><a href=\"index_courses.htm\" class=\"hMenulink\" id=\"activepage\"> Classes </a><a href=\"class_admin/index_admin.htm\" class=\"hMenulink\"> Class Admin </a><a href=\"consultancy/index_consultancy.htm\" class=\"hMenulink\"> Consultancy </a><a href=\"eBooks/index_ebooks.htm\" class=\"hMenulink\"> eBooks </a><a href=\"blog/index_blog.htm\" class=\"hMenulink\"> Blog </a><a href=\"aboutUs.htm\" class=\"hMenulink\"> About Us </a><a href=\"contactUs.htm\" class=\"hMenulink\"> Contact Us </a>";
	horizontalMenu(section);
	break;
	case "classes_sec" :
	menu = "<a href=\"../index.htm\" class=\"hMenulink\"> Home </a><a href=\"../index_courses.htm\" class=\"hMenulink\" id=\"activepage\"> Classes </a><a href=\"../class_admin/index_admin.htm\" class=\"hMenulink\"> Class Admin </a><a href=\"../consultancy/index_consultancy.htm\" class=\"hMenulink\"> Consultancy </a><a href=\"../eBooks/index_ebooks.htm\" class=\"hMenulink\"> eBooks </a><a href=\"blog/index_blog.htm\" class=\"hMenulink\"> Blog </a><a href=\"../aboutUs.htm\" class=\"hMenulink\"> About Us </a><a href=\"../contactUs.htm\" class=\"hMenulink\"> Contact Us </a>";
	horizontalMenu(section);
	break;
	case "admin" :
	menu = "<a href=\"../index.htm\" class=\"hMenulink\"> Home </a><a href=\"../index_courses.htm\" class=\"hMenulink\"> Classes </a><a href=\"index_admin.htm\" class=\"hMenulink\" id=\"activepage\"> Class Admin </a><a href=\"../consultancy/index_consultancy.htm\" class=\"hMenulink\"> Consultancy </a><a href=\"../eBooks/index_ebooks.htm\" class=\"hMenulink\"> eBooks </a><a href=\"../blog/index_blog.htm\" class=\"hMenulink\"> Blog </a><a href=\"../aboutUs.htm\" class=\"hMenulink\"> About Us </a><a href=\"../contactUs.htm\" class=\"hMenulink\"> Contact Us </a>";
	horizontalMenu(section);
	break;
	case "consultancy" :
	menu = "<a href=\"../index.htm\" class=\"hMenulink\"> Home </a><a href=\"../index_courses.htm\" class=\"hMenulink\"> Classes </a><a href=\"../class_admin/index_admin.htm\" class=\"hMenulink\"> Class Admin </a><a href=\"index_consultancy.htm\" class=\"hMenulink\" id=\"activepage\"> Consultancy </a><a href=\"../eBooks/index_ebooks.htm\" class=\"hMenulink\"> eBooks </a><a href=\"../blog/index_blog.htm\" class=\"hMenulink\"> Blog </a><a href=\"../aboutUs.htm\" class=\"hMenulink\"> About Us </a><a href=\"../contactUs.htm\" class=\"hMenulink\"> Contact Us </a>";
	horizontalMenu(section);
	break;
	case "eBooks" :
	menu = "<a href=\"../index.htm\" class=\"hMenulink\"> Home </a><a href=\"../index_courses.htm\" class=\"hMenulink\"> Classes </a><a href=\"../class_admin/index_admin.htm\" class=\"hMenulink\"> Class Admin </a><a href=\"../consultancy/index_consultancy.htm\" class=\"hMenulink\"> Consultancy </a><a href=\"index_ebooks.htm\" class=\"hMenulink\" id=\"activepage\"> eBooks </a><a href=\"../blog/index_blog.htm\" class=\"hMenulink\"> Blog </a><a href=\"../aboutUs.htm\" class=\"hMenulink\"> About Us </a><a href=\"../contactUs.htm\" class=\"hMenulink\"> Contact Us </a>";
	horizontalMenu(section);
	break;
	case "blog" :
	menu = "<a href=\"../index.htm\" class=\"hMenulink\"> Home </a><a href=\"../index_courses.htm\" class=\"hMenulink\"> Classes </a><a href=\"../class_admin/index_admin.htm\" class=\"hMenulink\"> Class Admin </a><a href=\"../consultancy/index_consultancy.htm\" class=\"hMenulink\"> Consultancy </a><a href=\"../ebooks/index_ebooks.htm\" class=\"hMenulink\"> eBooks </a><a href=\"index_blog.htm\" class=\"hMenulink\" id=\"activepage\"> Blog </a><a href=\"../aboutUs.htm\" class=\"hMenulink\"> About Us </a><a href=\"../contactUs.htm\" class=\"hMenulink\"> Contact Us </a>";
	horizontalMenu(section);	
	break;
	case "index_ebooks" :
	menu = "<a href=\"index.htm\" class=\"hMenulink\"> Home </a><a href=\"index_courses.htm\" class=\"hMenulink\"> Classes </a><a href=\"class_admin/index_admin.htm\" class=\"hMenulink\"> Class Admin </a><a href=\"consultancy/index_consultancy.htm\" class=\"hMenulink\"> Consultancy </a><a href=\"eBooks/index_ebooks.htm\" class=\"hMenulink\"> eBooks </a><a href=\"../blog/index_blog.htm\" class=\"hMenulink\"> Blog </a><a href=\"aboutUs.htm\" class=\"hMenulink\"> About Us </a><a href=\"contactUs.htm\" class=\"hMenulink\"> Contact Us </a>";
	horizontalMenu(section);
	break;
	case "index_ebooks_sec" :
	menu = "<a href=\"../../index.htm\" class=\"hMenulink\"> Home </a><a href=\"../../index_courses.htm\" class=\"hMenulink\"> Classes </a><a href=\"../../class_admin/index_admin.htm\" class=\"hMenulink\"> Class Admin </a><a href=\"../../consultancy/index_consultancy.htm\" class=\"hMenulink\"> Consultancy </a><a href=\"../../eBooks/index_ebooks.htm\" class=\"hMenulink\"> eBooks </a><a href=\"../blog/index_blog.htm\" class=\"hMenulink\"> Blog </a><a href=\"../../aboutUs.htm\" class=\"hMenulink\"> About Us </a><a href=\"../../contactUs.htm\" class=\"hMenulink\"> Contact Us </a>";
	horizontalMenu(section);
	break;
	case "index_ebooks_sec_sec" :
	menu = "<a href=\"../../../index.htm\" class=\"hMenulink\"> Home </a><a href=\"../../../index_courses.htm\" class=\"hMenulink\"> Classes </a><a href=\"../../../class_admin/index_admin.htm\" class=\"hMenulink\"> Class Admin </a><a href=\"../../../consultancy/index_consultancy.htm\" class=\"hMenulink\"> Consultancy </a><a href=\"../../../eBooks/index_ebooks.htm\" class=\"hMenulink\"> eBooks </a><a href=\"../blog/index_blog.htm\" class=\"hMenulink\"> Blog </a><a href=\"../../../aboutUs.htm\" class=\"hMenulink\"> About Us </a><a href=\"../../../contactUs.htm\" class=\"hMenulink\"> Contact Us </a>";
	horizontalMenu(section);
	break;
	case "aboutUs" :
	menu = "<a href=\"index.htm\" class=\"hMenulink\"> Home </a><a href=\"index_courses.htm\" class=\"hMenulink\"> Classes </a><a href=\"class_admin/index_admin.htm\" class=\"hMenulink\"> Class Admin </a><a href=\"consultancy/index_consultancy.htm\" class=\"hMenulink\"> Consultancy </a><a href=\"eBooks/index_ebooks.htm\" class=\"hMenulink\"> eBooks </a><a href=\"blog/index_blog.htm\" class=\"hMenulink\"> Blog </a><a href=\"aboutUs.htm\" class=\"hMenulink\" id=\"activepage\"> About Us </a><a href=\"contactUs.htm\" class=\"hMenulink\"> Contact Us </a>";
	horizontalMenu(section);
	break;	
	case "contactUs" :
	menu = "<a href=\"index.htm\" class=\"hMenulink\"> Home </a><a href=\"index_courses.htm\" class=\"hMenulink\"> Classes </a><a href=\"class_admin/index_admin.htm\" class=\"hMenulink\"> Class Admin </a><a href=\"consultancy/index_consultancy.htm\" class=\"hMenulink\"> Consultancy </a><a href=\"eBooks/index_ebooks.htm\" class=\"hMenulink\"> eBooks </a><a href=\"blog/index_blog.htm\" class=\"hMenulink\"> Blog </a><a href=\"aboutUs.htm\" class=\"hMenulink\"> About Us </a><a href=\"contactUs.htm\" class=\"hMenulink\" id=\"activepage\"> Contact Us </a>";
	horizontalMenu(section);
	break;	
}
//end hiding of script -->
