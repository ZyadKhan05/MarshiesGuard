.hide{
    display:none;
}

.loading{
    height:30px;
    width:30px;
}

#marsh{
    width: 60px;
    height: 60px;
}

#header {
      
        display: grid;
        place-items: center; /* Centers content both vertically and horizontally */
        height: 100%; /* Set a height if the parent doesn't have one defined */
}


#outer-character{
    background-image: url(images/campfire_bg.png);
    background-repeat: no-repeat;
    width: 200px;
    height: 200px;
    background-size: 200px;
    display:flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 12px;
    border: solid black 3px;
}

body{
    width: 300px;
    height: 230px;
    background-image:url(images/night_sky_bg.png);
    background-size: 700px;
}

button{
    width: 70px;
    height: 45px;
    background-color:rgb(190, 213, 217);
    color:rgb(6, 42, 150);
    font-weight:bold;
    transition: 0.3s;
    border-radius: 5px;
}

input{
    height: 35px;
}

button:hover{
    transform: scale(105%);
    cursor:pointer;
    border: solid rgb(2, 41, 99) 1px;

}

#health{
    padding-bottom: 15px;
}

.center{
    display:flex;
    height: 50px;
    align-items: center;
    justify-content: center;
    margin-top: -10px;
    margin-bottom: -15px;
}

#result,#result2{
    color:white;
    font-size: 0.8rem;
}
