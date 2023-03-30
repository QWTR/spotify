let lastNode 
let isShow = false
let lastId
let ldata
const OpenManagmentMenu = (e) =>{
    lastId = (e.children[1].id).substr(-1)
    lastNode = e.children[1].id
    document.getElementById(e.children[1].id).style = "display:block;"
    isShow = true
};
window.addEventListener('click', function(e){
 
    if (e.target.offsetParent.id != 'PlayListsong__management-'+lastId && e.target.offsetParent.id != 'holder-'+lastId){
        document.getElementById(lastNode).style = "display:none;"
  } 
})
const MouseInDiv = (e) =>{
    document.querySelector('#'+e.children[0].id).style = "display:none;"
    document.querySelector('#PlayListsong__Numbers'+((e.children[0].id).substr(e.children[0].id.lastIndexOf('-')))).style = "display:block;"
    document.getElementById(e.children[0].parentNode.id).style = 'background:var(--backgroundColor-fr);'
}
const MouseOutDiv = (e) =>{
    document.querySelector('#PlayListsong__Numbers'+((e.children[0].id).substr(e.children[0].id.lastIndexOf('-')))).style = "display:none;"
    document.getElementById(e.children[0].parentNode.id).style = 'background:var(--backgroundColor-th);'
    document.querySelector('#'+e.children[0].id).style = "display:block;"
}
    
    
