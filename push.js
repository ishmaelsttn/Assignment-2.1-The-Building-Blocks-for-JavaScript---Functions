function funcAlert()
/*this is an alet using varialbes finding the percentage or muduolo of another number if and or else the number =0*/
{
    alert("the button is pushed");
    /* the variables rannum1 and 2 determine a number that is random which is or below the number 10*/
    var randNum1 = Math.ceil(Math.random()*20);
    var randNum2 = Math.ceil(Math.random()*20);
    alert("First num = " + randNum1 + "  Second Num " + randNum2);
    var sum = randNum1+randNum2;
    /*here down below the doc.getelement reserves the name in the html for the sum of the variables, it basically says that on the webpage sum = ran1 and 2 being added. These are the fuctions without the alert.*/
    if (sum >10)
    {
    document.getElementById("sumTag").innerHTML = "sum =" + sum;
    }
    else if (sum >10)
    {document.getElementById("rand1").innerHTML = "randNum1 =" + randNum1;}
    {document.getElementById("rand2").innerHTML = "randNum1 =" + randNum2;}
    {document.getElementById("rand3").innerHTML = "BIG + sum =" + randNum1;}
    {document.getElementById("rand4").innerHTML = "medium + sum =" + randNum2;}
   
    /* the sum else ifs below and up above determine what the equals will be declared as in the equations formed by the fuctions doc.getelement*/
    {else if (sum ==10)}



    
    if (randNum1 % 2 ==0)
    /*the curriculum after this threw me off a little bit, i understood what i was doing in the process of the alerts yes and trial and erros helped with the understanding it was i guess finding the averages and greater less thans after this part*/
    {alert("randNum1 = " + randNum1 + "hmmm")}
    else
    {alert("randNum1 = " + randNum1 + "GOT IT i think")}
}



   
