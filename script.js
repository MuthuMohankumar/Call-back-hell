const span=document.createElement("span");

span.id="span";

document.body.append(span);    

setTimeout(()=>{
    document.getElementById("span").innerHTML="10";
    setTimeout(()=>{
        document.getElementById("span").innerHTML="9";
        setTimeout(()=>{
            document.getElementById("span").innerHTML="8";
            setTimeout(()=>{
                document.getElementById("span").innerHTML="7";
                setTimeout(()=>{
                    document.getElementById("span").innerHTML="6";
                    setTimeout(()=>{
                        document.getElementById("span").innerHTML="5";
                        setTimeout(()=>{
                            document.getElementById("span").innerHTML="4";
                            setTimeout(()=>{
                                document.getElementById("span").innerHTML="3";
                                setTimeout(()=>{
                                    document.getElementById("span").innerHTML="2";
                                    setTimeout(()=>{
                                        document.getElementById("span").innerHTML="1";
                                        setTimeout(()=>{
                                            document.getElementById("span").innerHTML="Happy Independence Day";
                                        },1000)
                                    },1000);
                                },1000);
                            },1000);
                        },1000);
                    },1000);
                },1000);
            },1000);
        },1000);
    },1000);
},1000);
