var time;
var timer;
var stop_time = false;
var second_turn = false;
var runs_ar = [];
function countup(div_time) {
    time = setInterval(setTime, 1000, div_time);
    ;
}
var totalSeconds = 0;
function setTime(div_time) {
    ++totalSeconds;
    if (second_turn == true) {
        document.getElementById('hit1').disabled = true;
        //(document.getElementById('hit2') as HTMLButtonElement).disabled=false;
        document.getElementById('gen-res').disabled = true;
    }
    if (second_turn == false) {
        document.getElementById('hit2').disabled = true;
        document.getElementById('gen-res').disabled = true;
    }
    if (totalSeconds <= 60) {
        div_time.innerHTML = pad(totalSeconds);
    }
    //if(totalSeconds>60)
    else {
        if (stop_time == true) {
            clearInterval(time);
            document.getElementById('gen-res').disabled = false;
            document.getElementById('hit2').disabled = true;
        }
        else {
            reset_timer();
        }
        document.getElementById('gen-res').disabled = false;
    }
}
function reset_timer() {
    clearInterval(time);
    second_turn = true;
    totalSeconds = 0;
    stop_time = true;
    countup(timer);
}
function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
        return "0" + valString;
    }
    else {
        return valString;
    }
}
var border_div = /** @class */ (function () {
    function border_div(col_div) {
        col_div.style.borderTop = "1px solid grey";
        col_div.style.borderBottom = "1px solid grey";
        col_div.className += " pt-1";
        col_div.className += " pb-1";
    }
    return border_div;
}());
var heading = document.createElement('p');
heading.innerHTML = "CRICKET 10";
heading.className = "h3";
var m = document.getElementById("fstr");
//console.log(m);
m.appendChild(heading);
var head_div = document.createElement('div');
head_div.className = "col-lg-4 h4";
head_div.innerHTML = "TEAM 1 SCORE";
// head_div.setAttribute("id","col1");
var btn1 = document.createElement('button');
btn1.innerHTML = "HIT1";
btn1.className = "btn btn-primary";
btn1.setAttribute("id", "hit1");
btn1.addEventListener('click', function (e) { return gen_hit_team1(1); });
head_div.style.display = "flex";
head_div.style.flexDirection = "column";
head_div.style.alignItems = "center";
var finalscore1 = document.createElement('p');
finalscore1.innerHTML = "0";
finalscore1.setAttribute("id", "final_score1");
head_div.appendChild(finalscore1);
head_div.appendChild(btn1);
new border_div(head_div);
m.appendChild(head_div);
var head_div1 = document.createElement('div');
head_div1.className = "col-lg-4 h4";
head_div1.innerHTML = "TIMER";
// head_div1.setAttribute("id","col2");
new border_div(head_div1);
timer = document.createElement('p');
timer.className = "h3";
head_div1.appendChild(timer);
timer.innerHTML = "00";
countup(timer);
m.appendChild(head_div1);
var head_div2 = document.createElement('div');
head_div2.className = "col-lg-4  pb-1 h4";
head_div2.innerHTML = "TEAM 2 SCORE";
head_div2.style.display = "flex";
head_div2.style.flexDirection = "column";
head_div2.style.alignItems = "center";
new border_div(head_div2);
var finalscore2 = document.createElement('p');
finalscore2.innerHTML = "0";
finalscore2.setAttribute("id", "final_score2");
head_div2.appendChild(finalscore2);
var btn2 = document.createElement('button');
btn2.innerHTML = "HIT2";
btn2.className = "btn btn-primary";
btn2.setAttribute("id", "hit2");
btn2.addEventListener('click', function (e) { return gen_hit_team1(2); });
head_div2.appendChild(btn2);
m.appendChild(head_div2);
var row2 = document.createElement('div');
row2.className = "row p-2";
//row2.style.margin="auto";
var bt_col = document.createElement('button');
bt_col.className = "btn btn-primary col-lg-2";
bt_col.innerHTML = "Generate Result";
bt_col.style.margin = "auto";
bt_col.setAttribute("id", "gen-res");
bt_col.addEventListener('click', function (e) { return result_generation(); });
row2.appendChild(bt_col);
document.getElementsByClassName('container')[0].appendChild(row2);
var row3 = document.createElement('div');
row3.className = "row";
document.getElementsByClassName('container')[0].appendChild(row3);
var score_board = /** @class */ (function () {
    function score_board(tab_id) {
        this.id = tab_id;
        var col_div = document.createElement('div');
        row3.appendChild(col_div);
        col_div.className = "col-lg-4";
        col_div.style.display = "flex";
        col_div.style.flexDirection = "column";
        var heading = document.createElement('h4');
        heading.innerHTML = "TEAM" + this.id + " SCORE BOARD";
        col_div.appendChild(heading);
        var score_table = document.createElement("table");
        var tab_head = document.createElement('tr');
        var tab_col_st = document.createElement('th');
        tab_col_st.innerHTML = "TEAM" + this.id;
        score_table.appendChild(tab_head);
        score_table.style.border = "thin solid black";
        tab_head.appendChild(tab_col_st);
        for (var i_1 = 1; i_1 <= 6; i_1++) {
            var tab_col = document.createElement('th');
            tab_col.innerHTML = "B" + i_1;
            tab_head.appendChild(tab_col);
        }
        var tab_col_total = document.createElement('th');
        tab_col_total.innerHTML = "TOTAL";
        //tab_col_total.setAttribute("id","player_total_run");
        tab_head.appendChild(tab_col_total);
        //score_table.appendChild(tab_head);
        for (var i_2 = 1; i_2 <= 10; i_2++) {
            var tab_player = document.createElement('tr');
            var tab_pl_td = document.createElement('td');
            tab_pl_td.innerHTML = "PLAYER" + i_2;
            score_table.appendChild(tab_player);
            score_table.appendChild(tab_pl_td);
            for (var j_1 = 1; j_1 <= 6; j_1++) {
                var tab_pl_run = document.createElement('td');
                tab_pl_run.setAttribute("id", "pl" + this.id + i_2 + j_1);
                score_table.appendChild(tab_pl_run);
            }
            var tot_pl_run = document.createElement('td');
            score_table.appendChild(tot_pl_run);
            tot_pl_run.setAttribute("id", "pl_tot" + this.id + i_2);
        }
        col_div.appendChild(score_table);
    }
    return score_board;
}());
new score_board(1);
var col_bt_gn = document.createElement('div');
col_bt_gn.className = "col-lg-4";
row3.appendChild(col_bt_gn);
var mt_won = document.createElement('p');
mt_won.innerHTML = "MATCH WON BY";
var mt_res = document.createElement('p');
mt_won.appendChild(mt_res);
mt_res.className = "h3";
mt_res.setAttribute("id", "won-by");
col_bt_gn.appendChild(mt_won);
col_bt_gn.style.display = "flex";
col_bt_gn.style.flexDirection = "column";
col_bt_gn.style.alignItems = "center";
var main_mtc = document.createElement("p");
main_mtc.innerHTML = "MAN OF THE MATCH";
main_mtc.style.borderTop = "1px solid grey";
var main_of_res = document.createElement('p');
main_mtc.appendChild(main_of_res);
main_of_res.setAttribute("id", "main-of-match");
main_of_res.className = "h3";
col_bt_gn.appendChild(main_mtc);
new score_board(2);
var i = 1;
var j = 1;
//console.log(final_sc1.innerHTML);
var fin_t1 = 0;
function gen_hit_team1(id) {
    var final_sc = document.getElementById("final_score" + id);
    if (i > 10) {
        i = 1;
        j = 1;
        console.log("after i=11" + i + j);
        fin_t1 = 0;
        //(document.getElementById('gen-res') as HTMLButtonElement).disabled=false;
    }
    var run = randomrun(0, 6);
    if (run == 0) {
        console.log("pl" + id + i + j);
        document.getElementById("pl" + id + i + j).innerHTML = "" + 0;
        update_total(i, id);
        if (i == 10) {
            if (id == 1) {
                new disable(1);
                reset_timer();
            }
            else {
                new disable(2);
                clearInterval(time);
            }
            //(document.getElementById('gen-res') as HTMLButtonElement).disabled=false;
        }
        i++;
        j = 1;
        console.log("aftr0" + i);
    }
    else {
        console.log("pl" + id + i + j);
        document.getElementById("pl" + id + i + j).innerHTML = "" + run;
        fin_t1 += run;
        final_sc.innerHTML = "" + fin_t1;
        if (i == 10 && j == 6) {
            if (id == 1) {
                new disable(1);
                reset_timer();
            }
            else {
                new disable(2);
                clearInterval(time);
            }
            //(document.getElementById('gen-res') as HTMLButtonElement).disabled=false;
        }
        j++;
        if (j > 6) {
            update_total(i, id);
            i++;
            j = 1;
            console.log("aftr inc" + i + j);
        }
        //console.log(i+"..."+j);
    }
}
function randomrun(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function update_total(ind, id_tm) {
    var tot_run = document.getElementById("pl_tot" + id_tm + ind);
    var total = 0;
    for (var j_2 = 1; j_2 <= 6; j_2++) {
        console.log("pl" + id_tm + ind + j_2);
        var s = document.getElementById("pl" + id_tm + ind + j_2).innerHTML;
        if (s != "")
            total += parseInt(s);
    }
    tot_run.innerHTML = "" + total;
}
function result_generation() {
    var sc1 = document.getElementById('final_score1').innerHTML;
    var sc2 = document.getElementById('final_score2').innerHTML;
    var winner;
    if (parseInt(sc1) > parseInt(sc2))
        winner = "TEAM1";
    else
        winner = "TEAM2";
    document.getElementById('won-by').innerHTML = winner;
    var max1 = max_res(1);
    var max2 = max_res(2);
    if (max1[0] > max2[0]) {
        var u = document.getElementById('main-of-match');
        u.innerHTML = "PLAYER" + max1[2] + "<br>TEAM" + max1[1] + "<br>SCORE:" + max1[0];
    }
    else {
        var u = document.getElementById('main-of-match');
        u.innerHTML = "PLAYER" + max2[2] + "<br>TEAM" + max2[1] + "<br>SCORE:" + max2[0];
    }
}
function max_res(id) {
    var max = 0;
    var res = [];
    var team = 0;
    var player = 0;
    for (var i_3 = 1; i_3 <= 10; i_3++) {
        if (parseInt(document.getElementById("pl_tot" + id + i_3).innerHTML) > max) {
            max = parseInt(document.getElementById("pl_tot" + id + i_3).innerHTML);
            team = id;
            player = i_3;
        }
    }
    res[0] = max;
    res[1] = team;
    res[2] = player;
    return res;
}
var disable = /** @class */ (function () {
    function disable(bt_id) {
        if (bt_id == 2) {
            document.getElementById('hit2').disabled = true;
            document.getElementById('hit1').disabled = true;
            document.getElementById('gen-res').disabled = false;
            clearInterval(time);
        }
        if (bt_id == 1) {
            document.getElementById('gen-res').disabled = false;
            document.getElementById('hit1').disabled = true;
            document.getElementById('hit2').disabled = false;
        }
    }
    return disable;
}());
