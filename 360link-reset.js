
/* 
360Link Reset v1.1: July 2011
by Matthew Reidsma
Grand Valley State University Libraries
http://gvsu.edu/library/labs
*/

/*
*******************************************************************************
CUSTOMIZATIONS
*******************************************************************************
*/

/* CSS SETTINGS */

var cssPath = "../github/360link-reset/"; /* The path to your CSS files (inlcude trailing slash) */
var cssCustom = "linkresolver.css"; /* The name of your custom CSS file */

/* LAYOUT SETTINGS */

/* 
To replace the citation table with a semantic div containing your citation information
set the following variable to 'true' If set to 'false', the citation table will remain.
*/

var improveCitation = true;

/*
******************************************************************************
DON'T EDIT BELOW THIS LINE UNLESS YOU KNOW WHAT YOU ARE DOING!
******************************************************************************
*/


/* Let's remove the SerialsSolutions stylesheets and load our own instead */

/* 
Now let's add ou CSS. We do this so that our CSS only loads if:
a) javascript is available
b) the existing CSS is removed. 
Progressive enhancement! 
*/

$("head link").remove(); /* Remove all stylesheets in the head element */
$("head style").remove(); /* Remove inline styles in the head element */

$("head").append( "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssPath + "360link-reset.css\" />"); /* Load the Reset stylesheet */
$("head").append( "<link rel=\"stylesheet\" type=\"text/css\" href=\"" + cssPath + cssCustom + "\" />"); /* Load the Custom stylesheet */

// SerialsSolutions inserts a ton of inline styles. Let's get rid of them.

$("table").removeAttr( "align" );
$("table").removeAttr( "cellspacing" );
$("table").removeAttr( "cellpadding" );
$("table").removeAttr( "border" );
$("table").removeAttr( "style" );
$("tbody").removeAttr( "width" );
$("tbody").removeAttr( "style" );
$("td").removeAttr( "valign" );
$("td").removeAttr( "width" );
$("td").removeAttr( "nowrap" );
$("td").removeAttr( "style" );
$("p").removeAttr( "align" );
$("p").removeAttr( "style" );
$("span").removeAttr( "style" );
$("div").removeAttr( "align" );

// target="_blank" is a no-no. Let the user decide if they want links opening in new windows.

$("a").removeAttr( "target" );

// Make the HTML more semantic. Styled spans are no substitute for headings!

$("#SearchResults").replaceWith( "<h3 id=\"SearchResults\" class=\"SS_searchTitle\">Citation Information</h3>" );
$("#MoreOptions").replaceWith( "<h3 id=\"MoreResults\" class=\"SS_searchTitle\">Still need the article?</h3>" );

// Fix duplicated IDs on two wrapper tables

$("table.CandyWrapper:last").attr("id", "MoreOptionsTable" );

// No results. Serials Solutions page isn't very clear about this problem. Let's make it more clear.

$("table.ContentNotAvailableTable").replaceWith( "<div id=\"ContentNotAvailableTable\"><p class=\"lib-big-text\">We&#8217;re sorry, but this item is not available online. Try one of the options below to find this item in print.</p><p>Think this is an error? Let our eResources team know at <a href=\"mailto:erms@gvsu.edu\">erms@gvsu.edu</a>.</p></div>" );

// Ugh. Why stick that citation in a table? Let's clean that up

