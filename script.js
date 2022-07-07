// TODO: add code here

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(fucntion(response){
        response.json().then(function(json){
            const container = document.getElementById("container");
            let index = 0;
            container.addEventListener("click", function(){
               container.innerHTML = `
               <div class="astronaut">
                    <div class ="bio">
                        <h3>${json[index].name}</h3>
                        <ul>
                            <li>Hours in space: ${json[index].hoursInSpace}</li>
                        </ul>
                    </div>
                </div>
                        `
                        
            })
        })
    })
})