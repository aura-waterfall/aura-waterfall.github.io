These site files can be used for creating your JavaScript Final Project Website.


-The images, colors, and other content can be modified in any way you like. The name for the main file must remain "index.html". All other page names can be changed, but should be changed in both the CSS and the HTML.  A quick and easy way to do this is to do a search and replace (Ctrl-H). For example, search for "page1" and replace with the name of your page.


The site currently consists of a total of 3 pages with 8 links. However, the site is designed in a way that allows the addition of additional links and pages.


How to add additional links:

-In the HTML-
1. In all the HTML files EXCEPT the file you are adding do the following: 
After the last <li> element and within the unordered list (line 42), add the following code:

 	<li>

 	<a href="webpagename.html">webpage link</a>

	</li>

("webpagename.html") refers to the name of the webpage you're adding. "webpage link" refers to the name of the link to display for the page)

2.  In ONLY the HTML file you are adding do the following:
After the last <li> element and within the unordered list (line 42), add the following code:
<li id ="nav-webpagename">

<a href="#">webpage link</a>

</li>

("webpagename" refers to the name of the webpage you're adding without the html extension. So if your webpage is named "page9.html", you should have 
<li id="nav-page9"> 

"webpage link" refers to the name of the link to display for the page link)



-In the layout.css file-
3. On line 69, before the first curly bracket, add the following CSS code:

, #nav-webpagename a

("nav-webpagename" refers to the name value you gave for the id attribute of the <li> element from Step 2.  So if the id you used is "nav-page9", you should have 
, #nav-page9 a



How to add additional pages:

1. Save a copy of the index.html with a different filename.

2. Re-title the document appropriately

3. Change the code from lines 16-18:

from this:
<li id="nav-home">

<a href="#">Home</a>

</li>

to this:
<li>

<a href="index.html">Home</a>

</li>


