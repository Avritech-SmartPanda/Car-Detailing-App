
const detailers = document.getElementById('detailers');
const cars = JSON.parse(localStorage.getItem('cars')) || [];
const myVehiclesDiv = document.getElementById('myVehicles');
const packagesDiv = document.getElementById("packages");

const bookingForm = document.getElementById('booking');






const packages = [
  { name: 'The Basic Wash', price: '$16', description: 'Value wash,Exterior wash, Spot free rinse, Super dry.', time: '45 min' },
  { name: 'Tire & Wheel', price: '$19', description: 'The basic plus the following, Double wheel cleaner, Tire shine, Rim bright', time: '45 min' },
  { name: 'Protect & Shine', price: '$23', description: 'Basic + Tire & Wheel, Lava bath, Triple foam, Sealer wax', time: '45 min' },
  { name: 'Platinum', price: '$26', description: 'Includes everything, Rain X, Rain X for wheels, Air fragrance', time: '45 min' }
]

window.addEventListener('load', () => {
  renderDetailers();
  renderCarList();
  renderPackages();
});


function renderDetailers() {
  fetch('https://randomuser.me/api/?results=4').then(res => res.json())
    .then(data => {
      data.results.forEach(user => {
        const item = document.createElement('div');
        item.classList.add('relative', 'w-56', 'p-0');
        item.innerHTML = `
        <input type="radio" name="detailers" value="${item}" class="sr-only peer" id="${user.id.value}">
        <label for="${user.id.value}"
          class="h-56 hover:bg-blue-500x hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:ring-4  peer-checked:ring-blue-500    group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium  hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
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

const renderCarList = () => {
  cars.forEach(car => {
    const item = document.createElement('div');
    item.classList.add('relative', 'w-56');
    item.innerHTML = ` 
  <input type="radio" name="cars" value="${car}" class="sr-only peer" id="${car.id}">
  <label for="${car.id}"
    class="h-32 hover:bg-blue-500x hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:ring-4  peer-checked:ring-blue-500    group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
    <div class="flex flex-col justify-center">
      <div class="flex flex-auto justify-center">
        <img src="./images/${car.type}.png" alt="" class="w-28" />
      </div>
  
      <div class="flex flex-col">
      <h4 class="flex  justify-center text-sm font-semibold ">
      ${capitalizeFirstLetter(car.brand)} ${capitalizeFirstLetter(car.model)}
      </h4>
      <div
        class="w-full flex justify-center  text-sm font-medium   mt-2">
        ${capitalizeFirstLetter(car.color)} - ${capitalizeFirstLetter(car.plate)}
      </div>
    </div>




    </div>


    <div class="absolute -inset-px rounded-md pointer-events-none" aria-hidden="true"></div>
  </label>
    `;
    myVehiclesDiv.appendChild(item);
  })
}

const renderPackages = () => {
  packages.forEach(item => {
    const package = document.createElement('div');
    package.classList.add('relative', 'w-56');
    package.innerHTML = ` 
  <input type="radio" name="packages" value="${item}" class="sr-only peer" id="${item.name}">
  <label for="${item.name}"
    class="h-64 hover:border-transparent hover:shadow-lg group block rounded-lg border border-gray-200 peer-checked:bg-blue-500 peer-checked:text-white peer-checked:ring-4  peer-checked:ring-blue-500    group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium  hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
    <div class="min-h-full flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8 text-center">
      <div>
      <h4 class=" h-12 w-auto text-4xl " > ${item.price}</h4>
        <p class="mt-6 text-center text-sm font-extrabold uppercase">
        ${item.name}
        </p>
        <p class="mt-4 text-center text-xs">  
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
  })



}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Route to the landing page
function goTo() {
  window.location.href = 'landing.html';
}

// On booking form submission.
bookingForm.onsubmit = function () {
  let selectedVehicle = document.querySelector('input[name="cars"]:checked').value;
  let selectedPackage = document.querySelector('input[name="packages"]:checked').value;
  let selectedDetailer = document.querySelector('input[name="detailers"]:checked').value;
  let selectedDate = document.getElementById('appointment').value;
  let selectedTime = document.querySelector('input[name="time"]:checked').value;
console.log(selectedVehicle);
console.log(selectedPackage);
console.log(selectedDetailer);
console.log(selectedDate);
console.log(selectedTime);




debugger
}







































// function filterData(searchTerm) {
// 	listItems.forEach(item => {
// 		if(item.innerHTML.toLowerCase().includes(searchTerm.toLowerCase())) {
// 			item.classList.remove('hidden');
// 		} else {
// 			item.classList.add('hidden');
// 		}
// 	});
// }



// // SOCIAL PANEL JS
// const floating_btn = document.querySelector('.floating-btn');
// const close_btn = document.querySelector('.close-btn');
// const social_panel_container = document.querySelector('.social-panel-container');

// floating_btn.addEventListener('click', () => {
// 	social_panel_container.classList.toggle('visible')
// });

// close_btn.addEventListener('click', () => {
// 	social_panel_container.classList.remove('visible')
// });



