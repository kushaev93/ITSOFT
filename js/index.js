document.addEventListener("DOMContentLoaded", function(){
    var burg = document.getElementById('burg').addEventListener('click', function(event){
        let sideBar = document.getElementById('side').classList.toggle('sidebar-active');
        this.classList.toggle('burg-active');
    })
});
