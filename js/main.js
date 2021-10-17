(()=> {
    const theTeam = document.querySelector("#favourite-things"),
          theTemplate = document.querySelector("#bio-template").content;        
    
    let buttons = document.querySelectorAll("button")      
        // things = {};

      /*  function showData() {
           let key = this.dataset.key;
           let display = document.querySelector("h1");

           display.textContent = things[key].name;
       } */
    //start with fetch call
    function getData() {
        //use the Fetch API to retrieve some data
        fetch("./data.json")
        .then(res => res.json()) // unpack the API response (turn it back into plain js)
        .then(data => {
            console.log(data);
            getData = data;
            // do anything else here that we want with our data
            //call a function to generate our dynamic content
            buildTeam(data);
            // expandTeam(data);
        showFavourites(data);
        })
.catch(error => console.error(error)); //catch and report any errors

    }

    function buildTeam(info) {
        // first, get a reference to all of the people (the keys of the info object)
        let team = Object.keys(info);


        team.forEach(person => {
            let panel = theTemplate.cloneNode(true),
                memberInfo = panel.firstElementChild.children;

            memberInfo[0].querySelector('img').src = `images/${info[person].poster}`;
            memberInfo[1].textContent = info[person].title;
            memberInfo[2].textContent = info[person].media;
            memberInfo[3].textContent = info[person].description;

            //put the virtual panel in the tean section in our HTML page
            theTeam.appendChild(panel);
        })
        // next, clone the template because we can't use it directly
        debugger;
    }
     /*  function showFavourites(info) {
          info.forEach(thing => {
          let display = theTemplate.cloneNode(true),
          thingDisplay = display.firstElementChild.children;
            display,firstElementChild.dataset.key = thing.id;
          let key = this.dataset.key;
          //let thingDisplay = document.querySelector("favourite-things")
          thingDisplay[0].textContent = data[key].title;
          thingDisplay[1].textContent = data[key].media;
          thingDisplay[2].textContent = data[key].description;
          thingDisplay[4].querySelector('img').src = `images/${data[key].poster}`;

          theTeam.appendChild(display);
      })} */
   /*  function expandTeam(info) {
        // first, get a reference to all of the people (the keys of the info object)
        let team = Object.keys(info);
        if (theTemplate.children.length > 0) {
            theTemplate.innerHTML = "";
        }

        team.forEach(person => {
            let panel = theTemplate.cloneNode(true),
                memberInfo = panel.firstElementChild.children;

           
             memberInfo[1].textContent = info[person].title;
             memberInfo[2].textContent = info[person].media;
             memberInfo[3].textContent = info[person].description;

            //put the virtual panel in the tean section in our HTML page
            theTeam.appendChild(panel);
        })
        // next, clone the template because we can't use it directly
        debugger;
    } */  
   // function selectThing(info) {
   //    if (dataDisplay.children.length > 0) {
    //        dataDisplay.innerHTML = "";
    //    }
    //    let panel = theTemplate.cloneNode(true),
    //    memberInfo = panel.firstElementChild.children;

 //       memberInfo[1].textContent = info[person].title;
   //     memberInfo[2].textContent = info[person].media;
     //   memberInfo[3].textContent = info[person].description;
   // } panel.forEach(template => template.addEventlistener("click", selectThing));
    // invoke the getData function
    getData();

buttons.forEach(button => button.addEventListener("click", buildTeam));

   // selectThing();

}

)()