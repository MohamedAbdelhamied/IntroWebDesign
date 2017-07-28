
function path(){       
    var pathname = window.location.pathname;
        arr=pathname.split('/');
   
    if (arr[2]=="")
    {
     
        w3.addClass('#home','active');
    }
    else{
        for(var i=0;i<arr.length;i++)
        {
        switch (arr[i])
                { 
            case 'jsintro':
                
                w3.addClass('#js','active');
                break;
                case 'html':
                
                w3.addClass('#html','active');
                break;
                case 'css':
                
                w3.addClass('#css','active');
                break;
                case 'rwd':
                
                w3.addClass('#rwd','active');
                break;
                defualt:
                w3.addClass('#home','active');
        }
        }
        
    }
     
    }
function lesson(num){
 w3.hide('.lesson');
 getElementById('#lesson'+num).style.display='none';
    window.alert('#lesson + num');
}
    
