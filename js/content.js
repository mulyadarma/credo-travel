
const discover = [
    {
        image : '../img/place-img/potrait/europe/tania-mousinho-Greece-unsplash.jpg',
        country: 'Greece',
        city: 'ANTORINI'
    },
    {
        image : '../img/place-img/potrait/asia/alec-favale-NusaPenida-Bali-unsplash.jpg',
        country: 'Greece',
        city: 'OIA'
    },
    {
        image : '../img/place-img/potrait/europe/hugo-sousa-london-unsplash.jpg',
        country: 'Greece',
        city: 'ANTORINI'
    },
    {
        image : '../img/place-img/potrait/asia/bantersnaps-japan-unsplash.jpg',
        country: 'Bali',
        city: 'NUSA PENIDA'
    },
    {
        image : '../img/place-img/potrait/africa/spencer-davis-cairo-egypt-unsplash.jpg',
        country: 'Egypt',
        city: 'CAIRO'
    }
]

const place = `${discover.map( cover =>`
                <div class="discover_card swiper-slide">
                    <img src ="${cover.image}" alt="" class="discover_img">
                    <div class="discover_data">
                        <h3 class="discover_title">${cover.country}<br>${cover.city}</h3>
                    </div>

                    <a class="button button--flex  discover__button" href="html/destination.html">
                        <i class="ri-plane-line"></i>
                    </a>
                </div>
                `).join('')}`
            

document.getElementById("discover-upload").innerHTML = place





const selectDestination = [

    {
        image : '../img/place-img/potrait/europe/ryan-spencer-Oia,Greece-unsplash.jpg',
        country: 'Greece',
        city: 'OIA',
        area : 'europe'
    },
    {
        image : '../img/place-img/potrait/american/eric-dekker-washingtonDC-unsplash.jpg',
        country: 'USA',
        city: 'WASHINGTON',
        area : 'american'
    },
    {
        image : '../img/place-img/potrait/africa/louis-hansel-marocco-unsplash.jpg',
        country: 'Africa',
        city: 'MAROCCO',
        area: 'afrika'
    },
    {
        image : '../img/place-img/potrait/africa/spencer-davis-cairo-egypt-unsplash.jpg',
        country: 'Egypt',
        city: 'CAIRO',
        area: 'afrika'
    },
    {
        image : '../img/place-img/potrait/american/jorge-gardner-newyork-unsplash.jpg',
        country: 'USA',
        city: 'NEWYORK',
        area : 'american'
    },
    {
        image : '../img/place-img/potrait/europe/adora-goodenough-France-Paris-unsplash.jpg',
        country: 'France',
        city: 'PARIS',
        area : 'europe'
    },
    {
        image : '../img/place-img/potrait/asia/david-emrich-kyoto-japanunsplash.jpg',
        country: 'Japan',
        city: 'KYOTO',
        area : 'asia'
    },
    {
        image : '../img/place-img/potrait/asia/shifaaz-shamoon-VeliganduIsland-Maldives-unsplash.jpg',
        country: 'Maldives',
        city: 'VELIGANDU',
        area : 'asia'
    },
    {
        image : '../img/place-img/potrait/asia/alec-favale-NusaPenida-Bali-unsplash.jpg',
        country: 'Indonesia',
        city: 'BALI',
        area : 'asia'
    },
    {
        image : '../img/place-img/potrait/american/sandro-meier-argentina-unsplash.jpg',
        country: 'Argentina',
        city: 'Meire',
        area : 'american'
    },
    {
        image : '../img/place-img/potrait/africa/kyle-cut-media-capeTown-southAfrica-unsplash.jpg',
        country: 'South Africa',
        city: 'CAPE TOWN',
        area: 'afrika'
    },
    {
        image : '../img/place-img/potrait/asia/aviv-rachmadian-borobudur-unsplash.jpg',
        country: 'Indonesia',
        city: 'BOROBUDUR',
        area : 'asia'
    },
    {
        image : '../img/place-img/potrait/africa/ian-macharia-kenya-unsplash.jpg',
        country: 'Africa',
        city: 'KENYA',
        area: 'afrika'
    },
    {
        image : '../img/place-img/potrait/europe/igor-oliyarnik-italy-unsplash.jpg',
        country: 'Venesia',
        city: 'ITALY',
        area : 'europe'
    },
    {
        image : '../img/place-img/potrait/asia/josephine-lin-tokyo-japan-unsplash.jpg',
        country: 'Japan',
        city: 'TOKYO',
        area : 'asia'
    },
    {
        image : '../img/place-img/potrait/europe/hugo-sousa-london-unsplash.jpg',
        country: 'England',
        city: 'LONDON',
        area : 'europe'
    },
    {
        image : '../img/place-img/potrait/europe/pelayo-arbues-menorcaSpain-unsplash.jpg',
        country: 'Spain',
        city: 'MENORCA',
        area : 'europe'

    },
    {
        image : '../img/place-img/potrait/american/redd-canada-unsplash.jpg',
        country: 'Canada',
        city: 'WHISTLER',
        area : 'american'
    },
    {
        image : '../img/place-img/potrait/american/jaume-galofre-Rio-Brazil-unsplash.jpg',
        country: 'Brazil',
        city: 'RIO',
        area : 'american'
    },
    {
        image : '../img/place-img/potrait/africa/keyur-nandaniya-sahara-unsplash.jpg',
        country: 'Africa',
        city: 'SAHARA',
        area: 'afrika'
    }
]

const destination = `${selectDestination.map( cover =>`
                    <div class="place__card ${cover.area} ">
                        <img src="${cover.image}" alt="" class="place__img">

                        <div class="place__content">
                            <h3 class="place__city">${cover.city}</h3>
                            <span class="place__country">${cover.country}</span>
                        </div>

                        <button class="button button--flex place__button">
                        <i class="ri-plane-fill"></i>
                        </button>
                    </div>
                    `).join('')}`

document.getElementById("destination-upload").innerHTML = destination






