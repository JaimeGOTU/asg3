/*Stablishing a connection*/
(function(){
    function Start()
    {
        console.log("App Started"); 
        /*This section triggers when we click on a danger button*/
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for (button of deleteButtons)
        {
            /*when we click on said link, this function triggers*/
            button.addEventListener('click',(event)=>{
                /*it prompts an "are you sure message?"*/
                if(!confirm("Are You Sure?"))
                {
                    /*if not, it prevents the effect of the button, and sends you to /game-list*/
                    event.preventDefault();
                    window.location.assign('/game-list')
                }
            });
        }
    }
    /*when the page / server side loads*/
    window.addEventListener("load", Start)
})();