/* 
360Link Reset v1.0 : June 2011
by Matthew Reidsma
Grand Valley State University Libraries
http://gvsu.edu/library/labs
*/

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

// Make the HTML more semantic. Styled spans are no substitute for headings!

$("#SearchResults").replaceWith( "<h3 id=\"SearchResults\" class=\"SS_searchTitle\">Citation Information</h3>" );
$("#MoreOptions").replaceWith( "<h4 id=\"MoreResults\" class=\"SS_searchTitle\">Still need the article?</h4>" );

// Fix duplicated IDs on two wrapper tables

$("table.CandyWrapper:last").attr("id", "MoreOptionsTable" );

// target="_blank" is a no-no. Let the user decide if they want links opening in new windows.

$("a").removeAttr( "target" );


