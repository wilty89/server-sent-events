if (typeof (EventSource) !== "undefined") {
    var source = new EventSource("sse.php", {
        withCredentials: true,
        // retry: 20000,
        //data: 'Hello, I set the reconnection delay to 15 seconds'
    });
    source.onopen = function () {
        console.log('la conexion ha sido establecida');
    };
    source.onmessage = function (event) {
        document.getElementById("result").innerHTML += event.data + "<br>"
        //document.getElementById("result").innerHTML += details['name']
    };
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
}
//source.onerror = function (error) { console.error("EventSource failed:", error); };
function stop() { // when "Stop" button pressed
    source.close();
    console.log("eventSource.close()");
}
window.addEventListener('beforeunload', function (event) {
    event.preventDefault();
    return event.returnValue = "Are you sure you want to exit?";
});
source.addEventListener('myEvent_2', function(event){	
    var obj = JSON.parse(event.data.split('\n'));
    console.log(obj);
}, false)

document.addEventListener("visibilitychange",()=>{
    if(document.visibilityState==="hidden"){
        console.log(" >> This window is hidden")
        source.close()
    }
    else{
        console.log(" >> This window is visible")
    }
})