(()=>{const e=document.getElementById("links"),t=document.querySelector("h1"),n={name:"Daniel Sammuel Cuayahuitl Perez",nickname:"gndx",description:"...",avatar:"...",social:[{name:"twitter",url:"https://twitter.com/",username:""},{name:"instagram",url:"https://instagram.com/",username:""}],links:[{name:"blog",url:"https://example.com/",color:"red",emoji:"📖"},{name:"podcast",url:"https://example.com/",color:"yellow",emoji:"💬"}],footer:"Mexico"};(()=>{let o=document.createTextNode(n?.name),a=n?.links?.map((e=>`<div class="bg-${e.color}-200 px-4 py-5 w-full flex justify-between">\n        <a class="text-sm font-bold text-${e.color}-600 text-center hover:text-${e.color}-800 cursor-pointer"\n          href="${e.url}" target="_blank">\n          ${e.name}\n        </a>\n        <span>${e.emoji}</span>\n      </div>`)).join(""),l=document.createElement("section");l.innerHTML=a,e.appendChild(l),t.appendChild(o)})()})();