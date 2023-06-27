
const input = document.getElementsByClassName('in')[0];
const cardimgtop = document.getElementsByClassName('card-img-top');


async function searchButton() {
  const v = input.value
  
 
  try {
    if (input.value) {
      const res = await fetch('/s', {
        method: 'POST',
        body: JSON.stringify({ data: v}),
        headers: {
          'Content-Type': 'application/json'
        }




      })
      const data = await res.json()
      const st = JSON.parse(data)
      // console.log(Object.values(st)[0]['name'])
const values = Object.values(st)[0]
const values1 = Object.values(st)[1]
     console.log(Object.values(st))
      const country= document.getElementsByClassName('card-title');
      [...country].forEach((e) => {
e.innerHTML =`${values['name']} (${values['country']}) `
      });
      [...cardimgtop ].forEach((c) => {
        c.src =  values1['condition']['icon']
      });
      const cardtext =document.getElementsByClassName('card-text');
      const temp =document.getElementsByClassName('aa')[0];
      Array.from(cardtext).forEach((c) => {
        c.innerHTML = `Time: ${values['localtime']}`
      })
      temp.innerHTML = values1['temp_c']+ " " + 'deg C'
     

    

    } else {
      alert('Write somethings')
    }


  } catch (er) {
    console.log(er)
  }
}