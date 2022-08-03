
const grab = document.getElementById('holder')

const container = document.createElement('div')
container.classList.add('container')
grab.append(container)

const search = document.createElement('form')
grab.append(search)

const searchbox = document.createElement('input')
searchbox.classList.add('searchbox')
searchbox.type ='search'
searchbox.name = 'search'
searchbox.placeholder = 'City Name'
search.append(searchbox)

const searchbutton = document.createElement('button')
searchbutton.classList.add('searchbutton')
searchbutton.type = 'button'
searchbutton.textContent = '>'
search.append(searchbutton)

const firstColumn = document.createElement('div')
firstColumn.classList.add('firstcolumn')
container.append(firstColumn)

const secondColumn = document.createElement('div')
secondColumn.classList.add('secondcolumn')
container.append(secondColumn)

const boxOne = document.createElement('div')
boxOne.classList.add('boxone')
firstColumn.append(boxOne)

const switchbut = document.createElement('button')
switchbut.type = 'button'
switchbut.classList.add('switch')
switchbut.classList.add('F')
switchbut.textContent = 'F'
boxOne.append(switchbut)

const boxTwo = document.createElement('div')
boxTwo.classList.add('boxtwo')
firstColumn.append(boxTwo)

const line = document.createElement('div')
line.classList.add('line')
boxTwo.append(line)

const boxThree = document.createElement('div')
boxThree.classList.add('boxthree')
firstColumn.append(boxThree)

const summaryBoxOne = document.createElement('div')
summaryBoxOne.classList.add('summaryboxone')
boxOne.append(summaryBoxOne)

const innerSumOne = document.createElement('div')
innerSumOne.classList.add('innersumone')
summaryBoxOne.append(innerSumOne)

const innerSumTwo = document.createElement('div')
innerSumTwo.classList.add('innersumtwo')
summaryBoxOne.append(innerSumTwo)

const summaryBoxTwo = document.createElement('div')
summaryBoxTwo.classList.add('summaryboxone')
boxThree.append(summaryBoxTwo)

const innerSumOneOne = document.createElement('div')
innerSumOneOne.classList.add('innersumone')
summaryBoxTwo.append(innerSumOneOne)

const innerSumeOneTwo = document.createElement('div')
innerSumeOneTwo.classList.add('innersumtwo')
summaryBoxTwo.append(innerSumeOneTwo)


const lowerBoxOne = document.createElement('div')
lowerBoxOne.classList.add('lowerbox')

const lowerBoxTwo = document.createElement('div')
lowerBoxTwo.classList.add('lowerbox')

const lowerBoxThree = document.createElement('div')
lowerBoxThree.classList.add('lowerbox')

const lowerBoxFour = document.createElement('div')
lowerBoxFour.classList.add('lowerbox')

const lowerBoxFive = document.createElement('div')
lowerBoxFive.classList.add('lowerbox')


lowerOneFirst = document.createElement('div')
lowerOneFirst.classList.add('lower')
lowerOneFirst.classList.add('upper')

lowerOneSecond = document.createElement('div')
lowerOneSecond.classList.add('lower')
lowerOneSecond.classList.add('smallupper')

lowerTwoFirst = document.createElement('div')
lowerTwoFirst.classList.add('lower')
lowerTwoFirst.classList.add('upper')

lowerTwoSecond = document.createElement('div')
lowerTwoSecond.classList.add('lower')
lowerTwoSecond.classList.add('smallupper')

lowerThirdFirst = document.createElement('div')
lowerThirdFirst.classList.add('lower')
lowerThirdFirst.classList.add('upper')




lowerThirdSecond = document.createElement('div')
lowerThirdSecond.classList.add('lower')
lowerThirdSecond.classList.add('smallupper')

lowerFourFirst = document.createElement('div')
lowerFourFirst.classList.add('lower')
lowerFourFirst.classList.add('upper')


lowerFourSecond = document.createElement('div')
lowerFourSecond.classList.add('lower')
lowerFourSecond.classList.add('smallupper')

lowerFiveFirst = document.createElement('div')
lowerFiveFirst.classList.add('lower')
lowerFiveFirst.classList.add('upper')

lowerFiveSecond = document.createElement('div')
lowerFiveSecond.classList.add('lower')
lowerFiveSecond.classList.add('smallupper')

lowerBoxOne.append(lowerOneFirst, lowerOneSecond)
lowerBoxTwo.append(lowerTwoFirst, lowerTwoSecond)
lowerBoxThree.append(lowerThirdFirst, lowerThirdSecond)
lowerBoxFour.append(lowerFourFirst, lowerFourSecond)
lowerBoxFive.append(lowerFiveFirst, lowerFiveSecond)
secondColumn.append(lowerBoxOne, lowerBoxTwo, lowerBoxThree, lowerBoxFour, lowerBoxFive)




