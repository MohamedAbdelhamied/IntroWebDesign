 function path(){       
    var pathname = window.location.pathname;
        arr=pathname.split('/');
        for(var i=0;i<arr.length;i++)
        {
        switch (arr[i])
                { 
            case 'jsintro':
                w3.removeClass('.nav','active');
                w3.addClass('#js','active');
                break;
                case 'html':
                w3.removeClass('.nav','active');
                w3.addClass('#html','active');
                break;
                case 'css':
                w3.removeClass('.nav','active');
                w3.addClass('#css','active');
                break;
                case 'rwd':
                w3.removeClass('.nav','active');
                w3.addClass('#rwd','active');
                break;
                defualt:
                w3.removeClass('.nav','active');
                w3.addClass('#home','active');
        }
        }
                window.alert(pathname);
    }
    
