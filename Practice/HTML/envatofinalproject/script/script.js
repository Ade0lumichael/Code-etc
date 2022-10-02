/**
    * @description      : 
    * @author           : Michael
    * @group            : 
    * @created          : 23/09/2022 - 20:37:03
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/09/2022
    * - Author          : Michael
    * - Modification    : 
**/
    var elems = document.getElementsByClassName("icon")
    var icon = elems[0]
    icon.onclick  = function()
    { 
        console.log("onclick function called")
        if (document.getElementById("themes").className === "light_theme"){
            document.getElementById("themes").className = "dark_theme"
            icon.src="../yin_icon.svg"
        }
        else {
            document.getElementById("themes").className = "light_theme"
            icon.src="../yang_icon.svg"
            
        }
        console.log("image source is " + icon.src)
      
       /*  document.body.classList.toggle(icon);
      if (document.body.classList.contains(yin_icon.svg)){
            elemToListen.addEventListener("change",(e) => 
            { 
              e.preventDefault() 
            })
        } else {
            icon.src ="../yin_icon.svg"
        }*/
    }