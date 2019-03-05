module.exports = function (character) {

    async function home(req, res) {
        try{
        let purse = await character.allPurse()
        res.render(
            'home',{
                purse
            }
        )
        }
        catch(err){
            console.error(err)
        }
    }

    async function characterStats(req, res) {
        try{
        let purse = await character.allPurse()
        res.render(
            'character-stats'
        )
        }
        catch(err){
            console.error(err)
        }
    }

    async function inventory(req, res) {
        try{
        let purse = await character.allPurse()
        res.render(
            'inventory',{
                purse
            }
        )
        }
        catch(err){
            console.error(err)
        }
    }


    async function depositCoins(req, res) {
        try{
        let coin = req.body.coins;
        let amount = req.body.amount;
        let deposit = await character.depositCoinsInPurse();
        res.redirect("/")
        }
        catch(err){
            console.error(err)
        }
    }

    async function withdrawCoins(req, res) {
        try{
        let purse = await character.allPurse()
        res.redirect("/")
        }
        catch(err){
            console.error(err)
        }
    }

    return {
        home,
        characterStats,
        inventory,
        depositCoins,
        withdrawCoins
    }
}