// Add basic helpers classes
document.querySelector('body').classList.add('devinci-custom')
console.log(1)

// Change icons on sidebar menu
let iconMenu = [
    ["fas", "fa-home"],
    ["fas", "fa-virus"],
    ["fab", "fa-microsoft"],
    ["fas", "fa-book"],
    ["fas", "fa-brain"],
    ["fas", "fa-bullhorn"],
    ["fas", "fa-lightbulb"],
    ["fas", "fa-quidditch"],
    ["fas", "fa-database"],
    ["fas", "fa-print"],
    ["fas", "fa-chalkboard-teacher"],
    ["fas", "fa-globe-americas"]
]
let loopMenuIcon = 0
document.querySelectorAll(".social-sidebar .menu .accordion-toggle").forEach(function (item){
    let icon = document.createElement('i')
    icon.classList.add(...iconMenu[loopMenuIcon])
    item.insertAdjacentElement('afterbegin', icon)
    loopMenuIcon++
})

// Add class to main menu
document.querySelector('.tools.small_margin').classList.add('main-menu')
// Change icons and text on main menu
let iconMainMenu = [
    ["fas", "fa-home", "Accueil"],
    ["fas", "fa-calendar", 'Emploi du temps'],
    ["fas", "fa-user-times", 'Mes absences'],
    ["fas", "fa-file-signature", 'Attestations (alternance)'],
    ["fas", "fa-thumbs-up", "Mes notes"],
    ["fas", "fa-chalkboard-teacher", "Mes cours"],
    ["fas", "fa-folder", "Documents"],
    ["fab", "fa-black-tie", "Stages"],
    ["fas", "fa-globe-americas", "International"],
    ["fas", "fa-clipboard-check", "Rendus"],
    ["fas", "fa-euro-sign", "Finances"],
    ["fas", "fa-bullhorn", "Mes actions de promo."],
    ["fas", "fa-exclamation", "Relevé de présence"]
]
let loopMainMenuIcon = 0
document.querySelectorAll('.main-menu > a').forEach(function (item){
    let iconMenu = item.querySelector('i')
    iconMenu.className = "";
    iconMenu.classList.add(iconMainMenu[loopMainMenuIcon][0])
    iconMenu.classList.add(iconMainMenu[loopMainMenuIcon][1])
    console.log(item.childNodes[2])
    console.log(iconMainMenu[loopMainMenuIcon][2])
    item.childNodes[2].textContent = iconMainMenu[loopMainMenuIcon][2]
    loopMainMenuIcon++
    //

})
// Add dropdown menu to main menu
document.querySelector('.main-menu').insertAdjacentHTML('beforeend', "<div class=\"btn-group\">\n" +
    "  <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n" +
    "    <i class=\"fas fa-info\"></i> Voir plus \n" +
    "    <span class=\"caret\"></span>\n" +
    "  </a>\n" +
    "  <ul class=\"dropdown-menu\">\n" +
    "    <!-- dropdown menu links -->\n" +
    "  </ul>\n" +
    "</div>")

// Place most unpopular items inside this dropdown
document.querySelectorAll(".main-menu > a:nth-of-type(4),.main-menu > a:nth-of-type(8), .main-menu > a:nth-of-type(9), .main-menu > a:nth-of-type(10), .main-menu > a:nth-of-type(11), .main-menu > a:nth-of-type(12)").forEach(function (item){
    let listItem = document.createElement('li')
    listItem.insertAdjacentElement('afterbegin', item)
    document.querySelector('.main-menu ul.dropdown-menu').insertAdjacentElement('afterbegin', listItem)
})

// Move main menu after the page title
let url = window.location.href;
if(url.includes('?')){
    var menu = document.querySelectorAll('#main > div.container-fluid .tools')[0];
}else{
    var menu = document.querySelectorAll('#main > div.container-fluid .tools')[1];
}
let title = document.querySelector('.page-title').parentElement
title.insertAdjacentElement('beforebegin', menu)
console.log(2)

// Move burger navigation on topbar
var topbar = document.querySelector('.brand').parentElement
topbar.insertAdjacentElement('afterbegin', document.querySelector('.navigation-sidebar'))
console.log(3)

// Check if is mark page
if(document.querySelector('.notes') != null) {
    console.log('oui notes')
    document.querySelector('body').classList.add('custom-notes')

    document.querySelectorAll('.dd-item.entry_elements').forEach(function (item) {
        if(!item.classList.contains('dd-module')) {
            item.classList.add('dd-module')
        }
    })

    // Add helpers classes to marks bloc
    document.querySelector('.notes').closest('.social-blue').classList.add('notes-main')
    document.querySelectorAll('.dd-unite-student').forEach(function(item){
        item.closest('.dd-list').classList.add('notes-ue')
    })

    // Remove duplicates 'IIM' word in choice year table
    document.querySelectorAll('td:nth-of-type(2)').forEach(function (item){
        let content = item.textContent.split(" ")
        if(content[0] === content[1]) {
            var output = content.slice(1)
        } else {
            var output = content
        }
        item.textContent = output.join(' ')
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

//document.querySelector('.social-orange').closest('.social-box.social-blue ').insertAdjacentElement('afterend', document.querySelector('.social-orange'))
