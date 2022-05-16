const stockResponse = {
    0: {
        station_id: 1,
        id: 1,
        name: "essence",
        total: 30
    },
    1: {
        station_id: 1,
        id: 2,
        name: "mazout",
        total: 35
    },
    2: {
        station_id: 2,
        id: 3,
        name: "kerozen",
        total: 35
    },
    3: {
        station_id: 1,
        id: 4,
        name: "mazout",
        total: 35
    }
}

const reordonne = ({object, groupby}) => {
    var occurence = {};
    var data = [];
    if(object instanceof Object){
        const temp = Object.values(object);
        for(let i = 0; i < temp.length; i++){
            occurence[temp[i][groupby]] = (occurence[temp[i][groupby]] || 0) + 1;
        }

        Object.keys(occurence).forEach((elem, index) => {
            const _ = [];
            temp.forEach((em, index) => {
                if(em[groupby] === parseInt(elem)){
                    _.push(em)
                };
            });
            data.push({
                station_id : elem,
                product: _
            });
        });
        return data;
    }else{
        // ie. l'obejet passe en param. n'est pas un obeject
        return [];
    }
}

const resultat = reordonne({object: stockResponse, groupby: "station_id"});
console.dir(resultat);