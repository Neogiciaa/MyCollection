const collection = [
    {
        "name": 'From',
        "director": 'John Griffin',
        "releaseYear": 2022,
        "picture": 'https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain',
        "genre": 'Horror',
        "description": "Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla ",
        "cast": ['Harold Perrineau', ' Eddie Cibrian'],
        "link": 'https://www.youtube.com/watch?v=CbIhYhrOJAg'
    },
    {
        "name": 'Stranger Things',
        "director": 'The Duffer Brothers',
        "releaseYear": 2016,
        "picture": 'https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain',
        "genre": 'Sci-Fi',
        "description": "Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla ",
        "cast": ['Winona Ryder', 'David Harbour', 'Finn Wolfhard']
    },
    {
        "name": 'Breaking Bad',
        "director": 'Vince Gilligan',
        "releaseYear": 2008,
        "picture": 'https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain',
        "genre": 'Crime',
        "description": "Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla ",
        "cast": ['Bryan Cranston', 'Aaron Paul', 'Anna Gunn']
    },
    {
        "name": 'Game of Thrones',
        "director": 'David Benioff, D.B. Weiss',
        "releaseYear": 2011,
        "picture": 'https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain',
        "genre": 'Fantasy',
        "description": "Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla ",
        "cast": ['Emilia Clarke', 'Kit Harington', 'Peter Dinklage']
    },
    {
        "name": 'The Mandalorian',
        "director": 'Jon Favreau',
        "releaseYear": 2019,
        "picture": 'https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain',
        "genre": 'Sci-Fi',
        "description": "Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla ",
        "cast": ['Pedro Pascal', 'Gina Carano', 'Carl Weathers']
    },
    {
        "name": 'The Witcher',
        "director": 'Lauren Schmidt Hissrich',
        "releaseYear": 2019,
        "picture": 'https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain',
        "genre": 'Action',
        "description": "Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla ",
        "cast": ['Henry Cavill', 'Anya Chalotra', 'Freya Allan']
    },
    {
        "name": 'Fargo',
        "director": 'Noah Hawley',
        "releaseYear": 2014,
        "picture": 'https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain',
        "genre": 'Thriller',
        "description": "Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla ",
        "cast": ['Billy Bob Thornton', 'Martin Freeman', 'Allison Tolman']
    },
    {
        "name": 'The Office',
        "director": 'Greg Daniels',
        "releaseYear": 2005,
        "picture": 'https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain',
        "genre": 'Mockumentary',
        "description": "Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla ",
        "cast": ['Steve Carell', 'Rainn Wilson', 'John Krasinski']
    },
    {
        "name": 'Black Mirror',
        "director": 'Charlie Brooker',
        "releaseYear": 2011,
        "picture": 'https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain',
        "genre": 'Sci-Fi',
        "description": "Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla ",
        "cast": ['Jon Hamm', 'Bryce Dallas Howard', 'Daniel Kaluuya']
    },
    {
        "name": 'The Crown',
        "director": 'Peter Morgan',
        "releaseYear": 2016,
        "picture": 'https://th.bing.com/th/id/OIP.tLotgCDtzgTdwJcTiXWRCwHaEK?rs=1&pid=ImgDetMain',
        "genre": 'History',
        "description": "Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla Lorem blabla ",
        "cast": ['Claire Foy', 'Olivia Colman', 'Matt Smith']
    }
];

const section = document.querySelector('section > ul');

for (let i=0; i < collection.length; i++) {
    const li = document.createElement('li');
    const card = document.createElement('article');
    card.classList.add('card');

    const pictureContainer = document.createElement('picture');
    card.appendChild(pictureContainer);

    const picture = document.createElement('img');
    picture.src = collection[i].picture;
    picture.alt = collection[i].name;
    pictureContainer.appendChild(picture);

    const genre = document.createElement('p');
    genre.textContent = collection[i].genre;
    genre.classList.add('genre');
    card.appendChild(genre);

    const h2 = document.createElement('h2');
    h2.textContent = collection[i].name;
    card.appendChild(h2);

    const director = document.createElement('p');
    director.textContent = collection[i].director;
    director.classList.add('director');
    card.appendChild(director);

    const releaseYear = document.createElement('p');
    releaseYear.textContent = collection[i].releaseYear;
    card.appendChild(releaseYear);

    const description = document.createElement('p');
    description.textContent = collection[i].description;
    description.classList.add('description');
    card.appendChild(description);

    const cast = document.createElement('p');
    cast.textContent = 'Cast: ' +  collection[i].cast;
    cast.classList.add('cast');
    card.appendChild(cast);

    const linkContainer = document.createElement('div');
    linkContainer.classList.add('link');
    card.appendChild(linkContainer);

    const link = document.createElement('a');
    link.textContent = "Trailer";
    link.href = collection[i].link;
    linkContainer.appendChild(link);

    li.appendChild(card);
    section.appendChild(li);
}
