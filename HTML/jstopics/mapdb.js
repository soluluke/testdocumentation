hmLoadTopic({
hmKeywords:"",
hmTitle:"MapDB",
hmDescription:"D365 EDI Management client uses BIS MapDB functionality to convert account numbers from different companies configured in D365.",
hmPrevLink:"seeburger-bis.html",
hmNextLink:"mappings.html",
hmParentLink:"seeburger-bis.html",
hmBreadCrumbs:"<a href=\"seeburger-bis.html\">Seeburger BIS<\/a> &gt; Deployment - in progress",
hmTitlePath:"Seeburger BIS > Deployment - in progress > MapDB",
hmHeader:"<h1 class=\"p_Heading1\" style=\"page-break-after: avoid;\"><span class=\"f_Heading1\">MapDB<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">D365 EDI Management client uses BIS MapDB functionality to convert account numbers from different companies configured in D365.<\/p>\n\r<p class=\"p_Normal\">It is used for both outbound and inbound flows. The functionality <\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">To add and set up the MapDB, follow these steps:<\/p>\n\r<p class=\"p_Normal\">1. Navigate to Configuration-Converter-MapDB Configuration and Import file D365_EDI Management.ACCOUNTS shipped with EDI Management solution package for Seeburger BIS.<\/p>\n\r<p class=\"p_Normal\">2. Import the D365_EDI Management.ACCOUNTS file to create the MapDB. Use colon &quot;;&quot; as a delimiter. Remaining settings should not be changed.<\/p>\n\r<p class=\"p_Normal\"><img alt=\"clip0032\" style=\"margin:0;width:2.0000rem;height:2.0000rem;border:none\" src=\".\/images\/clip0032.png\"\/><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">3. This should be the result of the import:<\/p>\n\r<p class=\"p_Normal\"><img alt=\"clip0034\" style=\"margin:0;width:2.0000rem;height:2.0000rem;border:none\" src=\".\/images\/clip0034.png\"\/><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">4. It is necessary to fill in the table with records. The pattern is as follows:<\/p>\n\r<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0 0;\"><table style=\"border:none; border-spacing:0;\">\n\r<tr>\n\r<td style=\"vertical-align:top; width:19.8750rem; padding:0; border:none\"><p class=\"p_Normal\">COMPANY_ORDACC<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:12.6875rem; padding:0; border:none\"><p class=\"p_Normal\">TARGET_ID<\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr>\n\r<td style=\"vertical-align:top; width:19.8750rem; padding:0; border:none\"><p class=\"p_Normal\">&lt;AX_COMPANYID&gt;_&lt;ACCOUNT_NUMBER&gt;<\/p>\n\r<\/td>\n\r<td style=\"vertical-align:top; width:12.6875rem; padding:0; border:none\"><p class=\"p_Normal\">&lt;TARGET_ACCOUNT_NO&gt;<\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">Alternatively, it is possible to fill in the &nbsp;D365_EDI Management.ACCOUNTS file before importing. Please see sample entries in red box. <\/p>\n\r<p class=\"p_Normal\">The entries need to follow the pattern from the table above.<\/p>\n\r<p class=\"p_Normal\">The lines preceding the sample entries must not be modified. Changing them might corrupt the file.<\/p>\n\r<p class=\"p_Normal\"><img alt=\"clip0035\" style=\"margin:0;width:2.0000rem;height:2.0000rem;border:none\" src=\".\/images\/clip0035.png\"\/><\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
