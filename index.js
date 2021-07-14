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
        "cost" : "9,500.00",
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
        "ocode" : "PNQ",
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

const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', function(e){
    e.preventDefault();
    resetResults();
    const origin = document.querySelectorAll('input')[0].value;
    const destination = document.querySelectorAll('input')[1].value;
    const show = document.querySelector('#show');
    const heading = document.createElement('h1');
    heading.innerText = `${origin} > ${destination} > ${origin}`
    show.append(heading);
    displayFlights(origin, destination);
})

const displayFlights = (origin, destination) => {
    for(let i=0; i<json.length; i++){
        if(json[i].origin == origin.toLowerCase() && json[i].destination == destination.toLowerCase()){
            const h3 = document.createElement('h3')
            const head = document.querySelector('#head');
            const div = document.createElement('div')
            h3.innerText = `${json[i].code}`
            div.append(h3);
            show.append(div)
        }
    }
}

const resetResults = () =>{
    const e = document.querySelector('#show')
    let child = e.lastElementChild;
    while(child){
        e.removeChild(child);
        child = e.lastElementChild;
    }
}