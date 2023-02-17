hmLoadTopic({
hmKeywords:"",
hmTitle:"Partner entities",
hmDescription:"Setup of partner entities is outside of the scope of EDI Management solution. The solution supports all types of Customer and Trading Partner setup as long as the conversion...",
hmPrevLink:"host-entities.html",
hmNextLink:"tables.html",
hmParentLink:"seeburger-bis.html",
hmBreadCrumbs:"<a href=\"seeburger-bis.html\">Seeburger BIS<\/a> &gt; Configuration &gt; Entities",
hmTitlePath:"Seeburger BIS > Configuration > Entities > Partner entities",
hmHeader:"<h1 class=\"p_Heading1\" style=\"page-break-after: avoid;\"><span class=\"f_Heading1\">Partner entities<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Normal\">Setup of partner entities is outside of the scope of EDI Management solution. The solution supports all types of Customer and Trading Partner setup as long as the conversion consists of two step process with SEEXML intermediate format. There are several recommendations for the Trading Partner\/Customer configuration: <\/p>\n\r<p class=\"p_Normal\">1. It is recommended to use direct host binding on the <span style=\"font-style: italic;\">Message<\/span> entities under Trading Partner\/Customer configuration. Dynamic host binding is supported by the EDI Management solution but not recommended.<\/p>\n\r<p class=\"p_Normal\">2. It is recommended to use D365_EDI Management.ACCOUNTS MapDB to convert between the Account\/Customer IDs in D365 and in the EDI files. It is not recommended to hard code ID conversion logic and values in the Partner mappings. Reference to the MapDB is recommended in this case.<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r<p class=\"p_Normal\">&nbsp;<\/p>\n\r"
})
