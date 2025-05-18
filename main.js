const like_sidebar = document.getElementById("like_sidebar");
const open_sidebar_button = document.getElementById("open_sidebar");
const close_sidebar_button = document.getElementById("close_sidebar");
const timeElement = document.getElementById("time");

const AppWindow = document.getElementById('windowComponents');
const AppResizeHandle = document.getElementById('AppResizeHandle');

const searchbox = document.getElementById("searchbox");
const searchbutton = document.getElementById("searchgo");

const osElement = document.getElementById("os");
const userAGElement = document.getElementById("useragent");
let searchEngineType = 'Brave';

let google_url = `https://www.google.com/search?q=`

let search_url = 'https://search.brave.com/search?q='

function openSidebar(){
    like_sidebar.style.width = "50px";
    like_sidebar.style.transition = "0.5s";
    open_sidebar_button.style.display = 'none';
    close_sidebar_button.style.display = 'block';
}   
    
function closeSidebar(){
    like_sidebar.style.width = "0px";
    like_sidebar.style.transition = "0.5s";
    open_sidebar_button.style.display = 'block';
    close_sidebar_button.style.display = 'none';

}


function searchEngine(){
    searchbutton.onclick = function() {
        let searchinfo = searchbox.value; 
        localStorage.setItem("like_search_query", searchinfo);
        localStorage.setItem("searchEngineType", searchEngineType);

        // GO !!!
    //    window.location.href = 'searchv1/search.html';
        window.location.href = search_url + searchinfo;
    }
}   

function getDateNow(){
    const date = new Date();
    const hour = (date.getHours() <10 ? '0' : '') + date.getHours();
    const minute = (date.getMinutes() < 10 ? '0': '') + date.getMinutes();
    return hour + ':' + minute;

}
function updateTime(){
    timeElement.textContent = getDateNow();
}


/* 
}

function openWindow(){
    document.querySelector('.windowOverlay').style.display = 'block';
}

function closeWindow(){
    document.querySelector('.windowOverlay').style.display = 'none';
}

let dragging = false;
let resizing = false;
let dragX = 0;
let dragY = 0;

AppWindow.addEventListener('mousedown', (event) => {
    if(event.target === AppResizeHandle){
        return;
    }

    dragging = true;
    dragX = event.clientX - AppWindow.offsetLeft;
    dragY = event.clientY - AppWindow.offsetTop;
    event.preventDefault();
});

document.addEventListener('mouseup', ()=> {
    dragging = false;
    resizing = false;   
});

document.addEventListener('mousemove', (event) => {
    if(dragging){
        AppWindow.style.left = (event.clientX - dragX) + 'px';
        AppWindow.style.top = (event.clientY - dragY) + 'px';
    } else if(resizing){
        const rect = AppWindow.getBoundingClientRect();
        let newWidth = event.clientX - rect.left;
        let newHeight = event.clientY - rect.top;

        const minWidth = 200;
        const minHeight = 150;

        if(newWidth > minWidth)AppWindow.style.width = newWidth + 'px';
        if(newHeight > minHeight)AppWindow.style.height = newHeight + 'px';
    }
});

AppResizeHandle.addEventListener('mousedown', (event)=> {
    event.preventDefault();
    resizing = true;
});


*/

const userAG = navigator.userAgent;
function userAgent(){
    return userAG.toLowerCase();
}

function osType(){
    let os = 'Unknown';
    
    if(window.navigator.userAgent.indexOf("Windows NT 10.0")!= 1) os="Windows NT 10.0";
    else if(window.navigator.userAgent.indexOf("Windows NT 11.0")!= 1) os="Windows NT 11.0";
    else if(window.navigator.userAgent.indexOf("Windows NT 6.3")!=  1) os="Windows NT 8.1" ;
    else if(window.navigator.userAgent.indexOf("Windows NT 6.2")!=  1) os="Windows NT 8"   ;
    else if(window.navigator.userAgent.indexOf("Windows NT 6.1")!=  1) os="Windows NT 7"   ;
    else if(window.navigator.userAgent.indexOf("Linux")!=  1) os="Linux"                   ;
    else if(window.navigator.userAgent.indexOf("Mac")!=  1) os="MacOS/iOS"                 ;
    return os;

}
osElement.textContent = osType();
userAGElement.textContent = userAgent();
updateTime();
setInterval(updateTime, 1000);
searchEngine();
