

function onInit()
{
    const user = localStorage.getItem("username")
    document.querySelector("header").innerText = "Hello "+user
    getAllProducts()
}

async function getAllProducts(){

    const token = localStorage.getItem("token")
    const resp = await fetch(`http://localhost:8000/products/`,{ headers: { token: token }})
    const {products} = await resp.json()

    const table = document.getElementById("tbl")

    if(products && products.length){
        products.forEach((product) => {
            // creating a new row 
            const newTr = document.createElement("tr") // <tr></tr>



            // create new cells
            const tdName = document.createElement("td") // <td></td>
            const tdPrice = document.createElement("td") // <td></td> 
            const tdBtns = document.createElement("td") // <td></td>


            //  add data to cells
            tdName.innerText = product.name
            tdPrice.innerText = product.price
            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "Delete";
            deleteBtn.onclick = (event) => {
                event.preventDefault()
                deleteProduct(product._id)
            }

            const updateBtn = document.createElement("button");
            updateBtn.innerText = "Update";
            updateBtn.onclick = () => updateProduct(product);

            tdBtns.appendChild(deleteBtn);
            tdBtns.appendChild(updateBtn);
            
            newTr.appendChild(tdName)
            newTr.appendChild(tdPrice)
            newTr.appendChild(tdBtns)


            table.appendChild(newTr)
        })

    }
}

function addProduct(){
    window.location.href = "./addUpdate.html"
}

async function deleteProduct(id)
{
    try{
        const resp = await fetch(`http://localhost:8000/products/${id}`, {
            method: "DELETE",
        })
        const ans = await resp.json()
        window.location.reload()
    }
    catch(err){
        console.log(err)
    }
}

function updateProduct(product)
{
   localStorage.setItem('product',JSON.stringify(product))
    window.location.href = "./addUpdate.html"
}