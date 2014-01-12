var serverUpTime = document.getElementById('server_up_time');
var utilization = document.getElementById('utilization');
var currentServiceProcesses = document.getElementById('current_service_processes');
var currentLicensedConnections = document.getElementById('current_licensed_connections');
var openFiles = document.getElementById('open_files');


var sec = 10; //Sekunder
var min = 11; //Minuter


setInterval(function(){
    sec++; 
    if (sec > 59) { //Den ska inte överstiga 59
        sec = 00; //överstiger 59,. +1 i minuter och sekunder blir 0
        min++;
    }
    serverUpTime.innerHTML =  "250:20:" + min + ":" + sec; //hur det är upplagt
    
    var utilizationValue = Math.floor(Math.random()*15)+1; //Slumpmässiga tal mellan 1 och 15
    utilization.innerHTML = utilizationValue + "%"; // % ska vara efter
    
    var currentServiceProcessesValue = Math.floor(Math.random()*20)+20; //Slumpmässiga tal mellan 20 och 40
    currentServiceProcesses.innerHTML = currentServiceProcessesValue;
    
    var currentLicensedConnectionsValue = Math.floor(Math.random()*100)+1; //Slumpmässiga tal mellan 1 och 100
    currentLicensedConnections.innerHTML = currentLicensedConnectionsValue;
    
    var openFilesValue = Math.floor(Math.random()*50)+20; //Slumpmässiga tal mellan 20 och 70
    openFiles.innerHTML = openFilesValue;
    
    
    }, 1000) //1000 millisekunder