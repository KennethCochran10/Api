//let nobunaga = document.querySelector('form')
//let ohwow = document.querySelector('.Info')

const searchGhibli = async (Movies) => {


    try {
        const url = `https://ghibliapi.herokuapp.com/films/`;
        const res = await fetch(url);
        const Title = await res.json();
        console.log(Title)
        bostonTeaParty(Title)
    } catch (err) {
        console.log(err)
    }
};
searchGhibli();
function bostonTeaParty(Title) {
    let result = document.getElementById("Info").value
    document.getElementById("HelloCupcake").innerText = Title[result].title
    console.log(Title[result].title);

}

document.getElementById('Search')
    .addEventListener('click', searchGhibli
    )



//nobunaga.addEventListener('submit', searchGhibli)