lowerOneFirst.textContent = 'Feels Like'
lowerTwoFirst.textContent = 'Humidity'
lowerThirdFirst.textContent = 'Pressure'
lowerFourFirst.textContent = 'Min Temp'
lowerFiveFirst.textContent = 'Max Temp'



let firstLink = 'https://api.openweathermap.org/data/2.5/weather?q='
let secondLink = '&APPID=db085501cc7954005fe477bfe27da19b'
let fullUnit = '&units=metric'
let fullLink = ''
let cityEntry = 'Dallas'












// Initial default fetch

fetch('https://api.openweathermap.org/data/2.5/weather?q=Dallas&APPID=db085501cc7954005fe477bfe27da19b&units=imperial', {mode: 'cors'})
.then(function(response) {
 return response.json()
    
})
.then(function(response) {
    innerSumOne.textContent = response.main.temp
    console.log(response)
    innerSumTwo.textContent = response.name


    innerSumOneOne.textContent = response.weather[0].main
    innerSumeOneTwo.textContent = response.weather[0].description

    
    lowerOneSecond.textContent = response.main.feels_like + '°'
    lowerTwoSecond.textContent = response.main.humidity + '%'
    lowerThirdSecond.textContent = response.main.pressure + 'mb'
    lowerFourSecond.textContent = response.main.temp_min + '°'
    lowerFiveSecond.textContent = response.main.temp_max + '°'
    

})















//Temperature Unit Button listener 

switchbut.addEventListener('click', function(e) {
    let target = e.target
    if(target.classList.contains('F')) {
        fullUnit = '&units=metric'
        target.classList.remove('F')
        target.classList.add('C')
        target.textContent = 'C'

        console.log(fullLink + fullUnit)

        fetch(firstLink + cityEntry + secondLink + fullUnit, {mode: 'cors'})
        .then(function(response) {
         return response.json() 
        
        }).then (function(response) {
            innerSumOne.textContent = response.main.temp
            innerSumTwo.textContent = response.name
        
        
            innerSumOneOne.textContent = response.weather[0].main
            innerSumeOneTwo.textContent = response.weather[0].description
        
            
            lowerOneSecond.textContent = response.main.feels_like + '°'
            lowerTwoSecond.textContent = response.main.humidity + '%'
            lowerThirdSecond.textContent = response.main.pressure + 'mb'
            lowerFourSecond.textContent = response.main.temp_min + '°'
            lowerFiveSecond.textContent = response.main.temp_max + '°'



        })
        

    } else if (target.classList.contains('C') ) {
        fullUnit = '&units=imperial'
        target.classList.remove('C')
        target.classList.add('F')
        target.textContent = 'F'
        fetch(firstLink + cityEntry + secondLink + fullUnit, {mode: 'cors'})
        .then(function(response) {
         return response.json() 
        
        }).then (function(response) {
            innerSumOne.textContent = response.main.temp
            innerSumTwo.textContent = response.name
        
        
            innerSumOneOne.textContent = response.weather[0].main
            innerSumeOneTwo.textContent = response.weather[0].description
        
            
            lowerOneSecond.textContent = response.main.feels_like + '°'
            lowerTwoSecond.textContent = response.main.humidity + '%'
            lowerThirdSecond.textContent = response.main.pressure + 'mb'
            lowerFourSecond.textContent = response.main.temp_min + '°'
            lowerFiveSecond.textContent = response.main.temp_max + '°'



        })
    }
})





//SearchBox button sets what city is typed out for link

searchbutton.addEventListener("click", function(e) {
    cityEntry = searchbox.value
    console.log(cityEntry)
    fullLink = firstLink + cityEntry + secondLink
    console.log(fullLink)
    searchFetch()

})










//searchFetch pulls together the full proper link

function searchFetch () {
if(switchbut.classList.contains('F')) {
fullUnit = '&units=imperial'
} else if(switchbut.classList.contains('C')) {
fullUnit = '&units=metric'
}

fetch(fullLink + fullUnit, {mode: 'cors'})
.then(function(response) {
 return response.json()
    
})
.then(function(response) {
    innerSumOne.textContent = response.main.temp
    console.log(response)
    innerSumTwo.textContent = response.name


    innerSumOneOne.textContent = response.weather[0].main
    innerSumeOneTwo.textContent = response.weather[0].description

    
    lowerOneSecond.textContent = response.main.feels_like + '°'
    lowerTwoSecond.textContent = response.main.humidity + '%'
    lowerThirdSecond.textContent = response.main.pressure + 'mb'
    lowerFourSecond.textContent = response.main.temp_min + '°'
    lowerFiveSecond.textContent = response.main.temp_max + '°'
    

})
}

let formgrab = document.querySelector('form')
console.log(formgrab)

formgrab.addEventListener('submit', function(e) {
    e.preventDefault()

})

