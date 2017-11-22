var Admin = require('./../models/admin')
var mysql = require('./../models/mysql');

exports.addAdmin = function(data, callback){
    var adminDetail = {
        username:data.admininfo.username,
        password:data.admininfo.password
        };
    Admin.addNewAdmin( adminDetail , function(err , results){
        if(err){
            console.log("[Kafka] Error adding new admin")
        }
        console.log("its result in admin services"+results);
        callback(err,results);
    });
}


exports.adminAnalysisHotel = function(data, callback){
    var hotel_analysis_query="select sum(booking_amount) as Booking_Amount,hotel_name from hotel_transaction where Year(booking_date) = '"+data.year+"' group by hotel_name order by Booking_Amount desc limit 10";
    let res_result ={};
    res_result.result = {hotel_name:[],sales:[]};
    var hotels,amount="";
    var seq1 = "";
    var seq2 = "";
    mysql.fetchData(function(err,results) {
        
        if(err){
            console.log("error");
            res_result.message = "Error could not find top ten hotels"
            callback(null,results);
             }
        console.log("Results from database:"+JSON.stringify(results));
        for (var key in results)
                {
                if (results.hasOwnProperty(key))
                {
                     var hotel_name = results[key].hotel_name;
                     var booking_amount = results[key].Booking_Amount;
                     res_result.result['hotel_name'].push(hotel_name);
                     res_result.result['sales'].push(booking_amount);
                }
                }
    
                 callback(null,res_result);

    
            
    }, hotel_analysis_query);
}

// analysis 2 query

exports.adminAnalysis2Hotel = function(data, callback){
    var hotel_analysis_query="select name_city,sum(booking_amount) as Booking_Amount from hotel_transaction group by name_city order by Booking_Amount";
    let res_result ={};
    res_result.result = {city_name:[],sales:[]};
    var hotels,amount="";
    var seq1 = "";
    var seq2 = "";
    mysql.fetchData(function(err,results) {
        
        if(err){
            console.log("error");
            res_result.message = "Error could not find top ten hotels"
            callback(null,results);
             }
        console.log("Results from database:"+JSON.stringify(results));
        for (var key in results)
                {
                if (results.hasOwnProperty(key))
                {
                     var city_name = results[key].name_city;
                     var booking_amount = results[key].Booking_Amount;
                     res_result.result['city_name'].push(city_name);
                     res_result.result['sales'].push(booking_amount);
                }
                }
    
                 callback(null,res_result);

    
            
    }, hotel_analysis_query);
}


exports.adminAnalysis3Hotel = function(data, callback){
    var hotel_analysis_query="select hotel_name,count(hotel_id) as Number_Of_Bookings,sum(booking_amount) as Booking_Amount from hotel_transaction where month(booking_date) = month(current_date())-1 group by hotel_name order by Number_Of_Bookings desc limit 10";

    let res_result ={};
    res_result.result = {hotel_name:[],Number_Of_Bookings:[]};
    var hotels,amount="";
    var seq1 = "";
    var seq2 = "";
    mysql.fetchData(function(err,results) {
        
        if(err){
            console.log("error");
            res_result.message = "Error could not find top ten hotels"
            callback(null,results);
             }
        console.log("Results from database:"+JSON.stringify(results));
        for (var key in results)
                {
                if (results.hasOwnProperty(key))
                {
                     var hotel_name = results[key].hotel_name;
                     var Number_Of_Bookings = results[key].Number_Of_Bookings;
                     res_result.result['hotel_name'].push(hotel_name);
                     res_result.result['Number_Of_Bookings'].push(Number_Of_Bookings);
                }
                }
    
                 callback(null,res_result);

    
            
    }, hotel_analysis_query);
}




exports.adminSignIn = function(data, callback){
 console.log("adminSignIn:data",data);
   var adminDetail = {
       username:data.username,
       password:data.password
       };
   Admin.adminSignIn( adminDetail , function(err , results){
       if(err){
           console.log("[Kafka] Error in siging in admin")
       }
       console.log("its result in admin services signin"+results);
       callback(err,results);
   });
}

