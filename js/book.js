
const detailers = document.getElementById('detailers');
const cars = JSON.parse(localStorage.getItem('cars')) || [];
const myVehiclesDiv = document.getElementById('myVehicles');
const packagesDiv = document.getElementById("packages");

const bookingForm = document.getElementById('bookingForm');
let users = [];

// Setup the packages
const packages = [
  { name: 'The Basic Wash', price: '$16', id: '16', description: 'Value wash,Exterior wash, Spot free rinse, Super dry.', time: '45 min' },
  { name: 'Tire & Wheel', price: '$19', id: '19', description: 'The basic plus the following, Double wheel cleaner, Tire shine, Rim bright', time: '45 min' },
  { name: 'Protect & Shine', price: '$23', id: '23', description: 'Basic + Tire & Wheel, Lava bath, Triple foam, Sealer wax', time: '45 min' },
  { name: 'Platinum', price: '$26', id: '26', description: 'Includes everything, Rain X, Rain X for wheels, Air fragrance', time: '45 min' }
]

window.addEventListener('load', () => {
  renderDetailers();
  renderCarList();
  renderPackages();
});




function renderDetailers() {
  fetch('https://randomuser.me/api/?results=4').then(res => res.json())
    .then(data => {
      users = data.results;
      data.results.forEach(user => {
        const item = document.createElement('div');
        item.classList.add('relative', 'w-56', 'p-0');
        item.innerHTML = `
        <input type="radio" name="detailers" value="${user.email}" class="sr-only peer" id="${user.id.value}">
        <label for="${user.id.value}"
          class="h-56 hover:bg-blue-500x hover:border-transparent hover:shadow-lg block rounded-lg p-4 border border-gray-200 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:ring-4  peer-checked:ring-blue-500    group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium  hover:bg-blue-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
          <div class="min-h-full flex items-center justify-center  ">
            <div class="flex flex-col flex-auto w-full text-center">
              <div class="w-16 h-16 mx-auto rounded-full overflow-hidden">
                <img src="${user.picture.large}" alt="${user.name.first}" class="w-full h-full object-cover">
              </div>
              <div class="mt-4 font-medium">${user.name.first} ${user.name.last}</div>
              <div class="mb-2">Car Detailer </div>
              <div class="text-xs">${user.location.street.number} ${user.location.street.name},
                ${user.location.city}, ${user.location.state},${user.location.country},
                ${user.location.postcode} </div>
            </div>
          </div>


          <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
        </label>
        	`;
        detailers.appendChild(item);
      });
    });
}


function onCarSelect(id) {
  let check = document.getElementById('check' + id);
  let darkImg = document.getElementById('dark-img' + id);
  let lightImg = document.getElementById('light-img' + id);

  document.getElementsByClassName('reset').forEach(item => {
    if (item.getAttribute('id').includes('check') && item.getAttribute('id') != 'check' + id) {
      item.classList.add('hidden');
    }
    if (item.getAttribute('id').includes('dark-img') && item.getAttribute('id') != 'dark-img' + id) {
      item.classList.remove('hidden');
    }
    if (item.getAttribute('id').includes('light-img') && item.getAttribute('id') != 'light-img' + id) {
      item.classList.add('hidden');
    }
  })

  check.classList.remove('hidden');
  darkImg.classList.add('hidden');
  lightImg.classList.remove('hidden');
}

function onPackageSelect(id) {
  document.getElementById(id).classList.remove('hidden');
  document.getElementsByClassName('resetPackage').forEach(item => {
    if (item.getAttribute('id') == '16' && item.getAttribute('id') != id) {
      item.classList.add('hidden');
    }
    if (item.getAttribute('id') == '19' && item.getAttribute('id') != id) {
      item.classList.add('hidden');
    }
    if (item.getAttribute('id') == '23' && item.getAttribute('id') != id) {
      item.classList.add('hidden');
    }
    if (item.getAttribute('id') == '26' && item.getAttribute('id') != id) {
      item.classList.add('hidden');
    }
  })
}

