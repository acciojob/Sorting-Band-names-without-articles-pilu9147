//your code here
//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
const ul = document.querySelector('ul');
 
const removeAticles = () => {
    const res=touristSpots.map(element => {
        let indivialEle = element.split(' ');
        const tempRes = indivialEle.filter(item => {
            
            if (item == 'A' || item =='The' || item == 'An') {
                return;
            } else {
                return item;
            }
        })
        return tempRes.join(' ');
    })
    res.sort();
    for (let i = 0; i < res.length; i++){
        const li = document.createElement('li');
        li.innerText = res[i];
        ul.append(li);
    }
}
removeAticles();
