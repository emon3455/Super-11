
const addToDB=(id)=>{

    let players = {}

    const newCart = getPlayer();

    if(newCart){      
        players=[...newCart, id]
        localStorage.setItem("players",JSON.stringify(players))
    }
    else{
        players.push(id)
        localStorage.setItem("players",JSON.stringify(players))
    }
}

const getPlayer=()=>{
    let cart = []
    const newCart = localStorage.getItem("players");
    if(newCart){
        cart = JSON.parse(newCart);
        return cart;
    }
    else{
        return cart;
    }
}

export {
    addToDB,
    getPlayer
}