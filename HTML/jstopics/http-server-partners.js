hmLoadTopic({
hmKeywords:"",
hmTitle:"HTTP Server Partners",
hmDescription:"Following the HTTP Listener configuration it is necessary to set up HTTP Server Partners to specify the IP-range for inbound D365 EDI Management communication.",
hmPrevLink:"http-listener.html",
hmNextLink:"oauth-endpoints.html",
hmParentLink:"seeburger-bis.html",
hmBreadCrumbs:"<a href=\"seeburger-bis.html\">Seeburger BIS<\/a> &gt; Configuration",
hmTitlePath:"Seeburger BIS > Configuration > HTTP Server Partners",
hmHeader:"<h1 class=\"p_Heading1\" style=\"page-break-after: avoid;\"><span class=\"f_Heading1\">HTTP Server Partners<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Following the HTTP Listener configuration it is necessary to set up HTTP Server Partners to specify the IP-range for inbound D365 EDI Management communication.<\/p>\n\r<p class=\"p_Normal\">1. Create new HTTP Server Partner and add the following settings.<\/p>\n\r<p class=\"p_Normal\"><img alt=\"clip0029\" style=\"margin:0;width:2.0000rem;height:2.0000rem;border:none\" src=\".\/images\/clip0029.png\"\/><\/p>\n\r<p class=\"p_Normal\">For a new HTTP Server Partner set up the following:<\/p>\n\r<p class=\"p_Normal\">- Name: the name must follow the pattern: <span style=\"font-weight: bold;\">see:AX:EDI Management<\/span>:&lt;ENVIRONMENT_STAGE&gt; e.g. see:AX:EDI Management:DEV or see:AX:EDI Management:TEST. The part in bold cannot be changed and is referenced in Rules setup.<\/p>\n\r<p class=\"p_Normal\">- From: lowest IP in the range of AX Client IP<\/p>\n\r<p class=\"p_Normal\">- To: highest IP in the range of AX Client IP<\/p>\n\r<p class=\"p_Normal\">- Authentication: not used.<\/p>\n\r<p class=\"p_Normal\">- File handling:<\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span>- Size limit: keep default<\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span>- Empty processing: keep default<\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span>- MIME processing: keep default<\/p>\n\r<p class=\"p_Normal\"><span style=\"width:3.0000rem;display:inline-block\">&nbsp;<\/span>- Default Encoding: keep default<\/p>\n\r<p class=\"p_Normal\">Prepare messages for in sequence processing: disabled<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
