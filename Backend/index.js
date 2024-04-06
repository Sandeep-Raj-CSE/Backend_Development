import express from 'express';
const app=express()


const port=3000;

app.get('/login',(req,res)=> {
    res.send('Hello EXpress node js')

})


app.get('/api/jokes',(req,res) => {
    const jokes=
    [
        { 
            "id":"1",
          "joke": "Why don't scientists trust atoms? Because they make up everything!"
        },
        {
            "id":"2",
          "joke": "I told my wife she was drawing her eyebrows too high. She looked surprised."

        },
        {
            "id":"3",
          "joke": "Why couldn't the bicycle stand up by itself? It was two-tired."
        },
        {
            "id":"4",
          "joke": "Parallel lines have so much in common. It's a shame they'll never meet."
        },
        {
            "id":"5",
          "joke": "I'm reading a book on anti-gravity. It's impossible to put down!"
        }
    ]
      res.send(jokes);
})



app.listen(port, ()=> {
    console.log(`Hey your command listen at ${port}`)
})


