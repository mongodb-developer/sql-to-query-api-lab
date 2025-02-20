"use strict";(self.webpackChunkdocusaurus_template_lab=self.webpackChunkdocusaurus_template_lab||[]).push([["8802"],{1211:function(e,n,r){r.r(n),r.d(n,{default:()=>g,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>c,contentTitle:()=>u});var t=JSON.parse('{"id":"aggregation/group","title":"\uD83D\uDC50 $group","description":"In SQL, the GROUP BY statement groups rows that have the same values into summary rows, like \\"find the number of customers in each country\\".","source":"@site/docs/50-aggregation/4-group.mdx","sourceDirName":"50-aggregation","slug":"/aggregation/group","permalink":"/sql-to-query-api-lab/docs/aggregation/group","draft":false,"unlisted":false,"editUrl":"https://github.com/mongodb-developer/sql-to-query-api-lab/blob/main/docs/50-aggregation/4-group.mdx","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\uD83D\uDC50 $sort and $limit","permalink":"/sql-to-query-api-lab/docs/aggregation/sort-limit"},"next":{"title":"\uD83D\uDC50 $lookup (JOINs in MongoDB)","permalink":"/sql-to-query-api-lab/docs/aggregation/JOIN"}}'),o=r("5893"),a=r("65"),s=r("8168"),l=r("7645");let i={},u="\uD83D\uDC50 $group",d={},c=[{value:"\uD83C\uDFAC How Does $group Work?**",id:"-how-does-group-work",level:2},{value:"<strong>Syntax</strong>",id:"syntax",level:3},{value:"\uD83D\uDC50 Example 1: Count the number of Books published every year",id:"-example-1-count-the-number-of-books-published-every-year",level:2},{value:"<strong>MongoDB Query</strong>",id:"mongodb-query",level:3},{value:"<strong>Equivalent SQL Query</strong>",id:"equivalent-sql-query",level:3},{value:"<strong>Sample Output</strong>",id:"sample-output",level:3},{value:"\uD83D\uDC50 Example 2: Without using <code>$group</code>- count the number of Books published every year",id:"-example-2-without-using-group--count-the-number-of-books-published-every-year",level:2},{value:"MongoDB Query",id:"mongodb-query-1",level:3},{value:"Sample Output remains the same as before",id:"sample-output-remains-the-same-as-before",level:3},{value:"\uD83D\uDC50 Example 3: Find the total number of pages published every year.",id:"-example-3-find-the-total-number-of-pages-published-every-year",level:2},{value:"<strong>MongoDB Query</strong>",id:"mongodb-query-2",level:3},{value:"Equivalent SQL Query",id:"equivalent-sql-query-1",level:3},{value:"Sample Output",id:"sample-output-1",level:3},{value:"\uD83D\uDC50 Challenge",id:"-challenge",level:2},{value:"\uD83D\uDC50 1. Find the Average Book Rating of all books",id:"-1-find-the-average-book-rating-of-all-books",level:3},{value:"\uD83D\uDC50 2. Find users with the most number of reviews. Hint: Use the <code>name</code> field in the reviews collection.",id:"-2-find-users-with-the-most-number-of-reviews-hint-use-the-name-field-in-the-reviews-collection",level:3}];function h(e){let n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"-group",children:"\uD83D\uDC50 $group"})}),"\n",(0,o.jsx)(n.p,{children:'In SQL, the GROUP BY statement groups rows that have the same values into summary rows, like "find the number of customers in each country".\nThe GROUP BY statement is often used with aggregate functions (COUNT(), MAX(), MIN(), SUM(), AVG()) to group the result-set by one or more columns.'}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"$group"})," stage in MongoDB\u2019s Aggregation Framework is equivalent to ",(0,o.jsx)(n.code,{children:"GROUP BY"})," in SQL. It allows us to group documents by a specific field and apply aggregate functions like sum, average, count, min, and max."]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"-how-does-group-work",children:"\uD83C\uDFAC How Does $group Work?**"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"$group"})," stage groups documents based on a field and performs calculations on grouped data."]}),"\n",(0,o.jsx)(n.h3,{id:"syntax",children:(0,o.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"{\n  $group: {\n    _id: <expression>,\n    <field>: { <accumulator>: <expression> }\n  }\n}\n"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"_id"}),": The field to group by (use ",(0,o.jsx)(n.code,{children:"null"})," to aggregate all documents together)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"<accumulator>"}),": An aggregation operator (",(0,o.jsx)(n.code,{children:"$sum"}),", ",(0,o.jsx)(n.code,{children:"$avg"}),", ",(0,o.jsx)(n.code,{children:"$min"}),", ",(0,o.jsx)(n.code,{children:"$max"}),", ",(0,o.jsx)(n.code,{children:"$push"}),", ",(0,o.jsx)(n.code,{children:"$addToSet"}),", etc.)."]}),"\n"]}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"-example-1-count-the-number-of-books-published-every-year",children:"\uD83D\uDC50 Example 1: Count the number of Books published every year"}),"\n",(0,o.jsx)(n.h3,{id:"mongodb-query",children:(0,o.jsx)(n.strong,{children:"MongoDB Query"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n  {\n    $group: {\n      _id: "$year",\n      totalBooks: { $sum: 1 },\n    },\n  },\n]);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"equivalent-sql-query",children:(0,o.jsx)(n.strong,{children:"Equivalent SQL Query"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"SELECT year, COUNT(*) AS totalBooks\nFROM books\nGROUP BY year;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"sample-output",children:(0,o.jsx)(n.strong,{children:"Sample Output"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'[\n  {"_id": 1980,"totalBooks": 42},\n  {"_id": 2000,"totalBooks": 490},\n  {"_id": 1981,"totalBooks": 45},\n  ...\n]\n'})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.h2,{id:"-example-2-without-using-group--count-the-number-of-books-published-every-year",children:["\uD83D\uDC50 Example 2: Without using ",(0,o.jsx)(n.code,{children:"$group"}),"- count the number of Books published every year"]}),"\n",(0,o.jsx)(n.h3,{id:"mongodb-query-1",children:"MongoDB Query"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n  {\n    $sortByCount: "$year",\n  },\n]);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"sample-output-remains-the-same-as-before",children:"Sample Output remains the same as before"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'[\n  {"_id": 1980,"totalBooks": 42},\n  {"_id": 2000,"totalBooks": 490},\n  {"_id": 1981,"totalBooks": 45},\n  ...\n]\n'})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"-example-3-find-the-total-number-of-pages-published-every-year",children:"\uD83D\uDC50 Example 3: Find the total number of pages published every year."}),"\n",(0,o.jsx)(n.h3,{id:"mongodb-query-2",children:(0,o.jsx)(n.strong,{children:"MongoDB Query"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'db.books.aggregate([\n  {\n    $group: {\n      _id: "$year",\n      totalPages: { $sum: "$pages" },\n    },\n  },\n]);\n'})}),"\n",(0,o.jsx)(n.h3,{id:"equivalent-sql-query-1",children:"Equivalent SQL Query"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"SELECT year, SUM(rating) AS totalPages\nFROM books\nGROUP BY year;\n"})}),"\n",(0,o.jsx)(n.h3,{id:"sample-output-1",children:"Sample Output"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'[\n  { "_id": 1955, "totalPages": 664 },\n  { "_id": 1952, "totalPages": 416 },\n  { "_id": 1899, "totalPages": 128 }\n  ...\n]\n'})}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.h2,{id:"-challenge",children:"\uD83D\uDC50 Challenge"}),"\n",(0,o.jsx)(n.h3,{id:"-1-find-the-average-book-rating-of-all-books",children:"\uD83D\uDC50 1. Find the Average Book Rating of all books"}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsx)("summary",{children:"Answer"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'db.reviews.aggregate([\n  {\n    $group: {\n      _id: "$bookId",\n      avgRating: { $avg: "$rating" }\n    }\n  },\n]);\n'})})]}),"\n",(0,o.jsxs)(n.h3,{id:"-2-find-users-with-the-most-number-of-reviews-hint-use-the-name-field-in-the-reviews-collection",children:["\uD83D\uDC50 2. Find users with the most number of reviews. Hint: Use the ",(0,o.jsx)(n.code,{children:"name"})," field in the reviews collection."]}),"\n",(0,o.jsxs)(r,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)("summary",{children:"Answer"}),"\nThere are 2 ways to solve this-"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"$group with $sort"}),"\n",(0,o.jsx)(n.li,{children:"$sortByCount"}),"\n"]}),(0,o.jsxs)(s.Z,{groupId:"aggregations",children:[(0,o.jsx)(l.Z,{value:"atlas",label:"$group with $sum + $sort",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'db.reviews.aggregate([\n  {\n    $group: {\n      _id: "$name",\n      totalReviews: { $sum: 1 },\n    },\n  },\n  {\n    $sort: {\n      totalReviews: -1,\n    },\n  },\n]);\n'})})}),(0,o.jsx)(l.Z,{value:"mongodb-shell",label:"$sortByCount",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'db.reviews.aggregate([\n  {\n    $sortByCount: "$name",\n  },\n]);\n'})})})]})]})]})}function g(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},7645:function(e,n,r){r.d(n,{Z:()=>a});var t=r("5893");r("7294");var o=r("4904");function a(e){let{children:n,hidden:r,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.Z)("tabItem_Ymn6",a),hidden:r,children:n})}},8168:function(e,n,r){r.d(n,{Z:()=>v});var t=r("5893"),o=r("7294"),a=r("4904"),s=r("4718"),l=r("6550"),i=r("8714"),u=r("9207"),d=r("9413"),c=r("4510");function h(e){return o.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||o.isValidElement(e)&&function(e){let{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function g(e){let{value:n,tabValues:r}=e;return r.some(e=>e.value===n)}var p=r("6735");function m(e){let{className:n,block:r,selectedValue:o,selectValue:l,tabValues:i}=e,u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{let n=e.currentTarget,r=i[u.indexOf(n)].value;r!==o&&(d(n),l(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let r=u.indexOf(e.currentTarget)+1;n=u[r]??u[0];break}case"ArrowLeft":{let r=u.indexOf(e.currentTarget)-1;n=u[r]??u[u.length-1]}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:i.map(e=>{let{value:n,label:r,attributes:s}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>{u.push(e)},onKeyDown:h,onClick:c,...s,className:(0,a.Z)("tabs__item","tabItem_LNqP",s?.className,{"tabs__item--active":o===n}),children:r??n},n)})})}function x(e){let{lazy:n,children:r,selectedValue:s}=e,l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){let e=l.find(e=>e.props.value===s);return e?(0,o.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:l.map((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==s}))})}function b(e){let n=function(e){let{defaultValue:n,queryString:r=!1,groupId:t}=e,a=function(e){let{values:n,children:r}=e;return(0,o.useMemo)(()=>{let e=n??h(r).map(e=>{let{props:{value:n,label:r,attributes:t,default:o}}=e;return{value:n,label:r,attributes:t,default:o}});return!function(e){let n=(0,d.lx)(e,(e,n)=>e.value===n.value);if(n.length>0)throw Error(`Docusaurus error: Duplicate values "${n.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[n,r])}(e),[s,p]=(0,o.useState)(()=>(function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}let t=r.find(e=>e.default)??r[0];if(!t)throw Error("Unexpected error: 0 tabValues");return t.value})({defaultValue:n,tabValues:a})),[m,x]=function(e){let{queryString:n=!1,groupId:r}=e,t=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,u._X)(a),(0,o.useCallback)(e=>{if(!a)return;let n=new URLSearchParams(t.location.search);n.set(a,e),t.replace({...t.location,search:n.toString()})},[a,t])]}({queryString:r,groupId:t}),[b,v]=function(e){let{groupId:n}=e,r=n?`docusaurus.tab.${n}`:null,[t,a]=(0,c.Nk)(r);return[t,(0,o.useCallback)(e=>{r&&a.set(e)},[r,a])]}({groupId:t}),f=(()=>{let e=m??b;return g({value:e,tabValues:a})?e:null})();return(0,i.Z)(()=>{f&&p(f)},[f]),{selectedValue:s,selectValue:(0,o.useCallback)(e=>{if(!g({value:e,tabValues:a}))throw Error(`Can't select invalid tab value=${e}`);p(e),x(e),v(e)},[x,v,a]),tabValues:a}}(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container","tabList__CuJ"),children:[(0,t.jsx)(m,{...n,...e}),(0,t.jsx)(x,{...n,...e})]})}function v(e){let n=(0,p.Z)();return(0,t.jsx)(b,{...e,children:h(e.children)},String(n))}}}]);