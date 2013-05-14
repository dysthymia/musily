function reURL(url)
{
    if(document.all && window.external) {
        var linka = document.createElement('a');
        linka.href=url;
        document.body.appendChild(linka);
        linka.click();
    }else {
        window.location.href=url;
    }
}

reURL('/dian.php');

