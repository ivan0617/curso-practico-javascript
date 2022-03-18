const coupons = [
    {name: "ichi", discount: 10},
    {name: "ni", discount: 20},
    {name: "san", discount: 30},
    {name: "yon", discount: 40},
    {name: "go", discount: 50},
    {name: "roku", discount: 60},
    {name: "nana", discount: 70},
    {name: "hachi", discount: 80},
    {name: "kyuu", discount: 90},
    {name: "juu", discount: 100}
];

function  calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * (porcentajePrecioConDescuento)) / 100;

    return precioConDescuento;
}

function getOptionCcoupon() {
    const option = document.getElementById("optionCoupon").value;
    if(option === "Si") {
        document.getElementById("containerCoupon").innerHTML = '<div id="containerCoupon"><input type="text" id="inputCoupon" placeholder="Codigo del cupon"></div>';
    } else{
        document.getElementById("containerCoupon").innerHTML = '<div id="containerCoupon"></div>';
    }
}

function buttonPriceDiscount(){
    const optionsCoupon = document.getElementById("optionCoupon").value;
    const result = document.getElementById("resultPrice");
    const price = document.getElementById("inputPrice").valueAsNumber;
    const discount = document.getElementById("inputDiscount").valueAsNumber;
    var precioConDesceunto;

    if(optionsCoupon === "Si") {
        const couponValue = document.getElementById("inputCoupon").value;
        const isCouponValueValid = function(coupon) {
            return coupon.name === couponValue;
        };
        const userCoupon = coupons.find(isCouponValueValid);
        if (!userCoupon) {
            alert("El cupón " + couponValue + " no es válido");
            result.innerText = "El precio con descuento son: $";
            return 0;
        } else {
            precioConDesceunto = calcularPrecioConDescuento(price, discount + userCoupon.discount);
        }
    } else {
        precioConDesceunto = calcularPrecioConDescuento(price, discount);
    }
    
    result.innerText = "El precio con descuento son: $" + precioConDesceunto;
}

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/