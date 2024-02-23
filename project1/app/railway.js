//Add your names in here

//Add your functions here.

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
   console.log("\nTEST=2=GETTING=ROUTES=ARRAY");
   console.log("There are " + getRoutes(data).length + "routes on this network");
   console.log("The typeof the routes is " + typeof getRoutes(data));
   
   //Test getting route names
   console.log("\n===TEST=3=ROUTE=NAMES===");
   console.log(getRouteNames(data));

   //Test getting route names formated as a String
   console.log("\n===TEST=4=ROUTE=NAMES=TOSTRING===");
    console.log(routeNamesToString(data));

    //Test getting data for one route
    console.log("\n===TEST=5=GET=ROUTE===")
    let route =getRoute(data, lineName);
    if(route != null)
         console.log( "Found: " + route.name);
    else
          console.log("Route not found");

    //Test route toString
    console.log("\n===TEST=6=ROUTE=TO=STRING===");
    console.log(routeToString(route));

    //Test route distance calculation
    console.log("\n===TEST=7=ROUTE=DISTANCE===");
    var dist = routeDistance(route);
    console.log("Distance of Line as calculated: " + dist);   

    //Test the routeSummay function
    console.log("\n===TEST=8=ROUTE=SUMMARY===");
    console.log(routeSummary(data));

    //Test sorting routes by name in ascending order
    console.log("\n===TEST=9=SORT=ROUTE=BY=NAME===");
    sortRoutesByName(data, true);
    console.log(routeSummary(data));

    //Test sorting routes by name in descending order
    console.log("\n===TEST=10=SORT=ROUTE=BY=NAME=(DESC)===");
    sortRoutesByName(data);
    console.log(routeSummary(data));

    //Test sorting in assending order
    console.log("\n===TEST=11=SORT=ROUTE=BY=LENGTH=(ASC)===");
    sortRoutesByLength(data, true);
    console.log(routeSummary(data));
    
    //Test sorting in descending order
    console.log("\n===TEST=12=SORT=ROUTE=BY=LENGTH=(DESC)===");
    sortRoutesByLength(data, false);
    console.log(routeSummary(data));
    
    //Test finding the longest route
    console.log("\n===TEST=13=FIND=LONGEST=ROUTE===");
    route = findLongestRoute(data);
    console.log("Longest route is: "  +routeToString(route) + "\n");

    //Test routeDistance
    console.log("\n===TEST=14=Total_Stations===");
    let n = totalStations(data);
    console.log("There are " + n + " stations in this network.");

    //TEst finding route from to.
    console.log("\n====(OPTIONAL) TEST=BONUS1=FIND=FROM=TO===");
    let str = findRoute(data, "Cardiff","Reading");
    console.log(">>END>>"+ str);

}//end main

//Call the main function
if (require.main === module){
	
	main("railtrack_uk.json","West Coast Main Line");
	//main(process.argv[2],process.argv[2]);//uncomment to use command line arguments.
}
