$(document).ready(function() {
    const multiplierCost = 10
    const autoclickerCost = 100
    let autoclickerInterval = 1000
    let multiplier = 1.2

    let total = 0.0
    let incrementer = 1
    
    let incrementerCount = 0
    let multiplierCount = 0
    let autoclickerCount = 0

    let autoclickerIds = []


    $("#reset").click(() => deleteCookies())

    $("#cheat").click(() => cheatSettings())

    $("#incrementer").click(() => incrementerClicked())

    $("#multiplier").click(() => multiplierClicked())
    
    $("#autoclicker").click(() => autoClicked())

    let incrementerClicked = () => {
        total += incrementer;

        refreshTotal()
        enableButtons()

        $("#incrementerCountLabel").text('Times Clicked: ' + ++incrementerCount)
        
        updateCookies()
    }

    let multiplierClicked = () => {
        if(total >= multiplierCost) {
            incrementer *= multiplier
            total -= multiplierCost

            refreshTotal()
            disableButtons()
            numSizeOverflowCheck()

            $("#incrementer").text('+' + incrementer.toFixed(2))
            $("#multiplierCountLabel").text('Times Clicked: ' + ++multiplierCount)
            
            updateCookies()
        }
    }

    let autoClicked = () => {
        if(total >= autoclickerCost) {
            total -= autoclickerCost
            
            refreshTotal()
            disableButtons()
            autoclickerIds.push(setInterval(incrementerClicked, autoclickerInterval))
            
            $("#autoclickerCountLabel").text('Autoclickers: ' + ++autoclickerCount)

            updateCookies()
        }
    }

    let refreshTotal = () => $("#total").text('Total: ' + total.toFixed(2))

    let disableButtons = () => {
        if(total < multiplierCost) {
            $("#multiplier").css('background', 'gray')
        }

        if(total < autoclickerCost) {
            $("#autoclicker").css('background', 'gray')
        }
    }

    let enableButtons = () => {
        if(total >= multiplierCost) {
            $("#multiplier").css('background', 'white')
            if(total >= autoclickerCost) {
                $("#autoclicker").css('background', 'white')
            }
        }
    }

    let numSizeOverflowCheck = () => {
        if(incrementer > 999999999999999) {
            $(".button").css('width', '200px')
            $(".button").css('height', '200px')
        } else {
            $(".button").css('width', '150px')
            $(".button").css('height', '150px')
        }
    }

    let setAllLabels = () => {
        $("#total").text('Total: ' + total.toFixed(2))
        $("#incrementer").text('+' + incrementer.toFixed(2))
        $("#incrementerCountLabel").text('Times Clicked: ' + incrementerCount)
        $("#multiplierCountLabel").text('Times Clicked: ' + multiplierCount)
        $("#autoclickerCountLabel").text('Autoclickers: ' + autoclickerCount)
        $("#multiplier").text('*' + multiplier)
    }

    let updateCookies = () => {
        $("#reset").css("background", "#D3A886")
        Cookies.set("total", total, { expires : 10, path : './cookies' })
        Cookies.set("incrementer", incrementer, { expires : 10, path : './cookies' })
        Cookies.set("incrementerCount", incrementerCount, { expires : 10, path : './cookies' })
        Cookies.set("multiplierCount", multiplierCount, { expires : 10, path : './cookies' })
        Cookies.set("autoclickerCount", autoclickerCount, { expires : 10, path : './cookies' })
    }

    let retrieveCookies = () => {
        if(typeof Cookies.get("total") !== 'undefined') {
            total = parseFloat(Cookies.get("total"))
            incrementer = parseFloat(Cookies.get("incrementer"))
            incrementerCount = parseInt(Cookies.get("incrementerCount"))
            multiplierCount = parseInt(Cookies.get("multiplierCount"))
            autoclickerCount = parseInt(Cookies.get("autoclickerCount"))

            numSizeOverflowCheck()
            setAllLabels()

            for(let i = 0; i < autoclickerCount; i++) {
                setInterval(incrementerClicked, autoclickerInterval);
            }

            enableButtons()
        } else {
            updateCookies()
        }
    }

    let deleteCookies = () => {
        if($("#reset").css("background") !== "#B8B0B0") {
            for(id of autoclickerIds) {
                clearInterval(id)
            }

            multiplier = 1.2
            autoclickerInterval = 1000

            total = 0.0
            incrementer = 1
            
            incrementerCount = 0
            multiplierCount = 0
            autoclickerCount = 0

            setAllLabels()
            updateCookies()
            disableButtons() 
            numSizeOverflowCheck()
            $("#reset").css("background", "#B8B0B0")
        }
    }

    let cheatSettings = () => {
        total += 100
        multiplier *= 10
        autoclickerInterval = 100

        setAllLabels()
        updateCookies()
        enableButtons()
    }
    
    retrieveCookies()
    $("#reset").css("background", "#B8B0B0")
})
