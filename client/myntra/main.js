
const API_URL = 'http://localhost:8000'; // Update to your backend URL

document.addEventListener('DOMContentLoaded', function() {
    fetchClothes();
});

document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value;
    if (query.length > 3) {
        searchClothes(query);
    } 
});

function fetchClothes() {
    axios.get(`${API_URL}/clothes`)
        .then(response => {
            displayClothes(response.data);
        })
        .catch(error => {
            console.error('Error fetching clothes:', error);
        });
}

function searchClothes(query) {
    axios.get(`${API_URL}/search?query=${query}`)
        .then(response => {
            displayClothes(response.data);
        })
        .catch(error => {
            console.error('Error searching clothes:', error);
        });
}


function displayClothes(clothes) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    clothes.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('bg-white', 'p-4', 'rounded', 'shadow');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="w-full h-[300px] object-cover rounded mb-2">
            <h2 class="text-xl font-bold">${item.name}</h2>
            <p class="text-gray-600">₹${item.price}</p>
        `;
        resultsDiv.appendChild(itemDiv);
    });
}

const category = document.querySelectorAll('li a');

category.forEach((a) => {
    a.addEventListener('click', () => {
        let query = "";

        if (a.textContent.toLowerCase() === "women") {
            query = "women";
        } else if (a.textContent.toLowerCase() === "kids") {
            query = "kids";
        } else {
            query = "men";
        }
        axios.get(`${API_URL}/search?query=${query}`)
            .then(response => {
                displayClothes(response.data);
            })
            .catch(error => {
                console.error('Error searching clothes:', error);
            });
    });
});
