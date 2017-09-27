$(document).ready(function() {
    const multiplierCost = 10
    const autoclickerCost = 100
    const expirationDate = 100000000

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
            addInterval()
            
            $("#autoclickerCountLabel").text('Autoclickers: ' + ++autoclickerCount)

            updateCookies()
        }
    }

    let refreshTotal = () => $("#total").text('Total: ' + total.toFixed(2))

    let disableButtons = () => {
        if(total < multiplierCost) {
            $("#multiplier").css('background', 'gray')
            $("#multiplier").css('cursor', 'not-allowed')
        }

        if(total < autoclickerCost) {
            $("#autoclicker").css('background', 'gray')
            $("#autoclicker").css('cursor', 'not-allowed')
        }
    }

    let enableButtons = () => {
        if(total >= multiplierCost) {
            $("#multiplier").css('background', 'white')
            $("#multiplier").css('cursor', 'cell')
            if(total >= autoclickerCost) {
                $("#autoclicker").css('background', 'white')
                $("#autoclicker").css('cursor', 'cell')
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
        $("#reset").css('cursor', 'pointer')
        Cookies.set("total", total, { expires : expirationDate, path : './cookies' })
        Cookies.set("incrementer", incrementer, { expires : expirationDate, path : './cookies' })
        Cookies.set("incrementerCount", incrementerCount, { expires : expirationDate, path : './cookies' })
        Cookies.set("multiplierCount", multiplierCount, { expires : expirationDate, path : './cookies' })
        Cookies.set("autoclickerCount", autoclickerCount, { expires : expirationDate, path : './cookies' })
        Cookies.set("multiplier", multiplier, { expires : expirationDate, path : './cookies' })
        Cookies.set("autoclickerInterval", autoclickerInterval, { expires : expirationDate, path : './cookies' })
    }

    let retrieveCookies = () => {
        if(Cookies.get("total")) {
            total = parseFloat(Cookies.get("total"))
            incrementer = parseFloat(Cookies.get("incrementer"))
            incrementerCount = parseInt(Cookies.get("incrementerCount"))
            multiplierCount = parseInt(Cookies.get("multiplierCount"))
            autoclickerCount = parseInt(Cookies.get("autoclickerCount"))
            multiplier = parseFloat(Cookies.get("multiplier"))
            autoclickerInterval = parseInt(Cookies.get("autoclickerInterval"))

            numSizeOverflowCheck()
            setAllLabels()

            for(let i = 0; i < autoclickerCount; i++) {
                addInterval()
            }

            enableButtons()

            if(total === 0) {
                $("#reset").css("background", "#B8B0B0")
                $("#reset").css('cursor', 'not-allowed')
            } else {
                $("#reset").css("background", "#D3A886")
                $("#reset").css('cursor', 'pointer')
            }
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
            autoclickerIds = []

            setAllLabels()
            updateCookies()
            disableButtons() 
            numSizeOverflowCheck()
            $("#reset").css("background", "#B8B0B0")
            $("#reset").css('cursor', 'not-allowed')
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
    
    const addInterval = () => autoclickerIds.push(setInterval(incrementerClicked, autoclickerInterval))

    retrieveCookies()
})
