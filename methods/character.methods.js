module.exports = function(characterDb, get){

    async function allPurse(){
        try{
        let purse = await characterDb.allPurse();
        let coins = purse.map(purse => purse)
        console.log("delete me");
        return coins
        }
        catch(err){
            console.error(err)
        }
    }

    async function depositCoinsInPurse(coin, amount){
        try{
            let coinId = await characterDb.coidID(coin);
        }
        catch(err){
            console.error(err)
        }
    }

    return{
        allPurse
    }
}
