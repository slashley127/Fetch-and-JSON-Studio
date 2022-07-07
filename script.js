// TODO: add code here

window.addEventListener("load", function(){
    let json = []
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        response.json().then(function(json){
            const astronauts = document.getElementsByTagName("title");
            const container = document.getElementById("container");
            let index = 0;
            astronauts.addEventListener("click", function(){
               container.innerHTML = `
               <div class="astronaut">
                    <div class ="bio">
                        <h3>Name ${json[index].firstName} ${json[index].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${json[index].hoursInSpace}</li>
                        </ul>
                    </div>
                </div>
                `;
                //index = (index+1) % json.length
                        
            });
        });
    });
});