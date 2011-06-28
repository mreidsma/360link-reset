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

// Citation Refiner Page

$("div#CitationRefiner table tr td.BorderN span.SS_searchTitle").replaceWith("<h4 id=\"CitationRefinerTitle\">Citation Linker</h4>");

// Get the variables from the inputs on the refiner page

var refineatitle = $("input#rft\.atitle").val();
var refinetitle = $("input#rft\\.title").val();
var refinevolume = $("input#rft\\.volume").val();
var refineissue = $("input#rft\\.issue").val();
var refinespage = $("input#rft\\.spage").val();
var refinedate = $("input#rft\\.date").val();
var refineaulast = $("input#rft\\.aulast").val();
var refineaufirst = $("input#rft\\.aufirst").val();
var refineau = $("input#rft\\.au").val();
var refineaucorp = $("input#rft\\.aucorp").val();
var refinedoi = $("input#rft\\.doi").val();
var refineissn = $("input#rft\\.issn").val();
var refinepmid = $("input#rft\\.pmid").val();

// Replace the terrible table-based form with semantic HTML. Welcome to the 21st century, Serials Solutions!

$("table.RefinerForm").replaceWith("<div class=\"form-row\"><label for=\"rft.atitle\">Article Title:</label>&nbsp;<input type=\"text\" name=\"rft.atitle\" id=\"rft.atitle\" value=\"" + refineatitle + "\" /></div><div class=\"form-row\"><label for=\"rft.title\">Journal:</label>&nbsp;<input type=\"text\" name=\"rft.title\" id=\"rft.title\" value=\"" + refinetitle + "\" /></div><div class=\"form-row\"><label for=\"rft.volume\">Volume:</label>&nbsp;<input type=\"text\" name=\"rft.volume\" id=\"rft.volume\" value=\"" + refinevolume + "\" /><label for=\"rft.issue\">Issue:</label>&nbsp;<input type=\"text\" name=\"rft.issue\" id=\"rft.issue\" value=\"" + refineissue + "\" /><label for=\"rft.spage\">Page(s):</label>&nbsp;<input type=\"text\" name=\"rft.spage\" id=\"rft.spage\" value=\"" + refinespage + "\" /><label for=\"rft.date\">Date:</label>&nbsp;<input type=\"text\" name=\"rft.date\" id=\"rft.date\" value=\"" + refinedate + "\" /></div><div class=\"form-row\"><label for=\"rft.aulast\">Author (last):</label>&nbsp;<input type=\"text\" name=\"rft.aulast\" id=\"rft.aulast\" value=\"" + refineaulast + "\" /><label for=\"rft.aufirst\">Author (first):</label>&nbsp;<input type=\"text\" name=\"rft.aufirst\" id=\"rft.aufirst\" value=\"" + refineaufirst + "\" /><label for=\"rft.au\">Author (full):</label>&nbsp;<input type=\"text\" name=\"rft.au\" id=\"rft.au\" value=\"" + refineau + "\" /><label for=\"rft.aucorp\">Author (corp):</label>&nbsp;<input type=\"text\" name=\"rft.aucorp\" id=\"rft.aucorp\" value=\"" + refineaucorp + "\" /></div><div class=\"form-row\"><label for=\"rft.issn\">ISSN:</label>&nbsp;<input type=\"text\" name=\"rft.issn\" id=\"rft.issn\" value=\"" + refineissn + "\" /><label for=\"doi\"><abbr title=\"Document Object Identifier\">DOI</abbr>:</label>&nbsp;<input type=\"text\" name=\"SS_doi\" id=\"doi\" value=\"" + refinedoi + "\" /><label for=\"pmid\">PMID:</label>&nbsp;<input type=\"text\" name=\"pmid\" id=\"pmid\" value=\"" + refinepmid + "\" /><br /></div><input type=\"submit\" name=\"CitationSubmit\" id=\"CitationSubmit\" value=\"Search\" /></div>");



