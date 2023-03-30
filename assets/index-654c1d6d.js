(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function l(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerpolicy&&(e.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?e.credentials="include":s.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(s){if(s.ep)return;s.ep=!0;const e=l(s);fetch(s.href,e)}})();for(let i=1;i<=11;i++)document.querySelector(".songsList").innerHTML+=`
        <div class="PlayListsong" id="PlayListsong-${i}" onmouseenter="MouseInDiv(this)" onmouseleave="MouseOutDiv(this)">
                        
        <div class="PlayListsong__Number" id="PlayListsong__Number-${i}">${i}</div>
        <div class="PlayListsong__Numbers" id="PlayListsong__Numbers-${i}"><i class="fa-sharp fa-solid fa-play"></i></div>
        <div class="PlayListsong__info">
        <div class="imageTitle">
            <div class="Image">
            <img src="https://i.scdn.co/image/ab67616d00001e02f1cd20274082ccab3d6f9642" alt="">
            </div>
            <div class="Title">
            <a href="#"><span class="lowTitle">Skandal</span></a>
            <a href="#"><span class="nTitle">Skandal</span></a>
            </div>
        </div>
        <div class="Artist">
            <span class="lowTitle">Artists</span>
            <a href="#"><span class="nTitle">Sentino</span></a>
        </div>
        <div class="Time">
            <span class="lowTitle">Time</span>
            <span class="nTitle">2:42</span>
        </div>
        </div>
        <div class="PlayListsong__management" id="PlayListsong__management-${i}">
            <i class="fa-regular fa-heart"></i>
        <div class="openMan" onclick="OpenManagmentMenu(this)" >
        <i class="fa-solid fa-ellipsis"></i>
        <div class="SongMenu" id="SongMenu-${i}">
            <div class="holder" id="holder-${i}">
                <div>Add to queue</div>
                <a href="#"><p>Go to the track</p></a>
                <a href="#"><p>Go to the artist</p></a>
                <a href="#"><p>Go to album</p></a>
                <div>Show content authors</div>
                <p>Add to playlist</p>
                <div>Show content authors &nbsp;<i class="fa-solid fa-angle-right"></i></div>
                <p>Share &nbsp;<i class="fa-solid fa-angle-right"></i></p>
            </div>
        </div>
        </div>
    </div>
    </div>
   
    `;
