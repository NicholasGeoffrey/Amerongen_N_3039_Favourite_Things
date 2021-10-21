(()=> {
   // const   theTeam = document.querySelector("#favourite-things"),
     //       theTemplate = document.querySelector("#bio-template").content; 

    const btn = document.querySelectorAll(".btn");
    let thingsList;

    function getData() {
        //use the Fetch API to retrieve some data
        fetch("./data.json")
        .then(res => res.json()) // unpack the API response (turn it back into plain js)
        .then(data => {
           

            // Step 2
            // save your data into the variable you set up above (like this: things = data)
            thingsList = data;
           return thingsList;
            // buildControls(data);    
                  
        })
        .catch(error => console.error(error));
    }

    function buildControls(data) {
        // you would just create your three buttons here - one for each "thing" in your data.json object
        // we can work on this after you get the data showing up - it's hard-coded into your HTML so no need to do this right now
        let thingsList = Object(data);
        /* console.log("build your buttons when this function fires - we'll do this later");
        showData(); */
    }

    // Step 1
    // add a variable here to store the data you retrieve in your fetch call (something like this: things = {})
    
    

    function showData(event) {
        // key is the reference to the piece of the data object you're using
        // as an example when you click on the Hamilton button, then you want the info from the
        // Hamilton object inside your data.json file

        let key = event.target.dataset.list;
        console.log(key)
        buildControls();
        console.log(thingsList);
        // you want to now select the bio panel from index.html, not just the headline
        // and change its content depending on which button you click
        let thingTitle = document.querySelector("h2"),
        thingPoster = document.querySelector("img"),
        thingMedia = document.querySelector("h3"),
        thingDescription = document.querySelector("p");

    thingPoster.src = `images/${thingsList[key].poster}`;
    thingTitle.textContent = thingsList[key].title;
    thingMedia.textContent = thingsList[key].media;
    thingDescription.textContent = thingsList[key].description;
    
    


     
        /*   let thingPanel = document.querySelector("#bio-panel").children;

        thingPanel[0].querySelector('img').src = `images/${things[key].poster}`;
        thingPanel[1].textContent = things[key].title;
        thingPanel[2].textContent = things[key].media;
        thingPanel[3].textContent = things[key].description */

    }

   
    getData();
    // when you click on a button, you want to show that "thing"'s data, not build controls
    btn.forEach(button => button.addEventListener("click", showData));

    // dont' need to pass arguments here because the getData function isn't expecting any - it's in this file
   
 
})();