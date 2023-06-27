

const url = 'https://restcountries.com/v3.1/all'


const root = document.getElementById('root')

axios.get(url).then(({data}) => {
    console.log(data)
    data.forEach(({capital, flags, name: { common} }) => {
        const card = document.createElement('a')
        card.href = 'https://en.wikipedia.org/wiki/' + common
        card.className = 'card'
        const img = document.createElement('img')
        img.src = flags.png
        img.alt = 'imgage of' + common
        const h3 = document.createElement('h3')
        h3.textContent=`${common} / ${capital}`
        card.append(img,h3)
        root.append(card)
    });
})




