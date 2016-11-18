function Myfunction()
{
    var httpRequest = new XMLHttpRequest();
    var word= document.getElementById("country").value;
    var check= document.getElementById("check").checked;
    if (!httpRequest) 
    {
                alert('Giving up :( Cannot create an XMLHTTP instance');
                return false;
    }
    
    httpRequest.onreadystatechange = function()
    {
                if (httpRequest.readyState === 4 && httpRequest.status === 200)
                {
                    document.getElementById("result").innerHTML=httpRequest.responseText;
                }
                else 
                {
                    console.log('There was a problem with the request.');
                }
    };
    if(check!==true)
    {
        httpRequest.open('GET', "world.php?country="+word, true);
        httpRequest.send();
    }
        else
    {
        httpRequest.open('GET', "world.php?all=true", true);
        httpRequest.send();
    }
}
