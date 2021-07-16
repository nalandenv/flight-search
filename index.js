const flights = [
    {
        "code" : "Al-202",
        "cost" : "9,500.00",
        "origin" : "pune",
        "ocode" : "PNQ",
        "destination" : "delhi",
        "dcode" : "DEL",
        "depart" : "10.00 AM",
        "arrive" : "12.00 PM"
    },
    {
        "code" : "Al-201",
        "cost" : "13,500.00",
        "origin" : "pune",
        "ocode" : "PNQ",
        "destination" : "delhi",
        "dcode" : "DEL",
        "depart" : "02.00 PM",
        "arrive" : "04.00 PM"
    },
    {
        "code" : "Al-203",
        "cost" : "9,500.00",
        "origin" : "delhi",
        "ocode" : "DEL",
        "destination" : "pune",
        "dcode" : "PNQ",
        "depart" : "08.00 PM",
        "arrive" : "11.00 PM"
    },
    {
        "code" : "Al-213",
        "cost" : "4,500.00",
        "origin" : "mumbai",
        "ocode" : "BOM",
        "destination" : "pune",
        "dcode" : "PNQ",
        "depart" : "12.00 PM",
        "arrive" : "01.00 PM"
    },
    {
        "code" : "Al-214",
        "cost" : "4,500.00",
        "origin" : "pune",
        "ocode" : "PQN",
        "destination" : "mumbai",
        "dcode" : "BOM",
        "depart" : "06.00 PM",
        "arrive" : "07.00 PM"
    },
    {
        "code" : "Al-206",
        "cost" : "12,800.00",
        "origin" : "chennai",
        "ocode" : "MAA",
        "destination" : "kolkata",
        "dcode" : "CCU",
        "depart" : "06.00 AM",
        "arrive" : "10.00 AM"
    },
    {
        "code" : "Al-273",
        "cost" : "12,800.00",
        "origin" : "kolkata",
        "ocode" : "CCU",
        "destination" : "chennai",
        "dcode" : "MAA",
        "depart" : "07.00 PM",
        "arrive" : "11.00 PM"
    },
]
const stringData = JSON.stringify(flights);
const json = JSON.parse(stringData);
const single = document.querySelector('#return');
const oneWay = document.querySelector('#oneWay');
const ret = document.querySelector('#ret');
oneWay.addEventListener('click', function(){
    single.classList.add('hidden');
    oneWay.classList.add('active');
    ret.classList.remove('active');
})
ret.addEventListener('click', function(){
    single.classList.remove('hidden');
    oneWay.classList.remove('active');
    ret.classList.add('active');
})
const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    resetResults();
    const origin = document.querySelectorAll('input')[0].value;
    const destination = document.querySelectorAll('input')[1].value;
    const show = document.querySelector('#show');
    const depDate = document.querySelectorAll('input')[2].value;
    const retDate = document.querySelectorAll('input')[3].value;
    const heading = document.createElement('h1');
    heading.innerText = `${origin} > ${destination} > ${origin}`;
    const spanDate = document.createElement('span');
    const spanDate2 = document.createElement('span');
    spanDate.innerText = `Depart: ${depDate}`;
    show.append(heading);
    show.append(spanDate);
    if(retDate){
        spanDate2.innerText = `Return: ${retDate}`;
        show.append(spanDate2);
    }
    displayFlights(origin, destination);
})

const displayFlights = (origin, destination) => {
    for(let flight of json){
        if(flight.origin == origin.toLowerCase() && flight.destination == destination.toLowerCase()){
            createFlight(flight);
        }
    }
    if(retDate.value){
        let temp = origin;
        origin = destination;
        destination = temp;
        for(let flight of json){
            if(flight.origin == origin.toLowerCase() && flight.destination == destination.toLowerCase()){
                createFlight(flight);
            }
        }
    }
}


const resetResults = () =>{
    const e = document.querySelector('#show');
    let child = e.lastElementChild;
    while(child){
        e.removeChild(child);
        child = e.lastElementChild;
    }
}

const createFlight = (flight) => {
    const h2 = document.createElement('h2')
    const head = document.querySelector('#head');
    const div = document.createElement('div')
    const p = document.createElement('p');
    const fc = document.createElement('span');
    h2.innerText = `${flight.cost}`;
    p.innerHTML = `${flight.ocode} > ${flight.dcode}<br>
                    Depart: ${flight.depart} <br>
                    Arrive: ${flight.arrive}`;
    fc.innerText = `${flight.code}`
    div.append(h2);
    div.append(fc);
    div.append(p);
    show.append(div);
}
