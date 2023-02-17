hmLoadTopic({
hmKeywords:"",
hmTitle:"Rules",
hmDescription:"An additional rule need to be set up to enable processing incoming D365 EDI Management client with Seeburger standard solution. ",
hmPrevLink:"http-client-addresses.html",
hmNextLink:"classifier-mapping.html",
hmParentLink:"seeburger-bis.html",
hmBreadCrumbs:"<a href=\"seeburger-bis.html\">Seeburger BIS<\/a> &gt; Configuration",
hmTitlePath:"Seeburger BIS > Configuration > Rules",
hmHeader:"<h1 class=\"p_Heading1\" style=\"page-break-after: avoid;\"><span class=\"f_Heading1\">Rules<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">An additional rule need to be set up to enable processing incoming D365 EDI Management client with Seeburger standard solution. <\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">1. Create a new Rule record:<\/p>\n\r<p class=\"p_Normal\"><img alt=\"clip0033\" style=\"margin:0;width:1.8125rem;height:1.8125rem;border:none\" src=\".\/images\/clip0033.png\"\/><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">2. Add the following settings:<\/p>\n\r<p class=\"p_Normal\">- Name: see:OUTBOUND-AX-EDI Management-HTTPServer<\/p>\n\r<p class=\"p_Normal\">- Interface: SHC<\/p>\n\r<p class=\"p_Normal\">- Operation: initiateFile<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">3. Select the Settings tab and configure the following elements:<br \/>\n\r- Initiate new process - enabled<\/p>\n\r<p class=\"p_Normal\">- Severity: 8<\/p>\n\r<p class=\"p_Normal\">- Expression: true()=starts-with(\/\/destinationAddressName, \'see:AX:FLEXX\')<\/p>\n\r<p class=\"p_Normal\">- Break: disabled<\/p>\n\r<p class=\"p_Normal\">- Routing type: process<\/p>\n\r<p class=\"p_Normal\">- Process\/partner: see:SSC-OUT-HTTP\/SSC-OUT-HTTPServer<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">4. Remaining settings will be filled automatically and should keep default values.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
