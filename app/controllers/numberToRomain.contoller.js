// create promise function with
const function_convert = (number) => {
    // init romain data
    const initialNumber = number
    return new Promise((resolve, reject) => {
        // init romain data
        let data = {
            C:  100,
            XC: 90,
            L:  50,
            XL: 40,
            X:  10,
            IX: 9,
            V:  5,
            IV: 4,
            I:  1,
        };
        if (typeof number === 'number' && number >0 && number <=100) {
            let result = '';
            for(item in data) {
                while ( number >= data[item] ) {
                    result += item;
                    number -= data[item];
                }
            }
            resolve( {
                error : false,
                result:result,
                number : initialNumber,
                message : "successful conversion"
            })
        } else {
            resolve({
                error : true,
                result:null,
                message : "Some error occurred!. Check if your number is between 1 and 100"
            })
        }
    });
};

exports.numberToRomain = (req, res) => {
    // convert string to int
    function_convert(parseInt(req.body.number)).then((value) => {
        res.status(value.error ? 400 : 200).send(value);
    }).catch(()=>{
        res.status(400).send({
            error : true,
            result:null,
            message : "Some error occurred!. Please try again"
        });
    });
};

