document.querySelectorAll('.popup--tabs-item').forEach(function(tab){
    tab.addEventListener('click', function (){
        document.querySelectorAll('.popup--tabs-item').forEach(function(tab){tab.classList.remove('active')})
        this.classList.toggle('active')
        document.querySelectorAll(".popup--body > div").forEach(function(item){
            item.classList.remove('active')
        })
        let target = "."+this.dataset.tab
        document.querySelector(target).classList.add('active')
    })
})