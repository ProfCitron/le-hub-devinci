// Add basic helpers classes
document.querySelector('body').classList.add('devinci-custom')
console.log(1)

// Move this shitting menu after the page title
let url = window.location.href;
if(url.includes('?')){
    var menu = document.querySelectorAll('#main > div.container-fluid .tools')[0];
}else{
    var menu = document.querySelectorAll('#main > div.container-fluid .tools')[1];
}
let title = document.querySelector('.page-title').parentElement
title.insertAdjacentElement('afterend', menu)
console.log(2)

// Move burger navigation on topbar
var topbar = document.querySelector('.brand').parentElement
topbar.insertAdjacentElement('afterbegin', document.querySelector('.navigation-sidebar'))
console.log(3)

// Check if is mark page
if(document.querySelector('.notes') != null) {
    console.log('oui notes')
    // Add helpers classes to marks bloc
    document.querySelector('.notes').closest('.social-blue').classList.add('notes-main')
    document.querySelectorAll('.dd-unite-student').forEach(function(item){
        item.closest('.dd-list').classList.add('notes-ue')
    })

    // Remove module ID
    // Create div to help CSS Layout
    document.querySelectorAll('.dd-module > .dd-handle').forEach(function(item){
        let moduleName = item.childNodes[2].textContent.trim().split(' ').slice(1).join(' ')
        let moduleDiv = document.createElement('p')
        moduleDiv.classList.add('module-name')
        moduleDiv.append(moduleName)
        item.childNodes[2].replaceWith(moduleDiv)
    })  

    // Remove useless elements in module for better layout
    document.querySelectorAll('.dd-module > .dd-handle > br, .dd-module > .dd-handle > i, .dd-module > .dd-handle > .divider-vertical, .dd-module > .dd-handle > .text-error, .dd-module > .dd-handle > .clear:not(:is(.note_commentaire))').forEach(function(item){
        item.remove()
    })

    // Remove useless elements on UE naming section 
    document.querySelectorAll('.notes .dd-unite-student > .dd-handle > i, .notes .dd-unite-student > .dd-handle > br, .notes .dd-unite-student > .dd-handle > .clear, .notes .dd-unite-student > .dd-handle > .divider-vertical').forEach(function(item){
        item.remove()
    })

} else {
    console.log('nop notes')
}
console.log(4)

// Calendar : Inject time on module data
function moveTime() {
    document.querySelectorAll('.fc-event.fc-start .fc-time').forEach(function(item){
        let timeBloc = item.parentElement;
        if(!timeBloc.classList.contains('fc-title')){
            item.nextElementSibling.insertAdjacentElement('afterbegin', item)
            timeBloc.querySelector('.prof').textContent = timeBloc.querySelector('.prof').textContent.slice(1,-1).split(' ').reverse().join(' ')
            timeBloc.querySelector('.salle').textContent = timeBloc.querySelector('.salle').textContent.slice(1,-1).split('-')[0].replace(/ *\([^)]*\) */g, "");
            if(timeBloc.parentElement.parentElement.querySelector('.edt_cmo .salle') != null) {
                timeBloc.parentElement.parentElement.querySelector('.edt_cmo .salle').innerHTML = "ZOOM"
            }
            
            
        }
    })
}

if(document.querySelectorAll('.fc-time') != null){
    document.querySelectorAll('.fc-prev-button, .fc-next-button, .fc-today-button, .fc-agendaWeek-button').forEach(function(item){
        item.addEventListener('click', function(){
            moveTime()
        })
    })
}
console.log(5)
