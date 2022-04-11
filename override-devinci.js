// Add basic helpers classes
let uri = window.location.href
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

// Remove photo section
// if(document.getElementById('div_photo_upl') != null) {
//     document.getElementById('div_photo_upl').remove()
// }

// // Add class to main menu
// console.log(document.querySelectorAll('.tools'))
// document.querySelectorAll('.tools')[0].classList.add('main-menu')
// // Change icons and text on main menu
// let iconMainMenu = [
//     ["fas", "fa-home", "Accueil"],
//     ["fas", "fa-calendar", 'Emploi du temps'],
//     ["fas", "fa-user-times", 'Mes absences'],
//     ["fas", "fa-file-signature", 'Attestations (alternance)'],
//     ["fas", "fa-thumbs-up", "Mes notes"],
//     ["fas", "fa-chalkboard-teacher", "Mes cours"],
//     ["fas", "fa-folder", "Documents"],
//     ["fab", "fa-black-tie", "Stages"],
//     ["fas", "fa-globe-americas", "International"],
//     ["fas", "fa-clipboard-check", "Rendus"],
//     ["fas", "fa-euro-sign", "Finances"],
//     ["fas", "fa-bullhorn", "Mes actions de promo."],
//     ["fas", "fa-exclamation", "Relevé de présence"]
// ]
// let loopMainMenuIcon = 0
// document.querySelectorAll('.main-menu > a').forEach(function (item){
//     let iconMenu = item.querySelector('i')
//     iconMenu.className = "";
//     iconMenu.classList.add(iconMainMenu[loopMainMenuIcon][0])
//     iconMenu.classList.add(iconMainMenu[loopMainMenuIcon][1])
//     console.log(item.childNodes[2])
//     console.log(iconMainMenu[loopMainMenuIcon][2])
//     item.childNodes[2].textContent = iconMainMenu[loopMainMenuIcon][2]
//     loopMainMenuIcon++
//     //

// })
// // Add dropdown menu to main menu
// document.querySelector('.main-menu').insertAdjacentHTML('beforeend', "<div class=\"btn-group\">\n" +
//     "  <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n" +
//     "    <i class=\"fas fa-info\"></i> Voir plus \n" +
//     "    <span class=\"caret\"></span>\n" +
//     "  </a>\n" +
//     "  <ul class=\"dropdown-menu\">\n" +
//     "    <!-- dropdown menu links -->\n" +
//     "  </ul>\n" +
//     "</div>")

// // Place most unpopular items inside this dropdown
// document.querySelectorAll(".main-menu > a:nth-of-type(4),.main-menu > a:nth-of-type(8), .main-menu > a:nth-of-type(9), .main-menu > a:nth-of-type(10), .main-menu > a:nth-of-type(11), .main-menu > a:nth-of-type(12)").forEach(function (item){
//     let listItem = document.createElement('li') // <li> </li>
//     listItem.insertAdjacentElement('afterbegin', item) // <li> a href stage </li>
//     document.querySelector('.main-menu ul.dropdown-menu').insertAdjacentElement('beforeend', listItem)
// })

// // Url testing
// let url = window.location.href;
// if(url === "https://www.leonard-de-vinci.net/") {
//     document.querySelector(".social-box .body > .row-fluid:nth-of-type(2) > .span6 > .row-fluid").remove()
// }


// Move main menu after the page title
/*
let url = window.location.href;
if(url.includes('?')){

}else{

}
*/

// let menu = document.querySelectorAll('#main > div.container-fluid .tools')[0];
// let title = document.querySelector('.page-title').parentElement
// title.insertAdjacentElement('beforebegin', menu)
// console.log(2)

// Move burger navigation on topbar
// var topbar = document.querySelector('.brand').parentElement
// topbar.insertAdjacentElement('afterbegin', document.querySelector('.navigation-sidebar'))
// console.log(3)

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
console.log(7)

//document.querySelector('.social-orange').closest('.social-box.social-blue ').insertAdjacentElement('afterend', document.querySelector('.social-orange'))


/**
 * Remove right main menu items
 * Contains notifications, disconnect, flags...
 */
document.querySelector('.navbar-blue.social-navbar .nav.pull-right.nav-indicators').remove();


/**
 * Add custom title
 * Instead of IIM logo & Student name
 */
document.querySelector('.navbar-inner-pres .navbar-inner-title').innerHTML = 'IIM - Digital School (v1.1-beta - Moded by LPC)';


/**
 * Move burger menu
 */
let burger = document.querySelector(".navigation-sidebar")
let mainMenu = document.querySelector('.navbar-inner-pres')
mainMenu.insertAdjacentElement('afterbegin', burger)


/**
 * Add app download to main nav
 */
