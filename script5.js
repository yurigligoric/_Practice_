var expect = (val) =>{
    return {
        tobe : (valuetocompare) => {
            if(val === valuetocompare)
            {
                return console.log("tobe Val is equal") 
            } else {
                return console.log("tobe Value is not equal");
            }
        }, 
        nottobe : (valuetocompare) => {
            if (val !== valuetocompare){
                return console.log("nottobe Value is not equal");

            }else {
                return console.log("nottobe Value is equal")

            }


        }


    }
}