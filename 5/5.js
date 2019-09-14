//splitting time consuming tasks

//array is divided into chunks and processed
//this prevents running long tasks which hog the event loop


var data_arr = [1,4,6,34,57,342,65,34,45,67,456,32,56,45,34,65,56,42,1,34,54,456,567,567,4,234,34,23,245,546,67,54,56,42];

var processed = [];

function process_data(data){
    var chunk = data.splice(0,5);
    chunk.forEach((element) => {
        processed.push(element*2);
    });

    if(data.length > 0){

        
        setTimeout(function(){
            process_data(data);
        },0);


        //or process.nextTick can be used in node

        // process.nextTick(function(){
        //     process_data(data);
        // });
    }else{
        console.info('end !');
        console.table(processed);
        
    }
}

process_data(data_arr);
