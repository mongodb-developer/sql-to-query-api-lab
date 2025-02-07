"use strict";(self.webpackChunkdocusaurus_template_lab=self.webpackChunkdocusaurus_template_lab||[]).push([["331"],{8986:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>l,metadata:()=>r,assets:()=>o,toc:()=>d,contentTitle:()=>a});var r=JSON.parse('{"id":"aggregation/sort-limit","title":"\uD83D\uDC50 $sort and $limit","description":"\uD83D\uDD39 $sort \u2192 Sorting results","source":"@site/docs/50-aggregation/3-sort-limit.mdx","sourceDirName":"50-aggregation","slug":"/aggregation/sort-limit","permalink":"/sql-to-query-api-lab/docs/aggregation/sort-limit","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/sql-to-query-api-lab/blob/main/docs/50-aggregation/3-sort-limit.mdx","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDC50 $match and $project","permalink":"/sql-to-query-api-lab/docs/aggregation/match-project"},"next":{"title":"\uD83D\uDC50 $group","permalink":"/sql-to-query-api-lab/docs/aggregation/group"}}'),s=t("5893"),i=t("65");let l={},a="\uD83D\uDC50 $sort and $limit",o={},d=[{value:"\uD83D\uDD39 $sort \u2192 Sorting results",id:"-sort--sorting-results",level:2},{value:"Syntax",id:"syntax",level:3},{value:"Example: Find the most recent reviews on our app.",id:"example-find-the-most-recent-reviews-on-our-app",level:3},{value:"<strong>Equivalent SQL Query</strong>",id:"equivalent-sql-query",level:3},{value:"\uD83D\uDD39 $limit \u2192 Limiting the number of results",id:"-limit--limiting-the-number-of-results",level:2},{value:"Syntax",id:"syntax-1",level:3},{value:"Example: Find the 5 most recent reviews on our app.",id:"example-find-the-5-most-recent-reviews-on-our-app",level:3},{value:"<strong>Equivalent SQL Query</strong>",id:"equivalent-sql-query-1",level:3},{value:"\uD83D\uDC50 Challenge",id:"-challenge",level:3},{value:"\uD83D\uDC50 1. After the year 2010, which book has the most number of authors.",id:"-1-after-the-year-2010-which-book-has-the-most-number-of-authors",level:2}];function h(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-sort-and-limit",children:"\uD83D\uDC50 $sort and $limit"})}),"\n",(0,s.jsx)(n.h2,{id:"-sort--sorting-results",children:"\uD83D\uDD39 $sort \u2192 Sorting results"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"{\n  $sort: {\n    field: 1,\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{ field: 1 }"})," \u2192 ",(0,s.jsx)(n.strong,{children:"Ascending order"})," (A \u2192 Z, smallest to largest)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{ field: -1 }"})," \u2192 ",(0,s.jsx)(n.strong,{children:"Descending order"})," (Z \u2192 A, largest to smallest)"]}),"\n",(0,s.jsx)(n.li,{children:"You can sort by multiple fields, just like SQL."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-find-the-most-recent-reviews-on-our-app",children:"Example: Find the most recent reviews on our app."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"db.reviews.aggregate([\n  {\n    $sort: { timestamp: -1 },\n  },\n]);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"equivalent-sql-query",children:(0,s.jsx)(n.strong,{children:"Equivalent SQL Query"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM books ORDER BY timestamp DESC;\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"-limit--limiting-the-number-of-results",children:"\uD83D\uDD39 $limit \u2192 Limiting the number of results"}),"\n",(0,s.jsx)(n.h3,{id:"syntax-1",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:"{\n  $limit: n\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"n is the maximum number of documents you want in your results"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example-find-the-5-most-recent-reviews-on-our-app",children:"Example: Find the 5 most recent reviews on our app."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"db.reviews.aggregate([\n  {\n    $sort: { timestamp: -1 },\n  },\n  {\n    $limit: 5,\n  },\n]);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"equivalent-sql-query-1",children:(0,s.jsx)(n.strong,{children:"Equivalent SQL Query"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM books ORDER BY timestamp DESC LIMIT 5;\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"-challenge",children:"\uD83D\uDC50 Challenge"}),"\n",(0,s.jsx)(n.h2,{id:"-1-after-the-year-2010-which-book-has-the-most-number-of-authors",children:"\uD83D\uDC50 1. After the year 2010, which book has the most number of authors."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:"Answer"}),(0,s.jsx)("div",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'  db.books.aggregate([\n    {\n      $match: { year: {$lt: 2010}}\n    },\n    {\n      $project: {\n        title: 1,\n        authors: 1,\n        numAuthors: {$size: "$authors"},\n        _id: 0\n      }\n    },\n    {\n      $sort: { "numAuthors": -1}\n    },\n    {\n      $limit: 1\n    }\n  ]);\n'})})})]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);