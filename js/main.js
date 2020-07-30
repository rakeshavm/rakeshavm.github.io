    var btn = document.querySelector("#sub")
    btn.addEventListener("click", (e)=>{
        e.preventDefault()
        var p = document.querySelector("#prin").value
        var rate = document.querySelector("#intr").value
        var com = document.querySelector("#compound").value
        var term = document.querySelector("#term").value
        rate = rate/100
        val = p * Math.pow((1 + rate/com), com * term)
        val = val.toFixed(2)
        var res = document.querySelector("#resdiv")
        var spinp = document.querySelector("#outmsg")
        spinp.innerHTML = "Amount after " + term + " years is"
        res.style.borderBottom = "none"
        var amtdisp = document.querySelector("#res")
        amtdisp.innerHTML = val       
        res.style.display = "block"
    })
    
