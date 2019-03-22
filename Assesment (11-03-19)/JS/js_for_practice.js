(function () {
    function checkD(i) {
        if(i<10)
            i="0"+i;
        return i;

    }
    function checkWish(h) {
        if(h>=4 && h<=12)
            return "Good Morning";
        else if (h>=12 && h<=16)
            return "Good Afternoon";
        else if(h>=17 && h<=22)
            return "Good Evening";
        else
            return "It's Night";
    }

    setInterval(function(){
        var months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var currentdate = new Date();
        /*var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/"
                + currentdate.getFullYear() + " @ "
                + (currentdate.getHours()%12) + ":"
                + currentdate.getMinutes() + ":"
                + currentdate.getSeconds();*/
        var hour=currentdate.getHours();
        var min=currentdate.getMinutes();
        var sec=currentdate.getSeconds();

        var month=currentdate.getMonth();
        var date=currentdate.getDate();
        var year=currentdate.getFullYear();

        var am_pm="AM";
        if(hour>12)
            am_pm="PM";

        var wishfor=checkWish(hour);

        hour=(hour%12);
        hour=checkD(hour);
        min=checkD(min);
        sec=checkD(sec);
        month= months[month];
        date=checkD(date);

        document.getElementById("wish").innerHTML=wishfor;
        document.getElementById("time").innerHTML=(hour+" : "+min+" : "+sec+" "+am_pm);
        document.getElementById("date").innerHTML=(date+" "+month+" "+year);
        //document.getElementsByClassName("dodge").innerHTML=(date+month+year);

    },1000);
})();