document.querySelector(".navbar.navbar-blue > .navbar-inner > .container-fluid").insertAdjacentHTML('beforeend', 
    "<div class='download-app'>" + 
    "<p>Télécharger l'application</p>" +
    "<a href='https://apps.apple.com/fr/app/mydevinci/id1576224187'><i class='fab fa-apple'></i></a>" + 
    "<a href='https://play.google.com/store/apps/details?id=fr.devinci.student&gl=FR'><i class='fab fa-google-play'></i></a>" +
    "</div>"
)

/**
 * Remove useless thing on main page
 */
if(uri == "https://www.leonard-de-vinci.net/") {
    document.querySelector('#main .container-fluid > .row-fluid .body  > .row-fluid > .span6  > .row-fluid').remove()
}

/**
 * Add custom buttons for UX navigation (you know)
 */
console.log(document.querySelector('#main .breadcrumb > div'))
document.querySelector('#main .breadcrumb > div > a').remove()
document.querySelector('#main .breadcrumb > div').classList.add('custom-override-nav')
document.querySelector('#main .breadcrumb > div').insertAdjacentHTML('afterbegin', 
    "<div class='override-nav'><a href='https://www.leonard-de-vinci.net/?my=edt'><i class='fas fa-calendar-day'></i><span>E.D.T</span></a></div>" + 
    "<div class='override-nav'><a href='https://www.leonard-de-vinci.net/?my=marks'><i class='fas fa-chalkboard-teacher'></i><span>Notes</span></a></div>" + 
    "<div class='override-nav'><a href='https://www.leonard-de-vinci.net/student/presences/'><i class='fas fa-user-check'></i><span>Présence</span></a></div>"
)

/**
 * Add course area indicators on better area (Uwu jeu de mot)
 */
 if(uri == "https://www.leonard-de-vinci.net/?my=edt") {
    document.querySelector('#main .social-box').parentNode.insertAdjacentHTML('beforebegin', 
    "<div class='row-fluid'><div class='span12' style='color:red;'><i>ATTENTION : LES COULEURS SONT ENCORE INCERTAINES (extension en beta) - MERCI DE NE PAS VOUS FIER QU'AUX COULEURS, SE FIER AUX SALLES INSCRITES</i></div></div>" +
    "<div class='row-fluid'><div class='span12 edt-badges'>" +
    "<div class='edt-badges-card arche'>Campus de l'arche</div>" + 
    "<div class='edt-badges-card online'>Online - Zoom</div>" + 
    "<div class='edt-badges-card pole'>Pôle la défense</div>" + 
    "<div class='edt-badges-card formeret'>Espace Formeret</div>" + 
    "<div class='edt-badges-card nd'>Non défini</div>" + 
    "</div></div>"
    )
 }


/**
 * Duplicate time schedule to see today's course on col-4 and weekly courses on col-8
 */
 if(uri == "https://www.leonard-de-vinci.net/?my=edt") {
    let originalSchedule = document.querySelector('#main .social-box')

    // Remove legend
    let nodeRemove = originalSchedule.querySelector('.body').childNodes
    for(let i = 0; i < 13; i++) {
        nodeRemove[0].remove()
    }
    // Remove orginals cols, and add cols matches the cloned element
    originalSchedule.classList.remove('span12')
    originalSchedule.classList.add('span4')
    // Similate click on today for cloned element
    originalSchedule.querySelector('.fc-agendaDay-button.fc-button.fc-state-default.fc-corner-right').click()

    // Clone begin
    let newSchedule = originalSchedule.cloneNode(true)
    newSchedule.classList.add('day-scheduled')

    // On original, re-add good cols number
    originalSchedule.classList.remove('span4')
    originalSchedule.classList.add('span8')

    // Add clone to website
    originalSchedule.insertAdjacentElement('beforebegin', newSchedule)

    // Original keed weekly view
    originalSchedule.querySelector(".fc-agendaWeek-button.fc-button.fc-state-default").click()

    // Remove useless thing on cloned element
    newSchedule.querySelector('header .pull-right').remove()
    let scheduleDay = newSchedule.querySelector('#calendar h2').textContent
    document.querySelector(".day-scheduled header h4").textContent = "Aujourd'hui : "+scheduleDay
    newSchedule.querySelector('#calendar .fc-toolbar').remove()
    newSchedule.querySelector('#calendar .fc-view-container .fc-head').remove()
    newSchedule.querySelector('#calendar .fc-view-container .fc-day-grid').remove()
    newSchedule.querySelector('#calendar .fc-view-container .fc-divider.fc-widget-header').remove()
 }

 /**
  * Add classes based on page 
 */
if(uri == "https://www.leonard-de-vinci.net/") {
    document.querySelector('body').classList.add("override-home")
}