let Product

function onInit()
{
    const user = localStorage.getItem("username")
    document.querySelector("header").innerText = "Hello "+user
    Product = JSON.parse(localStorage.getItem("product"))
    if(Product)
        {
            document.getElementById('name').value = Product.name
            document.getElementById('price').value = Product.price
        }
}

async function submit(){
    try{
        const name = document.getElementById('name').value
        const price = document.getElementById('price').value
        const product = {name,price}
        if(!Product){
            const resp = await fetch(`http://localhost:8000/products/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })
        }
        else{
            console.log(Product,product,`http://localhost:8000/products/${Product._id}`)
            const resp = await fetch(`http://localhost:8000/products/${Product._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(product)
            })
            localStorage.removeItem("product")
        }
        window.location.href = "./products.html"
    } catch (err) {
        console.error('There was a problem with the fetch operation:', err);
    }
}

function back(){
    localStorage.removeItem("product")
    window.location.href = "./products.html"
}