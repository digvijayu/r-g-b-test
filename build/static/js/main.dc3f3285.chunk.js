(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,a){},39:function(e){e.exports={"Test.Text1":"Etwas Testtext","Test.Text.With.Param":"Text mit dem Parameter {param}","Follow.Button.Text":"Folgen","No.Data":"Sorry, keine weiteren Vorschl\xe4ge f\xfcr heute","Change.Language":"Change Language/Sprache \xe4ndern"}},40:function(e){e.exports={"Test.Text1":"Some Test Text","Test.Text.With.Param":"Some text with {param} parameter","Follow.Button.Text":"Follow","No.Data":"Sorry, no more suggestions for today","Change.Language":"Sprache \xe4ndern/Change Language"}},43:function(e,a,n){e.exports=n(81)},59:function(e,a){},65:function(e,a){},70:function(e,a,n){},71:function(e,a,n){},72:function(e,a,n){},73:function(e,a,n){},74:function(e,a,n){},80:function(e,a,n){},81:function(e,a,n){"use strict";n.r(a);var t=n(0),i=n.n(t),r=n(33),o=n.n(r),s=n(3),l=n(4),m=n(6),c=n(5),d=n(7),u=n(29),p=n(15),g=n(13),y=n(18),h=n(21),f=n(22),b=n(37),j=n.n(b),v=n(38),S=n.n(v),w=n(39),E=n(40),O=n(24),C={error:{message:""},serverUrl:window.location.origin,isLoading:!0,followSuggestions:[]},k=Object(y.b)({appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:"NO_TYPE"};switch(a.type){case"APPLICATION_ERROR":return Object(O.a)({},e,{error:{message:a.message}});case"FOLLOW_SUGGESTIONS_LOADED":return Object(O.a)({},e,{isLoading:!1,followSuggestions:a.userProfiles});case"FOLLOW_PROFILE":return Object(O.a)({},e,{followSuggestions:e.followSuggestions.filter(function(e){return e.id!==a.profile.id})});default:return e}}}),P="/",A=["en","de"],T=A[0],M=[{id:"1",image:"assets/female/Cheryl-Carter.jpg",city:"M\u0101d\u0101r\u012bpur",job:"Senior Financial Analyst",company:"Skyble",description:"Senior Financial Analyst, Skyble",country:"Bangladesh",gender:"female",firstname:"Cheryl",lastname:"Carter",name:"Cheryl Carter",email:"ccarter0@1und1.de",phone:"2-(017)772-7449",address:"31296 Calypso Parkway"},{id:"2",image:"assets/female/Heather-Morales.jpg",city:"Zelenogradsk",job:"Analyst Programmer",company:"Yambee",description:"Analyst Programmer, Yambee",country:"Russia",gender:"female",firstname:"Heather",lastname:"Morales",name:"Heather Morales",email:"hmorales1@un.org",phone:"7-(897)249-9830",address:"42604 Scofield Center"},{id:"3",image:"assets/male/Sean-Jackson.jpg",city:"Yongqin",job:"Structural Engineer",company:"Linkbridge",description:"Structural Engineer, Linkbridge",country:"China",gender:"male",firstname:"Sean",lastname:"Jackson",name:"Sean Jackson",email:"sjackson2@youtu.be",phone:"6-(527)389-6219",address:"66529 Eagle Crest Junction"},{id:"4",image:"assets/female/Catherine-Anderson.jpg",city:"Haarlem",job:"Data Coordiator",company:"Jaloo",description:"Data Coordiator, Jaloo",country:"Netherlands",gender:"female",firstname:"Catherine",lastname:"Anderson",name:"Catherine Anderson",email:"canderson3@theguardian.com",phone:"7-(464)124-7393",address:"94940 Marcy Terrace"},{id:"5",image:"assets/male/Jack-Phillips.jpg",city:"Rawang",job:"Compensation Analyst",company:"Aimbu",description:"Compensation Analyst, Aimbu",country:"Malaysia",gender:"male",firstname:"Jack",lastname:"Phillips",name:"Jack Phillips",email:"jphillips4@addthis.com",phone:"1-(876)685-7879",address:"32 Ridge Oak Hill"},{id:"6",image:"assets/female/Julia-Williamson.jpg",city:"Lhuentse",job:"Account Representative II",company:"Dabjam",description:"Account Representative II, Dabjam",country:"Bhutan",gender:"female",firstname:"Julia",lastname:"Williamson",name:"Julia Williamson",email:"jwilliamson5@elegantthemes.com",phone:"5-(363)496-4627",address:"5702 Corben Way"},{id:"7",image:"assets/male/Jonathan-Martin.jpg",city:"Huatan",job:"Mechanical Systems Engineer",company:"Browsezoom",description:"Mechanical Systems Engineer, Browsezoom",country:"China",gender:"male",firstname:"Jonathan",lastname:"Martin",name:"Jonathan Martin",email:"jmartin6@cnn.com",phone:"0-(497)996-6818",address:"097 Springs Terrace"},{id:"8",image:"assets/female/Maria-Bennett.jpg",city:"Shimodate",job:"Recruiter",company:"Twitterlist",description:"Recruiter, Twitterlist",country:"Japan",gender:"female",firstname:"Maria",lastname:"Bennett",name:"Maria Bennett",email:"mbennett7@blogger.com",phone:"7-(138)318-9102",address:"0413 Independence Street"},{id:"9",image:"assets/female/Sarah-Garrett.jpg",city:"Gushui",job:"Mechanical Systems Engineer",company:"Miboo",description:"Mechanical Systems Engineer, Miboo",country:"China",gender:"female",firstname:"Sarah",lastname:"Garrett",name:"Sarah Garrett",email:"sgarrett8@marriott.com",phone:"8-(715)208-6651",address:"7 Dwight Center"},{id:"10",image:"assets/male/Carl-Barnes.jpg",city:"Pancanagara",job:"Teacher",company:"Meezzy",description:"Teacher, Meezzy",country:"Indonesia",gender:"male",firstname:"Carl",lastname:"Barnes",name:"Carl Barnes",email:"cbarnes9@pagesperso-orange.fr",phone:"9-(536)901-4418",address:"8 Orin Junction"},{id:"11",image:"assets/male/Aaron-Turner.jpg",city:"Zhouzhuang",job:"Community Outreach Specialist",company:"Demimbu",description:"Community Outreach Specialist, Demimbu",country:"China",gender:"male",firstname:"Aaron",lastname:"Turner",name:"Aaron Turner",email:"aturnera@noaa.gov",phone:"9-(596)830-7369",address:"1 Lunder Road"},{id:"12",image:"assets/male/Billy-Reed.jpg",city:"Djounie",job:"Account Representative III",company:"Mycat",description:"Account Representative III, Mycat",country:"Lebanon",gender:"male",firstname:"Billy",lastname:"Reed",name:"Billy Reed",email:"breedb@qq.com",phone:"6-(665)777-5744",address:"75 Bayside Trail"},{id:"13",image:"assets/female/Anna-Fuller.jpg",city:"Turenki",job:"Desktop Support Technician",company:"Rhyloo",description:"Desktop Support Technician, Rhyloo",country:"Finland",gender:"female",firstname:"Anna",lastname:"Fuller",name:"Anna Fuller",email:"afullerc@buzzfeed.com",phone:"8-(436)008-0813",address:"02049 Cascade Circle"},{id:"14",image:"assets/female/Linda-Torres.jpg",city:"Fier-\xc7if\xe7i",job:"Analyst Programmer",company:"Avavee",description:"Analyst Programmer, Avavee",country:"Albania",gender:"female",firstname:"Linda",lastname:"Torres",name:"Linda Torres",email:"ltorresd@naver.com",phone:"8-(279)165-4756",address:"15 Morrow Crossing"},{id:"15",image:"assets/female/Angela-Allen.jpg",city:"Bau",job:"Financial Advisor",company:"Yodel",description:"Financial Advisor, Yodel",country:"Indonesia",gender:"female",firstname:"Angela",lastname:"Allen",name:"Angela Allen",email:"aallene@canalblog.com",phone:"3-(293)300-1783",address:"06073 Ruskin Trail"},{id:"16",image:"assets/female/Phyllis-Perkins.jpg",city:"Irkutsk",job:"Associate Professor",company:"Gigaclub",description:"Associate Professor, Gigaclub",country:"Russia",gender:"female",firstname:"Phyllis",lastname:"Perkins",name:"Phyllis Perkins",email:"pperkinsf@redcross.org",phone:"8-(460)060-6595",address:"49 Cody Crossing"},{id:"17",image:"assets/female/Marilyn-Fuller.jpg",city:"Jiashi",job:"Environmental Tech",company:"Fivechat",description:"Environmental Tech, Fivechat",country:"China",gender:"female",firstname:"Marilyn",lastname:"Fuller",name:"Marilyn Fuller",email:"mfullerg@wikispaces.com",phone:"1-(679)604-6372",address:"07 Anniversary Circle"},{id:"18",image:"assets/male/Ryan-Alvarez.jpg",city:"Junliangcheng",job:"Engineer IV",company:"Skaboo",description:"Engineer IV, Skaboo",country:"China",gender:"male",firstname:"Ryan",lastname:"Alvarez",name:"Ryan Alvarez",email:"ralvarezh@yahoo.com",phone:"0-(069)397-9898",address:"44 Farmco Hill"},{id:"19",image:"assets/male/Fred-Lane.jpg",city:"Songwon",job:"Professor",company:"Browsedrive",description:"Professor, Browsedrive",country:"South Korea",gender:"male",firstname:"Fred",lastname:"Lane",name:"Fred Lane",email:"flanei@homestead.com",phone:"4-(234)399-6849",address:"96 Hovde Lane"},{id:"20",image:"assets/female/Jane-Sims.jpg",city:"P\u0159\xed\u0161ovice",job:"Senior Sales Associate",company:"Linktype",description:"Senior Sales Associate, Linktype",country:"Czech Republic",gender:"female",firstname:"Jane",lastname:"Sims",name:"Jane Sims",email:"jsimsj@ehow.com",phone:"5-(441)244-0495",address:"53960 Straubel Trail"},{id:"21",image:"assets/female/Angela-Ellis.jpg",city:"Kitango",job:"Professor",company:"Bubbletube",description:"Professor, Bubbletube",country:"Philippines",gender:"female",firstname:"Angela",lastname:"Ellis",name:"Angela Ellis",email:"aellisk@opera.com",phone:"3-(960)622-6113",address:"57 Jackson Lane"},{id:"22",image:"assets/female/Diane-Dunn.jpg",city:"Cawalo",job:"Editor",company:"Photojam",description:"Editor, Photojam",country:"Indonesia",gender:"female",firstname:"Diane",lastname:"Dunn",name:"Diane Dunn",email:"ddunnl@cafepress.com",phone:"8-(654)421-6804",address:"249 Macpherson Court"},{id:"23",image:"assets/male/Timothy-Duncan.jpg",city:"Upper Hell's Gate",job:"Chief Design Engineer",company:"Fivespan",description:"Chief Design Engineer, Fivespan",country:"Bonaire, Saint Eustatius and Saba ",gender:"male",firstname:"Timothy",lastname:"Duncan",name:"Timothy Duncan",email:"tduncanm@so-net.ne.jp",phone:"3-(256)693-9539",address:"97 Jenna Trail"},{id:"24",image:"assets/male/Ronald-Mendoza.jpg",city:"Dobropillya",job:"Help Desk Operator",company:"Skinte",description:"Help Desk Operator, Skinte",country:"Ukraine",gender:"male",firstname:"Ronald",lastname:"Mendoza",name:"Ronald Mendoza",email:"rmendozan@newsvine.com",phone:"8-(499)733-7484",address:"2 Delaware Crossing"},{id:"25",image:"assets/male/Michael-Gilbert.jpg",city:"Cuamba",job:"Nuclear Power Engineer",company:"Jaloo",description:"Nuclear Power Engineer, Jaloo",country:"Mozambique",gender:"male",firstname:"Michael",lastname:"Gilbert",name:"Michael Gilbert",email:"mgilberto@technorati.com",phone:"3-(846)455-2798",address:"8 Village Green Circle"},{id:"26",image:"assets/female/Kathryn-Fuller.jpg",city:"Chosica",job:"Staff Scientist",company:"Bubblebox",description:"Staff Scientist, Bubblebox",country:"Peru",gender:"female",firstname:"Kathryn",lastname:"Fuller",name:"Kathryn Fuller",email:"kfullerp@utexas.edu",phone:"4-(497)438-9857",address:"49 Katie Center"},{id:"27",image:"assets/male/Ralph-Larson.jpg",city:"Talitsy",job:"Assistant Manager",company:"Yakidoo",description:"Assistant Manager, Yakidoo",country:"Russia",gender:"male",firstname:"Ralph",lastname:"Larson",name:"Ralph Larson",email:"rlarsonq@stumbleupon.com",phone:"4-(868)508-6096",address:"6504 Stoughton Pass"},{id:"28",image:"assets/female/Karen-Wagner.jpg",city:"Santa Rosa de Lima",job:"VP Accounting",company:"Thoughtworks",description:"VP Accounting, Thoughtworks",country:"El Salvador",gender:"female",firstname:"Karen",lastname:"Wagner",name:"Karen Wagner",email:"kwagnerr@goodreads.com",phone:"1-(780)689-1341",address:"71 Rutledge Lane"},{id:"29",image:"assets/female/Christina-Morales.jpg",city:"Petr\xf3polis",job:"Staff Scientist",company:"Yoveo",description:"Staff Scientist, Yoveo",country:"Brazil",gender:"female",firstname:"Christina",lastname:"Morales",name:"Christina Morales",email:"cmoraless@stumbleupon.com",phone:"4-(319)232-1760",address:"89 Wayridge Center"},{id:"30",image:"assets/male/Daniel-Palmer.jpg",city:"Abang",job:"Sales Associate",company:"Fliptune",description:"Sales Associate, Fliptune",country:"Indonesia",gender:"male",firstname:"Daniel",lastname:"Palmer",name:"Daniel Palmer",email:"dpalmert@ox.ac.uk",phone:"2-(828)639-6922",address:"0 Anthes Alley"},{id:"31",image:"assets/male/Joshua-Murray.jpg",city:"Carapelhos",job:"Senior Quality Engineer",company:"Quimm",description:"Senior Quality Engineer, Quimm",country:"Portugal",gender:"male",firstname:"Joshua",lastname:"Murray",name:"Joshua Murray",email:"jmurrayu@statcounter.com",phone:"2-(732)633-4593",address:"544 Hovde Lane"},{id:"32",image:"assets/male/Timothy-West.jpg",city:"Carauari",job:"Nurse",company:"Edgetag",description:"Nurse, Edgetag",country:"Brazil",gender:"male",firstname:"Timothy",lastname:"West",name:"Timothy West",email:"twestv@blogtalkradio.com",phone:"7-(571)378-0199",address:"4 Darwin Street"},{id:"33",image:"assets/male/Martin-Bradley.jpg",city:"Longjumeau",job:"Pharmacist",company:"Jabbercube",description:"Pharmacist, Jabbercube",country:"France",gender:"male",firstname:"Martin",lastname:"Bradley",name:"Martin Bradley",email:"mbradleyw@umn.edu",phone:"7-(696)150-2845",address:"0349 Farwell Road"},{id:"34",image:"assets/male/Philip-Hall.jpg",city:"Mj\xf6lby",job:"Senior Developer",company:"Photofeed",description:"Senior Developer, Photofeed",country:"Sweden",gender:"male",firstname:"Philip",lastname:"Hall",name:"Philip Hall",email:"phallx@hao123.com",phone:"2-(682)369-9988",address:"7 Quincy Alley"},{id:"35",image:"assets/male/Keith-Willis.jpg",city:"Strat\xf3nion",job:"Senior Sales Associate",company:"Eayo",description:"Senior Sales Associate, Eayo",country:"Greece",gender:"male",firstname:"Keith",lastname:"Willis",name:"Keith Willis",email:"kwillisy@uol.com.br",phone:"2-(399)947-5764",address:"6 Stoughton Place"},{id:"36",image:"assets/female/Patricia-Harris.jpg",city:"La Victoria",job:"Teacher",company:"Fivespan",description:"Teacher, Fivespan",country:"Mexico",gender:"female",firstname:"Patricia",lastname:"Harris",name:"Patricia Harris",email:"pharrisz@dion.ne.jp",phone:"1-(054)740-3188",address:"97585 Russell Court"},{id:"37",image:"assets/female/Frances-Nguyen.jpg",city:"Dabu",job:"Information Systems Manager",company:"Eabox",description:"Information Systems Manager, Eabox",country:"China",gender:"female",firstname:"Frances",lastname:"Nguyen",name:"Frances Nguyen",email:"fnguyen10@howstuffworks.com",phone:"2-(351)004-9575",address:"556 Monument Center"},{id:"38",image:"assets/male/Larry-Ward.jpg",city:"Zhangpu",job:"Software Test Engineer I",company:"Pixope",description:"Software Test Engineer I, Pixope",country:"China",gender:"male",firstname:"Larry",lastname:"Ward",name:"Larry Ward",email:"lward11@hubpages.com",phone:"8-(432)794-0856",address:"93283 Rutledge Drive"},{id:"39",image:"assets/male/Benjamin-Adams.jpg",city:"Pilaya",job:"Junior Executive",company:"Zooveo",description:"Junior Executive, Zooveo",country:"Bolivia",gender:"male",firstname:"Benjamin",lastname:"Adams",name:"Benjamin Adams",email:"badams12@unc.edu",phone:"8-(255)674-7599",address:"9282 Ramsey Center"},{id:"40",image:"assets/female/Jane-James.jpg",city:"Po\u0142ajewo",job:"Biostatistician I",company:"Miboo",description:"Biostatistician I, Miboo",country:"Poland",gender:"female",firstname:"Jane",lastname:"James",name:"Jane James",email:"jjames13@paginegialle.it",phone:"0-(158)407-9506",address:"3626 Eastwood Parkway"}].map(function(e){return e.isFollowed=!1,e}),L=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.children,n=e.values;return i.a.createElement(h.a,{id:a,values:n,defaultMessage:a},function(e){return e})}}]),a}(t.Component),_=(n(70),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onClick;return i.a.createElement("button",{className:"rg-follow-button",onClick:e},i.a.createElement("i",{className:"rg-follow-button__icon"}),i.a.createElement("span",{className:"rg-follow-button__text"},i.a.createElement(L,null,"Follow.Button.Text")))}}]),a}(t.Component)),R=(n(71),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"handleOnClick",value:function(){this.props.followProfile(this.props.profile)}},{key:"render",value:function(){var e=this.props.profile,a=e.name,n=e.description,t=e.image;return i.a.createElement("div",{className:"rg-follow-list__item"},i.a.createElement("div",{className:"rg-follow-list__item__image-div"},i.a.createElement("div",{className:"rg-follow-list__item__image",style:{backgroundImage:"url("+t+")"}})),i.a.createElement("div",{className:"rg-follow-list__item__name-div"},i.a.createElement("div",{className:"rg-follow-list__item__name"},a),i.a.createElement("div",{className:"rg-follow-list__item__description"},n)),i.a.createElement("div",{className:"rg-follow-list__item__button-div"},i.a.createElement(_,{onClick:this.handleOnClick.bind(this)})))}}]),a}(t.Component)),F=Object(g.b)(function(e){return{}},function(e){return{followProfile:function(a){return e(function(e){return{type:"FOLLOW_PROFILE",profile:e}}(a))}}})(R),D=(n(72),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"rg-spinner-eclipse"},i.a.createElement("div",{className:"rg-spinner-eclipse__div"}))}}]),a}(t.Component)),J=(n(73),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.followSuggestionsLoaded(M)},1e3)}},{key:"render",value:function(){var e=this.props,a=e.followSuggestions,n=e.isLoading;return i.a.createElement("div",{className:"rg-follow-list "+(n?"":"rg-follow-list--shadow")},n&&i.a.createElement("div",{className:"rg-follow-list__spinner-div"},i.a.createElement(D,null)),a.map(function(e,a){return i.a.createElement(F,{key:a,profile:e})}),a.length<1&&!n&&i.a.createElement("div",{className:"rg-follow-list__no-data-text"},i.a.createElement(L,null,"No.Data")))}}]),a}(t.Component)),B=Object(g.b)(function(e){return{followSuggestions:e.appReducer.followSuggestions,isLoading:e.appReducer.isLoading}},function(e){return{followSuggestionsLoaded:function(a){return e(function(e){return{type:"FOLLOW_SUGGESTIONS_LOADED",userProfiles:e}}(a))}}})(J),I=(n(74),function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"rg-home-page"},i.a.createElement("div",{className:"rg-home-page__list-div"},i.a.createElement(B,null)))}}]),a}(t.Component)),N=Object(g.b)(function(e){return{serverUrl:e.appReducer.serverUrl}},function(e){return{appError:function(a){return e(function(e){return{type:"APPLICATION_ERROR",message:e}}(a))}}})(Object(p.e)(I)),x=(n(80),{de:w,en:E});Object(h.c)([].concat(Object(u.a)(j.a),Object(u.a)(S.a)));var W=Object(y.c)(k),z=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=navigator.language.split(/[-_]/)[0];return e=function(e){return A.indexOf(e)>-1}(e)?e:T,i.a.createElement(g.a,{store:W},i.a.createElement(h.b,{locale:e,messages:x[e]},i.a.createElement(f.a,null,i.a.createElement("main",{className:"h-100"},i.a.createElement(p.c,null,i.a.createElement(p.a,{exact:!0,path:P,component:N}))))))}}]),a}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[43,1,2]]]);
//# sourceMappingURL=main.dc3f3285.chunk.js.map