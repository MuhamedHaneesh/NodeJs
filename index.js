var rect = require ('./rectangle');

function solveRect(l,b){
    console.log("Solving for rectangle with l="+l+ "and b="+b)
    if(l<=0 || b<=0){
        console.log("Rectangle Dimensions should be greater than 0: l="+l+"and b="+b)
    }
    else{
        console.log("The area of the rectangle is "+ rect.area(l,b))
        console.log("The perimeter of the rectangle is "+ rect.perimeter(l,b))
    }
}


solveRect(4,5)
solveRect(3,9)
solveRect(0,2)
solveRect(-2,5)