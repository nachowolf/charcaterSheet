module.exports = function(pool){

    async function allPurse(){
        try{
         let items = await pool.query(`select * from purse`);
         return items.rows
        }
        catch(err){
            console.error(err)
        }
    }



    return{
        allPurse
    }
}