if (improveCitation == true) {

var authorName = $("span.fn").text();
authorName = jQuery.trim(authorName); // Trim leading white space form author name

// Journals

if (format == "Journal" || format == "JournalFormat") {

	var journalName = $("td#CitationJournalTitleValue").text();
	journalName = jQuery.trim(journalName); // Trim leading white space form journal name
	var articleName = $("td#CitationJournalArticleValue").text();
	articleName = jQuery.trim(articleName); // Trim leading white space form article name
	var journalVol = $("td#CitationJournalVolumeValue").text();
	journalVol = jQuery.trim(journalVol); // Trim leading white space form journal volume
	if (journalVol != "") { journalVol = ", <span id=\"CitationJournalVolumeValue\">&nbsp;" + journalVol + "</span>"; } // Add context so if var is blank, it won't display
	var journalIssue = $("td#CitationJournalIssueValue").text();
	journalIssue = jQuery.trim(journalIssue); // Trim leading white space form journal issue #
	if (journalIssue != "") {journalIssue = "<span id=\"CitationJournalIssueValue\">&nbsp;(" + journalIssue + "),</span>"; } // Add context so if var is blank, it won't display
	var journalDate = $("td#CitationJournalDateValue").text();
	journalDate = jQuery.trim(journalDate); // Trim leading white space form journal date
	var journalPages = $("td#CitationJournalPageValue").text();
	journalPages = jQuery.trim(journalPages); // Trim leading white space form journal pages
	if (journalPages != "") {journalPages = "<span id=\"CitationJournalPageValue\">&nbsp;p. " + journalPages + ".</span>"; } // Add context so if var is blank, it won't display
	var journalissn = $("td#CitationJournalIssnValue").text();
	journalissn = jQuery.trim(journalissn); // Trim leading white space form journal issn
	if (journalissn != "") { journalissn = "<span id=\"CitationJournalIssnValue\">&nbsp;(ISSN:&nbsp;" + journalissn + ")</span>"; } // Add context so if var is blank, it won't display 
	
	// Ok, let's get rid of that table and replace it with a semantic div for our citation

	$("table.SS_CitationTable").replaceWith("<div id=\"citation\"><span id=\"CitationJournalAuthorValue\">" + authorName + "</span>&nbsp; <span id=\"CitationJournalDateValue\">(" + journalDate + ")</span>.&nbsp; <span id=\"CitationJournalArticleValue\">" + articleName + ".</span>&nbsp; <span id=\"CitationJournalTitleValue\">" + journalName + ".</span>&nbsp;" + journalissn + journalVol +  journalIssue + journalPages + "</div>");

	// Replace the final table with semantic HTML, along with the dynamic links

	journalNameLink = encodeURI(journalName); // Encode the white space in the URL	
	$("div#CitationResults table.CandyWrapper:last").replaceWith( "<div id=\"MoreResults\"><h4>No luck online?</h4><div id=\"refine-link\"><a href=\"" + refinerlink + "\">&nbsp;</a></div><div id=\"lib-search-print\"><h5>Step 1:</h5><a href=\"http://library.catalog.gvsu.edu/search/s" + journalNameLink + "\">Look for this in print</a></div><div id=\"lib-doc-del\"><h5>Step 2:</h5><a href=\"" + illiadLink + "\" title=\"Request this from another library\">Get it from another library</a></div><div id=\"lib-get-help\"><h5>Step 3:</h5>Still stuck? <a href=\"http://gvsu.edu/chat\" title=\"Get Help Now\">Get Help Now</a></div></div>" );

}

// Books

if (format == "BookFormat") {
	
	var bookTitle = $("td#CitationBookTitleValue").text();
	bookTitle = jQuery.trim(bookTitle); // Trim leading white space form book title
	var bookDate = $("td#CitationBookDateValue").text();
	bookDate = jQuery.trim(bookDate); // Trim leading white space form journal name
	var bookisbn = $("td#CitationBookISBNValue").text();
	bookisbn = jQuery.trim(bookisbn); // Trim leading white space form journal name
	if (bookisbn != "") { bookisbn = "&nbsp;<span id=\"CitationBookISBNValue\">(ISBN:&nbsp;" + bookisbn + ")</span>&nbsp;"; } // Add context so if var is blank it will not display
	
	// Ok, let's get rid of that table and replace it with a semantic div for our citation

	$("table.SS_CitationTable").replaceWith("<div id=\"citation\"><span id=\"CitationBookAuthorValue\">" + authorName + "</span>&nbsp; <span id=\"CitationBookDateValue\">(" + bookDate + ")</span>.&nbsp; <span id=\"CitationBookTitleValue\"><em>" + bookTitle + "</em></span>" + bookisbn + "<a id=\"refworks\" href=\"" + refworksLink + "\">Export to Refworks</a></div>");
	
	// Replace the final table with semantic HTML, along with the dynamic links

	bookTitleLink = encodeURI(bookTitle); // Encode the white space in the URL	
	$("div#CitationResults table.CandyWrapper:last").replaceWith( "<div id=\"MoreResults\"><h4>No luck online?</h4><div id=\"refine-link\"><a href=\"" + refinerlink + "\">&nbsp;</a></div><div id=\"lib-search-print\"><h5>Step 1:</h5><a href=\"http://library.catalog.gvsu.edu/search/t" + bookTitleLink + "\">Search GVSU for this book in print</a></div><div id=\"lib-mel\"><h5>Step 2:</h5><a href=\"" + melLink + "\" title=\"Request this book through MeLCat\">Get this book from another Michigan library</a></div><div id=\"lib-doc-del\"><h5>Step 3:</h5><a href=\"" + illiadLink + "\" title=\"Request this from another library\">Try to get it from any library</a></div><div id=\"lib-get-help\"><h5>Step 4:</h5>Still stuck? <a href=\"http://gvsu.edu/chat\" title=\"Get Help Now\">Get Help Now</a></div></div>" );
	
}

// Unknown format - treat as book?

if (format == "UnknownFormat") {
	
	var bookTitle = $("td#CitationUnknownPublicationValue").text();
	bookTitle = jQuery.trim(bookTitle); // Trim leading white space form book title
	var bookDate = $("td#CitationUnknownDateValue").text();
	bookDate = jQuery.trim(bookDate); // Trim leading white space form journal name
	var bookisbn = $("td#CitationBookISBNValue").text();
	bookisbn = jQuery.trim(bookisbn); // Trim leading white space form journal name
	
	// Ok, let's get rid of that table and replace it with a semantic div for our citation

	$("table.SS_CitationTable").replaceWith("<div id=\"citation\"><span id=\"CitationBookAuthorValue\">" + authorName + "</span>&nbsp; <span id=\"CitationBookDateValue\">(" + bookDate + ")</span>.&nbsp; <span id=\"CitationBookTitleValue\"><em>" + bookTitle + "</em></span>&nbsp; <span id=\"CitationBookISBNValue\">&nbsp; </span><a id=\"refworks\" href=\"" + refworksLink + "\">Export to Refworks</a></div>");
	
	// Replace the final table with semantic HTML, along with the dynamic links

	bookTitleLink = encodeURI(bookTitle); // Encode the white space in the URL	
	$("div#CitationResults table.CandyWrapper:last").replaceWith( "<div id=\"MoreResults\"><h4>No luck online?</h4><div id=\"refine-link\"><a href=\"" + refinerlink + "\">&nbsp;</a></div><div id=\"lib-search-print\"><h5>Step 1:</h5><a href=\"http://library.catalog.gvsu.edu/search/t" + bookTitleLink + "\">Search GVSU for this book in print</a></div><div id=\"lib-mel\"><h5>Step 2:</h5><a href=\"" + melLink + "\" title=\"Request this book through MeLCat\">Get this book from another Michigan library</a></div><div id=\"lib-doc-del\"><h5>Step 3:</h5><a href=\"" + illiadLink + "\" title=\"Request this from another library\">Try to get it from any library</a></div><div id=\"lib-get-help\"><h5>Step 4:</h5>Still stuck? <a href=\"http://gvsu.edu/chat\" title=\"Get Help Now\">Get Help Now</a></div></div>" );
	
}

}



