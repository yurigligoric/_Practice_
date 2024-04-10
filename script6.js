const sales = {
    John: 20, 
    Salley: 30, 
    Mike: 40, 
    Rodman: 50, 
    Starks: 22, 
}

const personSales = (obj)=> {
    let totalSales = 0
    for(let sales of Object.values(obj) ){
        totalSales += sales
    }

    return totalSales;

}

const list = Object.keys(sales)

console.log(`total sales is ${personSales(sales)} alright!!! aja aja `)