const renderCarList = () => {
  cars.forEach(car => {
    const item = document.createElement('div');
    item.classList.add('relative', 'w-56');
    item.innerHTML = ` 
<input type="radio" name="cars" value="${car.id}" class="sr-only peer" id="${car.id}" onchange="onCarSelect(${car.id})">
  <label for="${car.id}"
    class="h-32 hover:border-transparent hover:shadow-lg block rounded-lg p-4 border border-gray-200 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:ring-4  peer-checked:ring-blue-500    group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-blue-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
    <div class="flex flex-col justify-center">
      <div class="flex flex-auto justify-center">
        <img  id="dark-img${car.id}" src="./images/${car.type}.png" class="w-28 reset"/>
        <img  id="light-img${car.id}" src="./images/${car.type}-white.png" class="w-28 hidden reset" />
      </div>
      
      <i id="check${car.id}" class="hidden fa fa-check absolute top-0 right-0 mt-3 mr-3 icon-size-7 reset"></i>
      <div class="flex flex-col">
      <h4 class="flex  justify-center text-sm font-semibold ">
      ${capitalizeFirstLetter(car.brand)} ${capitalizeFirstLetter(car.model)}
      </h4>
      <div
        class="w-full flex justify-center text-sm font-medium mt-2">
        ${capitalizeFirstLetter(car.color)} - ${capitalizeFirstLetter(car.plate)}
      </div>
    </div>
    </div>
    <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
  </label>`;
    myVehiclesDiv.appendChild(item);
  })
}

const renderPackages = () => {
  packages.forEach(item => {
    const package = document.createElement('div');
    package.classList.add('relative', 'w-56');
    package.innerHTML = ` 
  <input type="radio" name="packages" value="${item.id}" class="sr-only peer" id="${item.name}" onchange="onPackageSelect(${item.id})" >
  <label for="${item.name}"
    class="h-56 hover:border-transparent hover:shadow-lg block rounded-lg border border-gray-200 peer-checked:transparent  peer-checked:ring-4  peer-checked:ring-blue-500    group relative border rounded-md px-4 flex items-center justify-center text-sm font-medium  hover:bg-blue-50 focus:outline-none sm:flex-1 sm:py-2 bg-white shadow-sm text-gray-900 cursor-pointer">
   
    <div class="min-h-full flex items-center justify-start">
    <div class="max-w-md w-full space-y-8">
      <div>
      <h4 class="h-12 w-auto text-2xl"> ${item.price}</h4>
      <i id="${item.id}" class="resetPackage fa fa-check absolute top-0 right-0 mt-3 mr-3 icon-size-7 hidden text-blue-500"></i>
        <p class="mt-2 text-sm font-medium uppercase">
        ${item.name}
        </p>
        <p class="my-2 text-xs">  
          ${item.description}
        </p>
        <p><small> ${item.time}</small></p>
      </div>        
    </div>
  </div>
    <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
  </label>
    `;
    packagesDiv.appendChild(package);
  });

}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Route to the landing page
function goTo() {
  window.location.href = 'my-vehicles.html';
}
// Route to the landing page
function getAddress(detailer) {
  let selectedAddress = [
    detailer.location.street.number + ' ' + detailer.location.street.name,
    detailer.location.city,
    detailer.location.state,
    detailer.location.country,
    detailer.location.postcode
  ];
  let address = _.join(selectedAddress, ', ');
  return address
}

// On booking form submission add a listener to the submit event
bookingForm.addEventListener('submit', function () {

  let selectedVehicle = document.querySelector('input[name="cars"]:checked').value;
  let selectedPackage = document.querySelector('input[name="packages"]:checked').value;
  let selectedDetailer = document.querySelector('input[name="detailers"]:checked').value;
  let selectedDate = document.getElementById('appointment').value;
  let selectedTime = document.querySelector('input[name="time"]:checked').value;

  //Find specific object using one of its properties.    
  let vehicleIndex = cars.findIndex((car => car.id == selectedVehicle));
  let package = packages.find(p => p.id == selectedPackage);
  let detailer = users.find(d => d.email == selectedDetailer);

  //Update object's properties.
  cars[vehicleIndex].appointmentDate = selectedDate;
  cars[vehicleIndex].appointmentTime = selectedTime;
  cars[vehicleIndex].appointmentAddress = getAddress(detailer);
  cars[vehicleIndex].detailer = detailer.name.first + ' ' + detailer.name.last;
  cars[vehicleIndex].detailerCell = detailer.cell;
  cars[vehicleIndex].detailerEmail = detailer.email;
  cars[vehicleIndex].package = package.name;
  cars[vehicleIndex].service = package.description;
  cars[vehicleIndex].cost = package.price;
  //Log object to console again.
  localStorage.setItem('cars', JSON.stringify([]));
  localStorage.setItem('cars', JSON.stringify(cars));
  goTo();
})

