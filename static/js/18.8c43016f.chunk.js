(self.webpackChunkaditam=self.webpackChunkaditam||[]).push([[18],{18:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>E});var a=n(791),s=n(87),r=n(842),i=n(184);const o=e=>{let{data:t}=e;return(0,i.jsx)("article",{className:"degree-container",children:(0,i.jsxs)("header",{children:[(0,i.jsx)("h4",{className:"degree",children:t.degree}),(0,i.jsxs)("p",{className:"school",children:[(0,i.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"education",children:[(0,i.jsx)("div",{className:"link-to",id:"education"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Education"})}),t.map((e=>(0,i.jsx)(o,{data:e},e.school)))]})};c.defaultProps={data:[]};const l=c;var u=n(892),d=n.n(u),h=n(745);const m=e=>{let{data:{name:t,position:n,url:a,startDate:s,endDate:r,summary:o,highlights:c}}=e;return(0,i.jsxs)("article",{className:"jobs-container",children:[(0,i.jsxs)("header",{children:[(0,i.jsxs)("h4",{children:[(0,i.jsx)("a",{href:a,children:t})," - ",n]}),(0,i.jsxs)("p",{className:"daterange",children:[" ",d()(s).format("MMMM YYYY")," - ",r?d()(r).format("MMMM YYYY"):"PRESENT"]})]}),o?(0,i.jsx)(h.Z,{options:{overrides:{p:{props:{className:"summary"}}}},children:o}):null,c?(0,i.jsx)("ul",{className:"points",children:c.map((e=>(0,i.jsx)("li",{children:e},e)))}):null]})},g=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"experience",children:[(0,i.jsx)("div",{className:"link-to",id:"experience"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Experience"})}),t.map((e=>(0,i.jsx)(m,{data:e},"".concat(e.name,"-").concat(e.position))))]})};g.defaultProps={data:[]};const y=g,f=e=>{let{handleClick:t,active:n,label:a}=e;return(0,i.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:()=>t(a),children:a})},p=e=>{let{data:t,categories:n}=e;const{category:a,competency:s,title:r}=t,o={background:n.filter((e=>a.includes(e.name))).map((e=>e.color))[0]},c={...o,width:"".concat(String(Math.min(100,Math.max(s/5*100,0))),"%")};return(0,i.jsxs)("div",{className:"skillbar clearfix",children:[(0,i.jsx)("div",{className:"skillbar-title",style:o,children:(0,i.jsx)("span",{children:r})}),(0,i.jsx)("div",{className:"skillbar-bar",style:c}),(0,i.jsxs)("div",{className:"skill-bar-percent",children:[s," / 5"]})]})};p.defaultProps={categories:[]};const v=p,w=e=>{let{skills:t,categories:n}=e;const s=Object.fromEntries([["All",!1]].concat(n.map((e=>{let{name:t}=e;return[t,!1]})))),[r,o]=(0,a.useState)(s),c=e=>{const t=Object.keys(r).reduce(((t,n)=>({...t,[n]:e===n&&!r[n]})),{});t.All=!Object.keys(r).some((e=>t[e])),o(t)};return(0,i.jsxs)("div",{className:"skills",children:[(0,i.jsx)("div",{className:"link-to",id:"skills"}),(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h3",{children:"Skills"}),(0,i.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,i.jsx)("div",{className:"skill-button-container",children:Object.keys(r).map((e=>(0,i.jsx)(f,{label:e,active:r,handleClick:c},e)))}),(0,i.jsx)("div",{className:"skill-row-container",children:(()=>{const e=Object.keys(r).reduce(((e,t)=>r[t]?t:e),"All");return t.sort(((e,t)=>{let n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((t=>"All"===e||t.category.includes(e))).map((e=>(0,i.jsx)(v,{categories:n,data:e},e.title)))})()})]})};w.defaultProps={skills:[],categories:[]};const b=w,x=e=>{let{data:t,last:n}=e;return(0,i.jsxs)("li",{className:"course-container",children:[(0,i.jsxs)("a",{href:t.link,children:[(0,i.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,i.jsx)("p",{className:"course-name",children:t.title})]}),!n&&(0,i.jsx)("div",{className:"course-dot",children:(0,i.jsx)("p",{className:"course-name",children:" \u2022"})})]})};x.defaultProps={last:!1};const D=x,k=e=>e.sort(((e,t)=>{let n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map(((t,n)=>(0,i.jsx)(D,{data:t,last:n===e.length-1},t.title))),j=e=>{let{data:t}=e;return(0,i.jsxs)("div",{className:"courses",children:[(0,i.jsx)("div",{className:"link-to",id:"courses"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)("h3",{children:"Selected Courses"})}),(0,i.jsx)("ul",{className:"course-list",children:k(t)})]})};j.defaultProps={data:[]};const $=j,S=()=>(0,i.jsxs)("div",{className:"references",children:[(0,i.jsx)("div",{className:"link-to",id:"references"}),(0,i.jsx)("div",{className:"title",children:(0,i.jsx)(s.rU,{to:"/contact",children:(0,i.jsx)("h3",{children:"References are available upon request"})})})]}),M=[{title:"Google Data Analytics",number:"F4WE2BKSQZD2",link:"https://www.coursera.org/professional-certificates/google-data-analytics",university:"Google"},{title:"Introduction to Artificial Intelligence (AI)",number:"UVL8R89Y4GYY",link:"https://www.coursera.org/learn/introduction-to-ai",university:"IBM"},{title:"Share Data Through the Art of Visualization",number:"TV55HEEUSQ8V",link:"https://www.coursera.org/learn/visualize-data",university:"Google"},{title:"What is Data Science?",number:"PNY6A454FC5W",link:"https://www.coursera.org/learn/what-is-datascience",university:"IBM"},{title:"Google Data Analytics Capstone: Complete a Case Study",number:"N9XTSCBVWX8C",link:"https://www.coursera.org/learn/google-data-analytics-capstone",university:"Google"},{title:"Ask Questions to Make Data-Driven Decisions",number:"93KT5AUXXM5P",link:"https://www.coursera.org/learn/ask-questions-make-decisions",university:"Google"},{title:"Foundations: Data, Data, Everywhere",number:"3FX4S8GQLVEK",link:"https://www.coursera.org/learn/foundations-data",university:"Google"},{title:"Data Analysis with R Programming",number:"ZQNT7HW7C52M",link:"https://www.coursera.org/learn/data-analysis-r",university:"Google"},{title:"Analyze Data to Answer Questions",number:"R9HADRSCJHGM",link:"https://www.coursera.org/learn/analyze-data",university:"Google"},{title:"Prepare Data for Exploration",number:"ZF3LWA4KQVDW",link:"https://www.coursera.org/learn/data-preparation",university:"Google"},{title:"Process Data from Dirty to Clean",number:"HETEN8N22HMW",link:"https://www.coursera.org/learn/process-data",university:"Google"},{title:"Using Python to Access Web Data",number:"V4ED6WQ9CRL5",link:"https://www.coursera.org/learn/python-network-data",university:"Michigan"},{title:"Python Data Structures",number:"R5PG4K83MY6G",link:"https://www.coursera.org/learn/python-data",university:"Michigan"},{title:"C++ For C Programmers, Part A",number:"5AFF2TEGCPWZ",link:"https://www.coursera.org/learn/c-plus-plus-a",university:"University of California, Santa Cruz"},{title:"Programming for Everybody (Getting Started with Python)",number:"ZBHJKZFGEW9F",link:"https://www.coursera.org/learn/python",university:"Michigan"}],N=[{school:"NMIET, Savitribai Phule Pune University",degree:"B.E. - Information Technology | Pune",link:"https://www.nmiet.edu.in/",year:"2023 | CGPA: 9.18/10"},{school:"Dr.D.Y.Patil Junior College of Science",degree:"Class XII - Science | Pune",link:"https://www.dypatilef.com/",year:"2019"},{school:"Modern College of Arts, Science and Commerce",degree:"Class XI - Science | Pune",link:"https://moderncollegepune.edu.in/",year:"2018"},{school:"Kantilal Shah Vidyalaya",degree:"Class X | Pune",link:"https://kantilalshahvidyalaya.org/",year:"2017"}],C=[{name:"Aditya 360\xb0",position:"Founder",url:"https://www.hitachivantara.com/en-us/home.html",startDate:"2023-09-01",endDate:"2024-08-12",summary:"One-stop shop for dominating local search! 360\xb0 Google Virtual Tours, Google Business Profile \n    Optimization, Verification, Local SEO Expertise & Review Management.",highlights:["Boosted visibility of potential businesses by 23.4% using Google Street View 360\xb0tours, showcasing them on Google Maps and Google Search","Optimized Google Business Profile listing of each for better SEO ranking.","Conducted thorough analyses of 32+ businesses, identifying their strengths and weaknesses.","Implemented strategies thatresulted in a 21.2% increase in customer engagement and a 19.4% growth in revenue for clients."]},{name:"Hitachi Vantara",position:"Digital Insights & Big Data Analytics Intern",url:"https://www.hitachivantara.com/en-us/home.html",startDate:"2023-02-13",endDate:"2023-08-31",summary:"Hitachi Vantara, a wholly-owned subsidiary of Hitachi, Ltd., guides its customers from what's now to what's next by solving their digital challenges.\n    More than 80% of the Fortune 100 trust Hitachi Vantara to help them develop new revenue streams, unlock competitive advantages, lower costs, enhance customer experiences, and deliver social and environmental value.",highlights:["Visualized and communicated the insights, patterns, and trends from complex data sets.","Worked on tools like Oracle Analytics Cloud (OAC), Power BI, Pentaho, Tableau.","Developed visually impactful dashboards in above tools to identify key metrics and transform raw data into meaningful, actionable format."]},{name:"TWOWAITS TECHNOLOGIES",position:"Web Development Intern",url:"https://www.linkedin.com/company/twowaits-technologies/",startDate:"2022-01-01",endDate:"2022-02-01",summary:"TwoWaits Technologies aims to help improve quality of education \n    for millions of engineering graduates across India.",highlights:["Built responsive, accessible, and dynamic web pages to enable users to easily navigate site.","Crafted userinterfaces with modern JavaScript frameworks, HTML5, and CSS3, which improved user satisfaction by 32%.","Assisted in debugging and troubleshooting code issues to improve application performance."]}],A=[{title:"Javascript",competency:3.3,category:["Web Development"]},{title:"Node.JS",competency:3.5,category:["Web Development"]},{title:"React",competency:4.2,category:["Web Development"]},{title:"Bash",competency:1.4,category:["Tools"]},{title:"Firebase",competency:3.2,category:["Web Development","Tools"]},{title:"SQL",competency:4.1,category:["Languages","Data Analytics"]},{title:"API",competency:3.6,category:["Web Development"]},{title:"Python",competency:3.2,category:["Languages"]},{title:"C",competency:4.2,category:["Languages"]},{title:"C++",competency:4.3,category:["Languages"]},{title:"Latex",competency:3.9,category:["Languages"]},{title:"Git",competency:3.8,category:["Tools"]},{title:"Jupyter",competency:3.4,category:["Data Analytics"]},{title:"Oracle Analytics Cloud",competency:3.7,category:["Data Analytics"]},{title:"Tableau",competency:3.9,category:["Data Analytics"]},{title:"HTML + SASS/SCSS/CSS",competency:4.2,category:["Web Development"]},{title:"R",competency:3.6,category:["Languages","Data Analytics"]},{title:"Data Visualization",competency:3.9,category:["Data Analytics"]}].map((e=>({...e,category:e.category.sort()}))),O=["#F8BD82","#EE6E6E","#BEADAD","#CFB7A5","#BA6767","#B48978"],T=[...new Set(A.flatMap((e=>{let{category:t}=e;return t})))].sort().map(((e,t)=>({name:e,color:O[t]}))),P={Education:()=>(0,i.jsx)(l,{data:N}),Experience:()=>(0,i.jsx)(y,{data:C}),Skills:()=>(0,i.jsx)(b,{skills:A,categories:T}),Courses:()=>(0,i.jsx)($,{data:M}),References:()=>(0,i.jsx)(S,{})},E=()=>(0,i.jsx)(r.Z,{title:"Resume",description:"Aditya Tamhane's Resume.",children:(0,i.jsxs)("article",{className:"post",id:"resume",children:[(0,i.jsx)("header",{children:(0,i.jsxs)("div",{className:"title",children:[(0,i.jsx)("h2",{children:(0,i.jsx)(s.rU,{to:"resume",children:"Resume"})}),(0,i.jsx)("div",{className:"link-container",children:Object.keys(P).map((e=>(0,i.jsx)("h4",{children:(0,i.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)))})]})}),Object.entries(P).map((e=>{let[t,n]=e;return(0,i.jsx)(n,{},t)}))]})})},892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,a="millisecond",s="second",r="minute",i="hour",o="day",c="week",l="month",u="quarter",d="year",h="date",m="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},p=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},v={s:p,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),a=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+p(a,2,"0")+":"+p(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(a,l),r=n-s<0,i=t.clone().add(a+(r?-1:1),l);return+(-(a+(n-s)/(r?s-i:i-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:o,D:h,h:i,m:r,s:s,ms:a,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},w="en",b={};b[w]=f;var x="$isDayjsObject",D=function(e){return e instanceof S||!(!e||!e[x])},k=function e(t,n,a){var s;if(!t)return w;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(s=r),n&&(b[r]=n,s=r);var i=t.split("-");if(!s&&i.length>1)return e(i[0])}else{var o=t.name;b[o]=t,s=o}return!a&&s&&(w=s),s||!a&&w},j=function(e,t){if(D(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},$=v;$.l=k,$.i=D,$.w=function(e,t){return j(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function f(e){this.$L=k(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var p=f.prototype;return p.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if($.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(g);if(a){var s=a[2]-1||0,r=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],s,a[3]||1,a[4]||0,a[5]||0,a[6]||0,r)):new Date(a[1],s,a[3]||1,a[4]||0,a[5]||0,a[6]||0,r)}}return new Date(t)}(e),this.init()},p.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},p.$utils=function(){return $},p.isValid=function(){return!(this.$d.toString()===m)},p.isSame=function(e,t){var n=j(e);return this.startOf(t)<=n&&n<=this.endOf(t)},p.isAfter=function(e,t){return j(e)<this.startOf(t)},p.isBefore=function(e,t){return this.endOf(t)<j(e)},p.$g=function(e,t,n){return $.u(e)?this[t]:this.set(n,e)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(e,t){var n=this,a=!!$.u(t)||t,u=$.p(e),m=function(e,t){var s=$.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return a?s:s.endOf(o)},g=function(e,t){return $.w(n.toDate()[e].apply(n.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},y=this.$W,f=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(u){case d:return a?m(1,0):m(31,11);case l:return a?m(1,f):m(0,f+1);case c:var w=this.$locale().weekStart||0,b=(y<w?y+7:y)-w;return m(a?p-b:p+(6-b),f);case o:case h:return g(v+"Hours",0);case i:return g(v+"Minutes",1);case r:return g(v+"Seconds",2);case s:return g(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(e){return this.startOf(e,!1)},p.$set=function(e,t){var n,c=$.p(e),u="set"+(this.$u?"UTC":""),m=(n={},n[o]=u+"Date",n[h]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[i]=u+"Hours",n[r]=u+"Minutes",n[s]=u+"Seconds",n[a]=u+"Milliseconds",n)[c],g=c===o?this.$D+(t-this.$W):t;if(c===l||c===d){var y=this.clone().set(h,1);y.$d[m](g),y.init(),this.$d=y.set(h,Math.min(this.$D,y.daysInMonth())).$d}else m&&this.$d[m](g);return this.init(),this},p.set=function(e,t){return this.clone().$set(e,t)},p.get=function(e){return this[$.p(e)]()},p.add=function(a,u){var h,m=this;a=Number(a);var g=$.p(u),y=function(e){var t=j(m);return $.w(t.date(t.date()+Math.round(e*a)),m)};if(g===l)return this.set(l,this.$M+a);if(g===d)return this.set(d,this.$y+a);if(g===o)return y(1);if(g===c)return y(7);var f=(h={},h[r]=t,h[i]=n,h[s]=e,h)[g]||1,p=this.$d.getTime()+a*f;return $.w(p,this)},p.subtract=function(e,t){return this.add(-1*e,t)},p.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||m;var a=e||"YYYY-MM-DDTHH:mm:ssZ",s=$.z(this),r=this.$H,i=this.$m,o=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,s,r){return e&&(e[n]||e(t,a))||s[n].slice(0,r)},h=function(e){return $.s(r%12||12,e,"0")},g=u||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a};return a.replace(y,(function(e,a){return a||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return $.s(t.$y,4,"0");case"M":return o+1;case"MM":return $.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,l,3);case"MMMM":return d(l,o);case"D":return t.$D;case"DD":return $.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,c,2);case"ddd":return d(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(r);case"HH":return $.s(r,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return g(r,i,!0);case"A":return g(r,i,!1);case"m":return String(i);case"mm":return $.s(i,2,"0");case"s":return String(t.$s);case"ss":return $.s(t.$s,2,"0");case"SSS":return $.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(a,h,m){var g,y=this,f=$.p(h),p=j(a),v=(p.utcOffset()-this.utcOffset())*t,w=this-p,b=function(){return $.m(y,p)};switch(f){case d:g=b()/12;break;case l:g=b();break;case u:g=b()/3;break;case c:g=(w-v)/6048e5;break;case o:g=(w-v)/864e5;break;case i:g=w/n;break;case r:g=w/t;break;case s:g=w/e;break;default:g=w}return m?g:$.a(g)},p.daysInMonth=function(){return this.endOf(l).$D},p.$locale=function(){return b[this.$L]},p.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=k(e,t,!0);return a&&(n.$L=a),n},p.clone=function(){return $.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},f}(),M=S.prototype;return j.prototype=M,[["$ms",a],["$s",s],["$m",r],["$H",i],["$W",o],["$M",l],["$y",d],["$D",h]].forEach((function(e){M[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),j.extend=function(e,t){return e.$i||(e(t,S,j),e.$i=!0),j},j.locale=k,j.isDayjs=D,j.unix=function(e){return j(1e3*e)},j.en=b[w],j.Ls=b,j.p={},j}()}}]);
//# sourceMappingURL=18.8c43016f.chunk.js.map