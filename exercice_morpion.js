$(function(){
    var terminer =0 ;
    var move=1;
    var inc=0;

function symb1(){
    $("body").append("<p class='center'>X à gagné(e)</p>")
    $(".bnt").addClass("clignote")
    $(".symbole_1").addClass("win")
    terminer = terminer+1;
}
function symb0(){
    $("body").append("<p class='center'>Y à gagné(e)</p>")
    $(".bnt").addClass("clignote")
    $(".symbole_0").addClass("win")
    terminer = terminer+1;
}

$("table").addClass('tto');

    var grid =["case1", "case2", "case3","case4", "case5", "case6", "case7", "case8", "case9"];

    $('td').mouseover(function() {
        if((inc%2==0)&&$(this).hasClass("")){
            $(this).addClass('symbole_1b');
            $(this).addClass('clignote');
        }
        if(inc%2==1&&$(this).hasClass("")) {
            $(this).addClass('symbole_0b');
            $(this).addClass('clignote');
        }
    })

    $('td').mouseout(function() {
        if(inc%2==0) {
            $(this).removeClass('symbole_1b');
            $(this).removeClass('clignote');
        }
        if(inc%2==1) {
            $(this).removeClass('symbole_0b');
            $(this).removeClass('clignote');
        }});


    $('td').click(function (){
        $(this).removeClass('clignote');
        if($(this).hasClass("symbole_1") || $(this).hasClass("symbole_0")){
            alert("Case déja prise !")
        }else{
        if($(this).html("")){
            if((move%2)==1){
                $(this).addClass("symbole_1");
                var nbr1 = ($(this).parent().index()*3)+($(this).index());
                grid[nbr1] = "symbole_1";
                inc = inc+1;

            }else{
                $(this).addClass("symbole_0");
                var nbr2 = ($(this).parent().index()*3)+($(this).index());
                grid[nbr2] = "symbole_0";
                inc = inc+1;

            }move ++;
            if(inc>= 5){
                for(var j = 0; j<= grid.length-1; j++){
                    if(grid[j]=="undefined" && grid[j+1]=="undefined" && grid[j+2]=="undefined"){
                        break;
                    }
                    // Colonnes
                    else if(
                        (grid[j]==grid[j+1] && grid[j+1]==grid[j+2] && grid[j+2]==grid[j] && (j+3)%3 == 0 && grid[j]==grid[j+2])||
                        (grid[j]==grid[j+2] && grid[j+2]==grid[j+4] && grid[j+4]==grid[j] && j==2)||
                        (grid[j]==grid[j+3] && grid[j+3]==grid[j+6] && grid[j+6]==grid[j])||
                        (grid[j]==grid[j+4] && grid[j+4]==grid[j+8] && grid[j+8]==grid[j])){


                        if (grid[j] == "symbole_1"){
                            symb1();
                        }
                        if (grid[j] == "symbole_0"){
                            symb0();
                        }
                    }
                }
                if (terminer==0 && inc==9){
                    $("body").append("<p class='center'>2 secondes avant la nouvelle partie !</p>")
                    setTimeout(function(){
                        window.location.reload();
                    }, 2000);
                }
            }
        }
    }
});
    $("body").append("<h2>Les règles :</h2>")
    $("body").append("<p>Bienvenu dans mon morpion, ici vous pourrez vous éclatez à jouez<br>" + " autant que vous le voudez, les règles sont simple, chaque joueur dispose de son signe<br>" +
        "qui est soit une croix soit un cerlce, le premier qui arrvie à aligner 3 fois<br>" +
        "son signe dans une ligne ou une diagonale ou une collone remporte la partie<br>" +
        "en cas d'égalité, la partie se lancera automatiquement 2 seconde apres la fin</p>")

    $("table").css("margin", "auto")
    $("body").append("<button class='bnut'>Restart</button>")
    $('.bnut').click(function() {
        location.reload();
    })

});