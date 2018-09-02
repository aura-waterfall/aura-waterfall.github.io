//Project requirement 1
//Project requirement 18
var x = window.innerWidth;
var y = x/2;
//Project requirement 19
z = (x * Math.LOG10E)-100;

document.forms[0].style = "margin-left: " + z + "px;font-family: myFirstFont;font-size:25px;margin-right:25%;";
function ughresize() {
    var x = window.innerWidth;
    var y = x/2;
    z = (x * Math.LOG10E)-100;
    document.forms[0].style = "margin-left: " + z + "px;font-family: myFirstFont;font-size:25px;margin-right:25%;";
}
//Project requirement 4
//Project requirement 14
function user (water, fire, air, earth) {
    this.water = water;
    this.fire = fire;
    this.air = air;
    this.earth = earth;
    this.calcElement = function() {
        if (this.water > this.fire && this.water > this.air && this.water > this.earth) {
            return "water";
        } else if (this.fire > this.water && this.fire > this.air && this.fire > this.earth) {
            return "fire";
        } else if (this.air > this.fire && this.air > this.water && this.air > this.earth) {
            return "air";
        } if (this.earth > this.fire && this.earth > this.air && this.earth > this.water) {
            return "earth";
        }
    }
}
var current_user = new user(0, 0, 0, 0);
//Project requirement 5
var pass = /KJL84HD/;
function nextquestion() {
    var text = document.getElementById("password").value,
        last = document.getElementById("question").innerHTML,
        textsearch = text.search(pass),
        Water = document.getElementById("water"),
        Fire = document.getElementById("fire"),
        Air = document.getElementById("air"),
        Earth = document.getElementById("earth");
    if(textsearch == -1) {
        window.alert("Please enter the password! Hint: read my poem.");
    } else if ((!(Water.checked))&&(!(Fire.checked))&&(!(Air.checked))&&(!(Earth.checked))) {
        window.alert("Please choose an answer before going to the next question.");
    } else if (last == questions[9]) {
        if (Water.checked) {
            current_user.water += 4;
        } else if (Fire.checked) {
            current_user.fire += 4;
        } else if (Air.checked) {
            current_user.air += 4;
        } else if (Earth.checked) {
            current_user.earth += 4;
        }
        var x2 = current_user.calcElement();
        var thediv = document.getElementById("elements");
        var thedesc = document.getElementById("elementshere");
        thediv.style.display = "none";
        var bgimg = document.getElementById("bg");
        //Project requirement 20
        wscore = current_user.water.toString();
        fscore = current_user.fire.toString();
        ascore = current_user.air.toString();
        escore = current_user.earth.toString();
        thedesc.innerHTML = "Scores - Water: " + wscore + ", Fire: " + fscore + ", Air: " + ascore + ", Earth: " + escore;
        if (x2 == "water") {
            thedesc.innerHTML += "<br /><br />You are Water!<br /><br />Personality - Water is very creative, independent, and private. Water can be easily stressed out, and can get annoyed with routine. We normally have a rich internal world, and are very philosophical, having deep inner thoughts. We want to do things our own way, but we’re sometimes afraid to speak up, so we rebel quietly. Water is emotional and can start crying uncontrollably, but also has a brilliant mind and imagination. We don’t like constant routine, so school can be boring after a while. Water likes adventure and spontaneous activity, but isn’t so reckless to go looking for trouble on purpose.<br /><br />Colors - Blue + Purple<br />Roles - The mystical dreamer, the silent rebel, the abstract thinker<br />Key trait - Creative (Imagination)<br />Temperament - Mild on the outside, wild on the inside.<br />Direction - Southeast<br />Domain - Emotions";
            bgimg.style = "background-image: url('water.jpg')";
        } else if (x2 == "fire") {
            thedesc.innerHTML += "<br /><br />You are Fire!<br /><br />Personality - Fire is passionate, dramatic, impulsive, and bold. We like to win, no matter what the contest is. We are impatient, and normally tend to be good at sports. We hate routine, and school is unnecessary and boring to us. We are not really rational and tend to solve things physically rather than talking it out. Fire craves adventure, and isn’t afraid to go looking for trouble. We can be reckless, and take dares seriously. Although we can come off as lazy or rushed, we can be brave and loyal friends.<br /><br />Colors - Red + Orange<br />Roles - The bold warrior, the curious explorer, the daring adventurer<br />Key trait - Brave (Courage)<br />Temperament - Wild on the outside, wild on the inside.<br />Direction - Northeast<br />Domain - Actions";
            bgimg.style = "background-image: url('fire.jpg')";
        } else if (x2 == "air") {
            thedesc.innerHTML += "<br /><br />You are Air!<br /><br />Personality - Air is enthusiastic, social, and friendly. We often seem like the “perfect” element, although we do have flaws. Though we are kind, caring, and approachable, we can also be superficial and vain sometimes, and fail to see the big picture. Air is sweet, romantic, and usually very popular. We don’t mind adventure once in a while, although routine is great as well. We normally have good voices and solve things peacefully and diplomatically, and sometimes like to sing as well.<br /><br />Colors - Pink + Yellow<br />Roles - The kind companion, the joyful friend, the social butterfly<br />Key trait - Caring (Connection)<br />Temperament - Wild on the outside, mild on the inside.<br />Direction - Northwest<br />Domain - Words";
            bgimg.style = "background-image: url('air.jpg');";
        } else if (x2 == "earth") {
            thedesc.innerHTML += "<br /><br />You are Earth!<br /><br />Personality - Earth is realistic, constant, and strong. We are practical and a loyal friend, though we can be stubborn if we don’t get our way. Routine is essential for us, and changes are annoying and can be hard to deal with. We are rational and logical, normally taking the smartest and fastest way out of a problem. We like to challenge ourselves with a busy schedule and a lot to handle, but balance it all very well. We usually think carefully, even in the most random situations.<br /><br />Colors - Brown + Green<br />Roles - The balanced leader, the logical problem-solver, the mature supporter<br />Key trait - Strong (Endurance)<br />Mild on the outside, mild on the inside.<br />Direction - Southeast<br />Domain - Thoughts";
            bgimg.style = "background-image: url('earth.jpg')";
        }else if (current_user.water == current_user.fire) {
            thedesc.innerHTML += "<br /><br />You got a tie between water and fire!<br /><br />Water is very creative, independent, and private. Water can be easily stressed out, and can get annoyed with routine. We normally have a rich internal world, and are very philosophical, having deep inner thoughts. We want to do things our own way, but we’re sometimes afraid to speak up, so we rebel quietly. Water is emotional and can start crying uncontrollably, but also has a brilliant mind and imagination. We don’t like constant routine, so school can be boring after a while. Water likes adventure and spontaneous activity, but isn’t so reckless to go looking for trouble on purpose.<br /><br />Fire is passionate, dramatic, impulsive, and bold. We like to win, no matter what the contest is. We are impatient, and normally tend to be good at sports. We hate routine, and school is unnecessary and boring to us. We are not really rational and tend to solve things physically rather than talking it out. Fire craves adventure, and isn’t afraid to go looking for trouble. We can be reckless, and take dares seriously. Although we can come off as lazy or rushed, we can be brave and loyal friends."
            bgimg.style = "background-image: url('waterfire.jpg');";
        }else if (current_user.fire == current_user.air) {
            thedesc.innerHTML += "<br /><br />You got a tie between fire and air!<br /><br />Fire is passionate, dramatic, impulsive, and bold. We like to win, no matter what the contest is. We are impatient, and normally tend to be good at sports. We hate routine, and school is unnecessary and boring to us. We are not really rational and tend to solve things physically rather than talking it out. Fire craves adventure, and isn’t afraid to go looking for trouble. We can be reckless, and take dares seriously. Although we can come off as lazy or rushed, we can be brave and loyal friends.<br /><br />Air is enthusiastic, social, and friendly. We often seem like the “perfect” element, although we do have flaws. Though we are kind, caring, and approachable, we can also be superficial and vain sometimes, and fail to see the big picture. Air is sweet, romantic, and usually very popular. We don’t mind adventure once in a while, although routine is great as well. We normally have good voices and solve things peacefully and diplomatically, and sometimes like to sing as well."
            bgimg.style = "background-image: url('fireair.jpg');";
        }else if (current_user.air == current_user.water) {
            thedesc.innerHTML += "<br /><br />You got a tie between water and air!<br /><br />Water is very creative, independent, and private. Water can be easily stressed out, and can get annoyed with routine. We normally have a rich internal world, and are very philosophical, having deep inner thoughts. We want to do things our own way, but we’re sometimes afraid to speak up, so we rebel quietly. Water is emotional and can start crying uncontrollably, but also has a brilliant mind and imagination. We don’t like constant routine, so school can be boring after a while. Water likes adventure and spontaneous activity, but isn’t so reckless to go looking for trouble on purpose.<br /><br />Air is enthusiastic, social, and friendly. We often seem like the “perfect” element, although we do have flaws. Though we are kind, caring, and approachable, we can also be superficial and vain sometimes, and fail to see the big picture. Air is sweet, romantic, and usually very popular. We don’t mind adventure once in a while, although routine is great as well. We normally have good voices and solve things peacefully and diplomatically, and sometimes like to sing as well."
            bgimg.style = "background-image: url('waterair.jpg');";
        }else if (current_user.water == current_user.earth) {
            thedesc.innerHTML += "<br /><br />You got a tie between water and earth!<br /><br />Water is very creative, independent, and private. Water can be easily stressed out, and can get annoyed with routine. We normally have a rich internal world, and are very philosophical, having deep inner thoughts. We want to do things our own way, but we’re sometimes afraid to speak up, so we rebel quietly. Water is emotional and can start crying uncontrollably, but also has a brilliant mind and imagination. We don’t like constant routine, so school can be boring after a while. Water likes adventure and spontaneous activity, but isn’t so reckless to go looking for trouble on purpose.<br /><br />Earth is realistic, constant, and strong. We are practical and a loyal friend, though we can be stubborn if we don’t get our way. Routine is essential for us, and changes are annoying and can be hard to deal with. We are rational and logical, normally taking the smartest and fastest way out of a problem. We like to challenge ourselves with a busy schedule and a lot to handle, but balance it all very well. We usually think carefully, even in the most random situations."
            bgimg.style = "background-image: url('waterearth.jpg');";
        }else if (current_user.fire == current_user.earth) {
            thedesc.innerHTML += "<br /><br />You got a tie between fire and earth!<br /><br />Fire is passionate, dramatic, impulsive, and bold. We like to win, no matter what the contest is. We are impatient, and normally tend to be good at sports. We hate routine, and school is unnecessary and boring to us. We are not really rational and tend to solve things physically rather than talking it out. Fire craves adventure, and isn’t afraid to go looking for trouble. We can be reckless, and take dares seriously. Although we can come off as lazy or rushed, we can be brave and loyal friends.<br /><br />Earth is realistic, constant, and strong. We are practical and a loyal friend, though we can be stubborn if we don’t get our way. Routine is essential for us, and changes are annoying and can be hard to deal with. We are rational and logical, normally taking the smartest and fastest way out of a problem. We like to challenge ourselves with a busy schedule and a lot to handle, but balance it all very well. We usually think carefully, even in the most random situations."
            bgimg.style = "background-image: url('fireearth.jpg');";
        }else if (current_user.air == current_user.earth) {
            thedesc.innerHTML += "<br /><br />You got a tie between air and earth!<br /><br />Air is enthusiastic, social, and friendly. We often seem like the “perfect” element, although we do have flaws. Though we are kind, caring, and approachable, we can also be superficial and vain sometimes, and fail to see the big picture. Air is sweet, romantic, and usually very popular. We don’t mind adventure once in a while, although routine is great as well. We normally have good voices and solve things peacefully and diplomatically, and sometimes like to sing as well.<br /><br />Earth is realistic, constant, and strong. We are practical and a loyal friend, though we can be stubborn if we don’t get our way. Routine is essential for us, and changes are annoying and can be hard to deal with. We are rational and logical, normally taking the smartest and fastest way out of a problem. We like to challenge ourselves with a busy schedule and a lot to handle, but balance it all very well. We usually think carefully, even in the most random situations."
            bgimg.style = "background-image: url('earthair.jpg');";
        }
    } else {
        if (Water.checked) {
            current_user.water += 1;
        } else if (Fire.checked) {
            current_user.fire += 1;
        } else if (Air.checked) {
            current_user.air += 1;
        } else if (Earth.checked) {
            current_user.earth += 1;
        }
        var x = document.getElementById("mydiv");
        x.style.display = "none";
        var current = document.getElementById("question").innerHTML;
        //Project requirement 21
        var index1 = questions.indexOf(current);
        var newindex = index1+1;
        document.getElementById("question").innerHTML = questions[newindex];
        var currentA = document.getElementById("label1").value,
            currentB = document.getElementById("label2").value,
            currentC = document.getElementById("label3").value,
            currentD = document.getElementById("label4").value;
        //Project requirement 9
        for (var i = 0; i<answers[newindex].length; i++) {
            var num = i+1,
                newnum = num.toString(),
                id = "label" + num;
            document.getElementById(id).innerHTML = answers[newindex][i];
        }
    }
}
//Project requirement 24
var questions = [
    "1. Choose a color scheme.",
    "2. What is your best positive quality?",
    "3. What is your worst negative quality?",
    "4. What do your notes look like?",
    "5. Ideal conversation topic?",
    "6. Opinion on music?",
    "7. Do you put work or fun first?",
    "8. Pick an inspirational quote.",
    "9. Choose a career.",
    "10. What element do you identify with the most?",
]
var answers = [
     ["Blue, Purple, Green", "Red, Orange, Yellow", "Yellow, Pink, Blue", "Green, Brown, Red"],
    ["Creativity", "Daring", "Kindness", "Stability"],
    ["Sensitive", "Hotheaded", "Shallow", "Stubborn"],
    ["Rushed handwriting filled with doodles", "Improvisation with little or no notes, random words", "Minimal and artistic-looking", "Extensive, technical, and meticulous"],
    ["Abstract topics like philosophy, art, or literature", "Fun topics like sports", "Light small talk or the latest gossip", "Current topics and news"],
    ["I love inspirational music with thoughtful lyrics.", "Any music that I can nod my head to is fine.", "I love singing and the latest releases.", "I like classical or simple music."],
    ["I value both, but tend to put work first.", "Fun always comes first!", "I value both, but tend to put fun first.", "Work is a lot more important than fun."],
    ["'The power of imagination makes us infinite.'", "'Stop thinking. Just do it.'", "'Keep your face toward the sunshine, and shadows will fall behind you.'", "'A dream doesn't become reality through magic; it takes sweat, determination, and hard work."],
    ["Writer, philosopher, or something else abstract", "Actor, athlete, or something else exciting", "Doctor/nurse, teacher, or something else caring", "Lawyer, scientist, or something else practical"],
    ["Water", "Fire", "Air", "Earth"]
]