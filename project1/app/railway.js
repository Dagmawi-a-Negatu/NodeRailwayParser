/**
 * CS 253 Project 1 - Railway Network Data Structure Manipulation.
 *
 * This project is designed to process and manipulate data structures representing railway networks. It involves 
 * receiving a JSON file containing details of a Railway Network and constructing a manipulable data structure 
 * from it. The core functionalities include processing the railway network's name, manipulating route objects, 
 * adding distances to routes, generating summaries of the network or individual routes, searching for specific 
 * routes by name, calculating the longest route and the total number of unique stations across a route, 
 * and organizing routes by name or distance in various orders.
 *
 * Contributions:
 * - Andrew Scott (2019): Initial creation of the project.
 * - Michael Hudson, Dagmawi Negatu (2/25/2023): Further development and introduction of new functionalities that 
 *   includes more route manipulation and search operations.
 */



/**
 * Constructs a Railway Network Data Structure from a JSON File
 *
 * Given the file name and path of a JSON file, this function reads the file
 * and constructs an object representing the railway network. The resulting
 * data structure includes details such as the name of the railway network,
 * the routes within the network, and the stops along each route.
 *
 * @param {string} fileName - The name and path of the JSON file to be processed.
 * @returns {object} jsonData - An object representing the railway network. This
 *          object includes the network's name, its routes, and the stops for each route.
 */
function readData(fileName){

    let data;   // Initialize data variable

    /* Checks if file is uk.json */
    if(fileName !== 'uk.json'){
        data = null;
    }

    /* Goes at the top of the node module to import the fs library */
    let fs = require('fs');

    let jsonData = null;

    try{
    /* Reads the contents of the given file */
    data = fs.readFileSync(process.argv[2],"utf-8");
    }
    catch(error){
        data = null;
    }
    /* Checks if file can be initialized */
    if(data !== null){

        try{

        /* Converts the JSON data string into a JavaScript object */
        jsonData = JSON.parse(data);

        /* Adds distance property to each route */
        //addDistances(jsonData);

        } catch (jsonError){
            console.log("Error parsing JSON file");
        }
    }

    return jsonData;
}




/**
 * Conduct a range of tests on the functions developed
 *@param fileName {String} The name and path of the JSON file to load.
 *@param lineName {String} The name of line to looke for in test 5.
 **/
function main (fileName, lineName){

    //Load the railway data structure from rom file.
    let data = readData(fileName);

    //Test route name
   console.log("===TEST=1=NETWORK=NAME==="); 
   console.log( getNetworkName(data) );

   //Test getting routes
   //console.log("\nTEST=2=GETTING=ROUTES=ARRAY");
   //console.log("There are " + getRoutes(data).length + "routes on this network");
   //console.log("The typeof the routes is " + typeof getRoutes(data));
   
   //Test getting route names
   //console.log("\n===TEST=3=ROUTE=NAMES===");
   //console.log(getRouteNames(data));

   //Test getting route names formated as a String
   //console.log("\n===TEST=4=ROUTE=NAMES=TOSTRING===");
    //console.log(routeNamesToString(data));

    //Test getting data for one route
    //console.log("\n===TEST=5=GET=ROUTE===")
    //let route =getRoute(data, lineName);
    //if(route != null)
         //console.log( "Found: " + route.name);
    //else
          //console.log("Route not found");

    //Test route toString
    //console.log("\n===TEST=6=ROUTE=TO=STRING===");
    //console.log(routeToString(route));

    //Test route distance calculation
    //console.log("\n===TEST=7=ROUTE=DISTANCE===");
    //var dist = routeDistance(route);
    //console.log("Distance of Line as calculated: " + dist);   

    //Test the routeSummay function
    //console.log("\n===TEST=8=ROUTE=SUMMARY===");
    //console.log(routeSummary(data));

    //Test sorting routes by name in ascending order
    //console.log("\n===TEST=9=SORT=ROUTE=BY=NAME===");
    //sortRoutesByName(data, true);
    //console.log(routeSummary(data));

    //Test sorting routes by name in descending order
    //console.log("\n===TEST=10=SORT=ROUTE=BY=NAME=(DESC)===");
    //sortRoutesByName(data);
    //console.log(routeSummary(data));

    //Test sorting in assending order
    //console.log("\n===TEST=11=SORT=ROUTE=BY=LENGTH=(ASC)===");
    //sortRoutesByLength(data, true);
    //console.log(routeSummary(data));
    
    //Test sorting in descending order
    //console.log("\n===TEST=12=SORT=ROUTE=BY=LENGTH=(DESC)===");
    //sortRoutesByLength(data, false);
    //console.log(routeSummary(data));
    
    //Test finding the longest route
    //console.log("\n===TEST=13=FIND=LONGEST=ROUTE===");
    //route = findLongestRoute(data);
    //console.log("Longest route is: "  +routeToString(route) + "\n");

    //Test routeDistance
    //console.log("\n===TEST=14=Total_Stations===");
    //let n = totalStations(data);
    //console.log("There are " + n + " stations in this network.");

    //TEst finding route from to.
    //console.log("\n====(OPTIONAL) TEST=BONUS1=FIND=FROM=TO===");
    //let str = findRoute(data, "Cardiff","Reading");
    //console.log(">>END>>"+ str);

}//end main

//Call the main function
if (require.main === module){
	
	main("railtrack_uk.json","West Coast Main Line");
	//main(process.argv[2],process.argv[2]);//uncomment to use command line arguments.
}
