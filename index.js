const flights = [
    {
        "code" : "Al-202",
        "cost" : "9,500.00",
        "origin" : "pune",
        "ocode" : "PNQ",
        "destination" : "delhi",
        "dcode" : "DEL",
        "depart" : "10.00 AM",
        "arrive" : "12.00 PM",
        "return":{
            "code" : "Al-203",
            "cost" : "16,500.00",
            "origin" : "delhi",
            "ocode" : "DEL",
            "destination" : "pune",
            "dcode" : "PNQ",
            "depart" : "08.00 PM",
            "arrive" : "11.00 PM"    
        }
    },
    {
        "code" : "Al-201",
        "cost" : "13,500.00",
        "origin" : "pune",
        "ocode" : "PNQ",
        "destination" : "delhi",
        "dcode" : "DEL",
        "depart" : "02.00 PM",
        "arrive" : "04.00 PM",
        "return" : {
                "code" : "Al-204",
                "cost" : "22,500.00",
                "origin" : "delhi",
                "ocode" : "DEL",
                "destination" : "pune",
                "dcode" : "PNQ",
                "depart" : "11.00 PM",
                "arrive" : "01.00 AM"    
        }
    },
    {
        "code" : "Al-203",
        "cost" : "9,500.00",
        "origin" : "delhi",
        "ocode" : "DEL",
        "destination" : "pune",
        "dcode" : "PNQ",
        "depart" : "08.00 PM",
        "arrive" : "11.00 PM",
        "return" : {
                "code" : "Al-202",
                "cost" : "17,500.00",
                "origin" : "pune",
                "ocode" : "PNQ",
                "destination" : "delhi",
                "dcode" : "DEL",
                "depart" : "06.00 PM",
                "arrive" : "09.00 PM"
        }
    },
    {
        "code" : "Al-213",
        "cost" : "4,500.00",
        "origin" : "mumbai",
        "ocode" : "BOM",
        "destination" : "pune",
        "dcode" : "PNQ",
        "depart" : "12.00 PM",
        "arrive" : "01.00 PM",
        "return" : {
            "code" : "Al-202",
            "cost" : "8,500.00",
            "origin" : "pune",
            "ocode" : "PNQ",
            "destination" : "mumbai",
            "dcode" : "BOM",
            "depart" : "06.00 PM",
            "arrive" : "07.00 PM"
    }
    },
    {
        "code" : "Al-214",
        "cost" : "4,500.00",
        "origin" : "pune",
        "ocode" : "PQN",
        "destination" : "mumbai",
        "dcode" : "BOM",
        "depart" : "06.00 PM",
        "arrive" : "07.00 PM",
        "return" : {
            "code" : "Al-245",
            "cost" : "7,500.00",
            "origin" : "mumbai",
            "ocode" : "BOM",
            "destination" : "pune",
            "dcode" : "PNQ",
            "depart" : "10.00 PM",
            "arrive" : "11.00 PM"
    }
    },
    {
        "code" : "Al-206",
        "cost" : "12,800.00",
        "origin" : "chennai",
        "ocode" : "MAA",
        "destination" : "kolkata",
        "dcode" : "CCU",
        "depart" : "06.00 AM",
        "arrive" : "10.00 AM",
        "return" : {
            "code" : "Al-222",
            "cost" : "21,500.00",
            "origin" : "kolkata",
            "ocode" : "CCU",
            "destination" : "chennai",
            "dcode" : "MAA",
            "depart" : "06.00 PM",
            "arrive" : "09.00 PM"
    }
    },
    {
        "code" : "Al-273",
        "cost" : "12,800.00",
        "origin" : "kolkata",
        "ocode" : "CCU",
        "destination" : "chennai",
        "dcode" : "MAA",
        "depart" : "03.00 PM",
        "arrive" : "05.00 PM",
        "return" : {
            "code" : "Al-202",
            "cost" : "17,500.00",
            "origin" : "chennai",
            "ocode" : "MAA",
            "destination" : "kolkata",
            "dcode" : "CCU",
            "depart" : "09.00 PM",
            "arrive" : "11.00 PM"
    }
    },
]
const stringData = JSON.stringify(flights);
const json = JSON.parse(stringData);
const single = document.querySelector('#return');
const oneWay = document.querySelector('#oneWay');
const ret = document.querySelector('#ret');
const flightShow = document.querySelector('#flight-show');
let found = false;
oneWay.addEventListener('click', function(){
    single.classList.add('hidden');
    oneWay.classList.add('active');
    ret.classList.remove('active');
    retDate.value = "";
    resetResults();
})
ret.addEventListener('click', function(){
    single.classList.remove('hidden');
    oneWay.classList.remove('active');
    ret.classList.add('active'); 
    resetResults();
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
    const col = document.createElement('div');
    col.className = 'col';
    const row = document.createElement('div');
    row.className = 'row2';
    const row2 = document.createElement('div');
    row2.className = 'row2';
    heading.innerText = `${origin.toUpperCase()} > ${destination.toUpperCase()}`;
    const spanDate = document.createElement('span');
    const spanDate2 = document.createElement('span');
    row.append(heading);
    col.append(row);
    spanDate.innerText = `Depart: ${depDate}`;
    row2.append(spanDate);
    if(retDate){
        heading.innerText = `${origin.toUpperCase()} > ${destination.toUpperCase()} > ${origin.toUpperCase()}`;
        spanDate2.innerText = `Return: ${retDate}`;
        row2.append(spanDate2);
    }
    col.append(row2)
    show.append(col);
    displayFlights(origin, destination);
})

const displayFlights = (origin, destination) => {
    for(let flight of json){
        if(flight.origin == origin.toLowerCase() && flight.destination == destination.toLowerCase()){
            const h2 = document.createElement('h2')
            const div = document.createElement('div')
            h2.innerText = `${flight.cost}`;
            const div2 = document.createElement('div');
            div2.className = `flight ${flight.cost}`;
            if(retDate.value){
                h2.innerText = `${flight.return.cost}`;
                
            }
            const img = document.createElement('img');
            const book = document.createElement('button');
            img.src = "https://images.unsplash.com/photo-1624562821266-3339f8e0d9da?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80";
            book.innerText = "Book this flight";
            div.append(h2);
            div2.className = `flight`;
            flightShow.append(div);
            show.append(flightShow);
            createFlight(flight);
            if(retDate.value){
                createFlight(flight.return);
            }
            div2.append(img);
            div2.append(book);
            flightShow.append(div2);
            found = true;
        }
    }
    if(found == false){
        alert("Flight Not Found");
        resetResults();
    }
}


const resetResults = () =>{
    const e = document.querySelector('#flight-show');
    const e2 = document.querySelector('#show');
    const fs = document.createElement('section');
    e.innerHTML = "";
    e2.innerHTML = "";
    fs.setAttribute('id','flight-show');
    const col = document.createElement('div');
    col.className = 'col';
    col.append(fs);
    e.append(col);
    found = false;
}

const createFlight = (flight) => {
    const head = document.querySelector('#head');
    const div = document.createElement('div')
    const p = document.createElement('p');
    const fc = document.createElement('span');
    p.innerHTML = `${flight.ocode} > ${flight.dcode}<br>
                    Depart: ${flight.depart} <br>
                    Arrive: ${flight.arrive}`;
    fc.innerText = `${flight.code}`
    div.className = 'flight';
    div.append(fc);
    div.append(p);
    flightShow.append(div);
}