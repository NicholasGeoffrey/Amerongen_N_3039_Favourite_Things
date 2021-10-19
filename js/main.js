(()=> {
    const   theTeam = document.querySelector("#favourite-things"),
            theTemplate = document.querySelector("#bio-template").content; 

    let buttons = document.querySelectorAll("button");

    function buildControls() {
        // you would just create your three buttons here - one for each "thing" in your data.json object
        // we can work on this after you get the data showing up - it's hard-coded into your HTML so no need to do this right now

        console.log("build your buttons when this function fires - we'll do this later");
    }

    // Step 1
    // add a variable here to store the data you retrieve in your fetch call (something like this: things = {})

    function showData() {
        // key is the reference to the piece of the data object you're using
        // as an example when you click on the Hamilton button, then you want the info from the
        // Hamilton object inside your data.json file

        let key = this.dataset.key;

        // you want to now select the bio panel from index.html, not just the headline
        // and change its content depending on which button you click
        let thingPanel = document.querySelector("#bio-panel").children;

        thingPanel[0].querySelector('img').src = `images/${things[key].poster}`;
        thingPanel[1].textContent = things[key].title;
        thingPanel[2].textContent = things[key].media;
        thingPanel[3].textContent = things[key].description

    }

    function getData() {
        //use the Fetch API to retrieve some data
        fetch("./data.json")
        .then(res => res.json()) // unpack the API response (turn it back into plain js)
        .then(data => {
            console.log(data);

            // Step 2
            // save your data into the variable you set up above (like this: things = data)

            buildControls(data);           
        })
    }
    
    // when you click on a button, you want to show that "thing"'s data, not build controls
    buttons.forEach(button => button.addEventListener("click", showControls));

    // dont' need to pass arguments here because the getData function isn't expecting any - it's in this file
    getData();
 
})();