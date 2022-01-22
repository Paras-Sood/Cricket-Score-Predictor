var myIndex = 0;
var second_myIndex = 0;
document.addEventListener('DOMContentLoaded',()=>{
    // document.querySelector('#aboutus-container').style.display='none';
    // document.querySelector('#waiting').style.display='none';
    // document.querySelector('#output').style.display='none';
    // document.querySelector('#home').onclick = () => {
    //     document.querySelector('#aboutus-container').style.display='none';
    //     document.querySelector('#home-container').style.display='block';
    // }
    // document.querySelector('#aboutus').onclick = () => {
    //     document.querySelector('#home-container').style.display='none';
    //     document.querySelector('#aboutus-container').style.display='block';
    // }
    carousel();
    second_carousel();
    let batting_team=document.querySelector('#id_batting_team');
    let bowling_team=document.querySelector('#id_bowling_team');
    document.querySelector('#id_batting_team').onchange = () => {
        if(batting_team.selectedIndex == bowling_team.selectedIndex)
        {
            alert("Batting and Bowling teams can't be same");
            document.querySelector('#id_batting_team').selectedIndex=0;
        }
    };
    document.querySelector('#id_bowling_team').onchange = () => {
        if(batting_team.selectedIndex == bowling_team.selectedIndex)
        {
            alert("Batting and Bowling teams can't be same");
            document.querySelector('#id_bowling_team').selectedIndex=0;
        }
    };
})
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2500);    
}
  
function second_carousel() {
    var i;
    var x = document.getElementsByClassName("Slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    second_myIndex++;
    if (second_myIndex > x.length) {second_myIndex = 1}    
    x[second_myIndex-1].style.display = "block";  
    setTimeout(second_carousel, 2500);    
}