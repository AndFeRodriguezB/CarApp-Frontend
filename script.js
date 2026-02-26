const API_URL = "https://carapp-backend-34v5.onrender.com/api/v1"
let editingId = null;

function showMessage(text, type){
    const messageDiv = document.getElementById("message");

    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = "block";

    setTimeout(() =>{
        messageDiv.style.display = "none";
    }, 3000);
}

async function loadCars(){
    try{
        const response = await fetch(`${API_URL}/api/v1/cars`);
        const data = await response.json();

        const tableBody = document.getElementById("carTableBody");
        tableBody.innerHTML="";

        data.forEach(car => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${car.id}</td>
                <td>${car.marca}</td>
                <td>${car.localidad}</td>
                <td>${car.solicitante}</td>
                <td>
                    <button class="edit" onclick="editCar(${car.id}, '${car.marca}', '${car.localidad}', '${car.solicitante}')">Editar</button>
                    <button class="delete" onclick="deleteCar(${car.id})">Eliminar</button>
                </td>
            `;
            
            tableBody.appendChild(row);
        });
    } catch (error){
        console.error("Error cargando carros", error);
    }   
}

async function deleteCar(id){
    const confirmDelete = confirm("Esta seguro de que desea eliminar el registro?");
    if (!confirmDelete) return;
    try {
        const response = await fetch(`${API_URL}/api/v1/cars/${id}`,{
            method: "DELETE"
        });

        showMessage("Registro eliminado correctamente", "success")

        if (!response.ok){
            throw new Error("Error al eliminar");
        }
        loadCars();
    } catch(error){
        console.error("Error eliminando", error);
    }
}

function editCar(id, marca, localidad, solicitante){
    document.getElementById("marca").value = marca;
    document.getElementById("localidad").value = localidad;
    document.getElementById("solicitante").value = solicitante;

    editingId = id;

    document.querySelector("button[type='submit'").textContent = "Actualizar";
}

const form = document.getElementById("carForm");
form.addEventListener("submit", async function(event){
    event.preventDefault();

    const submitButton = form.querySelector("button[type='submit']");
    submitButton.disabled = true;
    submitButton.textContent = "Guardando..."

    const marca = document.getElementById("marca").value;
    const localidad = document.getElementById("localidad").value;
    const solicitante = document.getElementById("solicitante").value;

    const newCar = {
        marca: marca,
        localidad: localidad,
        solicitante: solicitante
    };

    try{
        if (editingId){
            await fetch(`${API_URL}/api/v1/cars/${editingId}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newCar)
            });

            showMessage("Registro actualizado correctamente", "success");

            editingId = null;
            document.querySelector("button[type='submit']").textContent = "Agregar";
        } else{
            await fetch(`${API_URL}/api/v1/cars`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newCar)
            });

            showMessage("Registro creado correctamente", "success")
        }
        form.reset();
        loadCars();
        submitButton.disabled = false;
        submitButton.textContent = "Agregar";
    } catch (error) {
        console.error("Error:", error);
        showMessage("Ocurrió un error", "error")

        submitButton.disabled = false;
        submitButton.textContent = "Agregar";
    }
});


document.addEventListener("DOMContentLoaded", loadCars);