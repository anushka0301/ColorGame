var numSquares=9;
var colors=randomColors(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var display=document.querySelector("#display");
display.textContent=pickedColor;
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var veryHard=document.querySelector("#veryhard");

easy.addEventListener("click", function(){
    message.textContent="";
    reset.textContent= "New Colors";
    h1.style.backgroundColor= "steelblue";
    easy.classList.add("selected");
    hard.classList.remove("selected");
    veryHard.classList.remove("selected");
    numSquares=3;    
    colors=randomColors(numSquares);
    pickedColor=pickColor();
    display.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
            squares[i].style.background=colors[i];
        else
            squares[i].style.background="none";
    }
})

hard.addEventListener("click", function(){
    message.textContent="";
    reset.textContent= "New Colors";
    h1.style.backgroundColor= "steelblue";
    hard.classList.add("selected");
    easy.classList.remove("selected");
    veryHard.classList.remove("selected");
    numSquares=6;
    colors=randomColors(numSquares);
    pickedColor=pickColor();
    display.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
            squares[i].style.background=colors[i];
        else
            squares[i].style.background="none";
    }
})

veryHard.addEventListener("click", function(){
    message.textContent="";
    reset.textContent= "New Colors";
    h1.style.backgroundColor= "steelblue";
    veryHard.classList.add("selected");
    hard.classList.remove("selected");
    easy.classList.remove("selected");
    numSquares=9;
    colors=randomColors(numSquares);
    pickedColor=pickColor();
    display.textContent=pickedColor;
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
            squares[i].style.background=colors[i];
            squares[i].style.background="block";
    }
})

reset.addEventListener("click", function(){
    reset.textContent= "New Colors";
    colors=randomColors(numSquares);
    pickedColor=pickColor();
    display.textContent=pickedColor;
    message.textContent="";
    for(var i=0; i<squares.length; i++)
        squares[i].style.backgroundColor=colors[i];
    h1.style.backgroundColor= "steelblue";
})

for(var i=0; i<squares.length; i++)
{
    squares[i].style.backgroundColor=colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor)
        {
            message.textContent= "CORRECT!";
            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
            reset.textContent= "Play Again?";
        }
        else
        {
            this.style.backgroundColor= "#232323";
            message.textContent= "TRY AGAIN!";
        }
    })
}

function changeColor(color)
{
    for(var i=0; i<numSquares; i++)
    {
        squares[i].style.backgroundColor=color;
    }
}

function pickColor()
{
    var random=Math.floor(Math.random()*colors.length);
    return colors[random];
}

function randomColors(num)
{
    var arr=[];
    for(var i=0; i<num; i++)
        arr.push(color());
    return arr;
}

function color()
{
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")";
}