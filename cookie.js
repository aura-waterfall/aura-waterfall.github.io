//Project requirement 1
function set_it() {
    //Project requirement 18
    var name = window.prompt('Please enter your name: ');
    if (name.length == 0) {
        set_it();
    //Project requirement 20
    } else if (name.length >= Number.MAX_VALUE) {
        //Project requirement 18
        name = window.alert("Sorry, that's too long.");
        set_it();
    } else {
    var thetext = "name=" + name;
    var newtext=escape(thetext);
    //Project requirement 25
    document.cookie = newtext;
    }
    }
function read_it() {
    var find_cookie = (document.cookie) ? "true":"false";
    if (find_cookie === "true") {
        var mycookie = document.cookie;
        var fixed_cookie = unescape(mycookie);
        //Project requirement 21
        var cookieval = fixed_cookie.split("=");
        document.getElementById("h2").innerHTML = "Welcome to my website, " + cookieval[1] + "!";
    } else {
        set_it();
    }
    
}
function read_it2() {
    var find_cookie2 = (document.cookie) ? "true":"false";
    if(find_cookie2 === "true") {
        var mycookie = document.cookie;
        var fixed_cookie = unescape(mycookie);
        var cookieval = fixed_cookie.split("=");
        document.getElementById('poemend').innerHTML = "Thanks for reading, " + cookieval[1] + "!";
    } else {
        set_it();
    }
}