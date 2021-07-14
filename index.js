const flights = [
    {
        "code" : "Al-202",
        "cost" : "9,500.00",
        "origin" : "Pune",
        "destination" : "Delhi",
        "depart" : "10.00 AM",
        "arrive" : "12.00 PM"
    },
    {
        "code" : "Al-203",
        "cost" : "9,500.00",
        "origin" : "Delhi",
        "destination" : "Pune",
        "depart" : "08.00 PM",
        "arrive" : "11.00 PM"
    }
]
const stringData = JSON.stringify(flights);
const json = JSON.parse(stringData);

const searchForm = document.querySelector('#searchForm');
searchForm.addEventListener('submit', function(e){
    const origin = document.querySelectorAll('input')[0].value;
    const destination = document.querySelectorAll('input')[1].value;
    for(let i=0; i<json.length; i++){
        if(json[i].origin == origin && json[i].destination == destination){
           console.log(`Flight found! Code: ${json[i].code}`)
        }
    }
    e.preventDefault();
})