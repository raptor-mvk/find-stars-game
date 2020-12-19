$(function(){
    const minTop = 0
    const maxTop = 800
    const minLeft = 0
    const maxLeft = 1500
    const minOpacity = 20
    const maxOpacity = 50
    const minStars = 5
    const maxStars = 10
    const pointsForStar = 10
    const pointsForWin = 100
    let pointsCount = 0
    let starsLeft = 0

    initAllStars()

    function initAllStars() {
        updatePoints()
        let starsCount = Math.round(getRandom(minStars, maxStars))
        for (let i = 1; i <= starsCount; i++) {
            $('div.playzone').append('<div class="star star'+i+'"><img src="star.png" width="100px"/></div>')
            initStar(i)
        }
        alert('Найди ' + starsCount + ' звёздочек')
        starsLeft = starsCount
    }

    function getRandom(minValue, maxValue) {
        return Math.random() * (maxValue - minValue) + minValue;
    }

    function initStar(number) {
        let star = $('div.star'+number);
        star.css('top', getRandom(minTop, maxTop))
        star.css('left', getRandom(minLeft, maxLeft))
        star.css('opacity', getRandom(minOpacity, maxOpacity)+'%')
        star.on('click', function() {
            starClickHandler(star)
        })
    }

    function starClickHandler(star) {
        star.css('visibility', 'hidden')
        pointsCount += pointsForStar
        starsLeft--
        if (starsLeft <= 0) {
            alert('Вот жучара, все нашёл!')
            pointsCount += pointsForWin
            initAllStars()
        } else {
            alert('Здорово, бандиты! Осталось ' + starsLeft + ' звёздочек')
            updatePoints()
        }
    }

    function updatePoints() {
        $('div.points').html(pointsCount + ' очков')
    }
});