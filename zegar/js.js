function time(){
    var Actime = new Date();
    var year = Actime.getFullYear();
    var mon = Actime.getMonth() + 1;
    var day = Actime.getDate();


        var h = Actime.getHours();
        var min = Actime.getMinutes();
        var sec = Actime.getSeconds();


        min = zero(min);
        day = zero(day)
        mon = zero(mon)
        sec = zero(sec);

    var rok = (year +'').split('');
    var mie = (mon +'').split('');
    var d = (day +'').split('');
    var hr = (h +'').split('');
    var minute = (min +'').split('');
    var second = (sec +'').split('');

document.getElementById('zegar').innerHTML = 
 
`<img src='pics/${hr[0]}.png'><img src='pics/${hr[1]}.png'>
<img src='pics/kropk.png'>
<img src='pics/${minute[0]}.png'><img src='pics/${minute[1]}.png'>
<img src='pics/kropk.png'>
<img src='pics/${second[0]}.png'><img src='pics/${second[1]}.png'>
<br>`

document.getElementById('data').innerHTML = 

`<img src='pics/${mie[0]}.png'><img src='pics/${mie[1]}.png'>
<img src='pics/dkropk.png'>
<img src='pics/${d[0]}.png'><img src='pics/${d[1]}.png'>
<img src='pics/dkropk.png'>
<img src='pics/${rok[0]}.png'><img src='pics/${rok[1]}.png'><img src='pics/${rok[2]}.png'><img src='pics/${rok[3]}.png'>
`


setTimeout(time, 1000);
}


function zero(i) {
        if (i < 10) {i = "0" + i};
        return i;
    }