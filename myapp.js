let marks=prompt("enter marks")
alert(marks)



if(marks>0 && marks<100)
{

    if(marks>=70)
    {
        alert("A"); 
    }
   
    else if(marks<70 && marks>=60)
    {
        alert("B");
    }
    else if(marks<60 && marks>=50)
    {
        alert("C");
    }
    else if(marks<50 && marks>=40)
    {
        alert("D");
    }
    else
    {
        alert("E");
    }
}
else
{
    alert("error")

}