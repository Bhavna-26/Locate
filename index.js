var iframe = document.getElementById("map");
function getInputValue() {
        // Selecting the input element and get its value 
        let address = document.getElementById("loc").value;
        // Displaying the value
        const apiUrl=`https://www.mapquestapi.com/geocoding/v1/address?key=PG4ruMPLfCpRr2RxOZYCoAcOavYz2fbC&inFormat=kvp&outFormat=json&location=${address}&thumbMaps=false`
      fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
              if (data.results && data.results.length > 0) {
          const embedUrl = `https://www.google.com/maps/embed/v1/search?q=+recycling+centers+${encodeURIComponent(
            address
          )}&key=AIzaSyDJdSdQdSfsLGtGKrbSPjxO2ArldNAcBU0`;
iframe.src=embedUrl;
   iframe.style.display = "block";
          console.log(embedUrl)
        } 
         
      })
      .catch((err) => {
        console.error("Requested resource not found", err);
      });
  
        
      }