const collection = [
    {
        "picture": 'https://cdn.shopify.com/s/files/1/0265/6157/7032/files/Bulldog_inglese_361c070b-52b3-4d87-a09d-87804a7c4e75.jpg?v=1699942383',
        "name": 'English Bulldogs',
        "group": 'Non-Sporting',
        "height": '12 to 16 inches',
        "weight": '50 to 54 pounds',
        "description": "English Bulldogs are smart, loyal and gentle. The bulldogs have a sturdy build and they are good with children as well as other pets. You should keep in mind that they need some extra care in their teeth and gum area due to their extra strong jawline.",
        "energyLevel": 'Medium',
        "link": 'https://en.wikipedia.org/wiki/Bulldog'
    },
    {
        "picture": 'https://cdn.shopify.com/s/files/1/0265/6157/7032/files/German_Shepherd_52c36c42-6c71-4fd3-b09e-6baeabc32569.png?v=1699942437',
        "name": 'German Shepherd',
        "group": 'Herding',
        "height": '24 to 26 inches',
        "weight": '65 to 90 pounds',
        "description": "German Shepherds can make a wonderful companion. They are loyal, smart, gentle, and royal. They are also easy to train and very adaptive. They are also very alert which makes them an excellent choice for women living alone.",
        "energyLevel": 'High',
        "link": 'https://en.wikipedia.org/wiki/German_Shepherd'
    },
    {
        "picture": 'https://cdn.shopify.com/s/files/1/0265/6157/7032/files/labradoodle-dog-breed.jpg?v=1699942622',
        "name": 'Labradoodle',
        "group": 'NA',
        "height": '21 to 24 inches',
        "weight": '50 to 65 pounds',
        "description": "A labradoodle is a crossbreed between the Labrador Retriever and Toy Poodle. They are lively, don't bark much, hypoallergenic and need a lot of space to play. They make an ideal family dog.",
        "energyLevel": 'High',
        "link": 'https://en.wikipedia.org/wiki/Labradoodle'
    },
    {
        "picture": 'https://cdn.shopify.com/s/files/1/0265/6157/7032/files/golden-retriever_Shutterstock.jpg?v=1699941173',
        "name": 'Golden Retriever',
        "group": 'Sporting',
        "height": '23 to 24 inches',
        "weight": '65 to 75 pounds',
        "description": "Golden Retrievers are a favorite among pet parents. They are intelligent, adaptive, sweet towards children and other pets, outgoing, and loyal. Also, they can be as active as swimming with you in the pool and as lazy as cuddling on the sofa. They are also easy to train and patient.",
        "energyLevel": 'High',
        "link": 'https://en.wikipedia.org/wiki/Golden_Retriever'
    },
    {
        "picture": 'https://cdn.shopify.com/s/files/1/0265/6157/7032/files/Doberman.jpg?v=1699942745',
        "name": 'Doberman',
        "group": 'Working',
        "height": '27 to 28 inches',
        "weight": '60 to 70 pounds',
        "description": "Doberman was originally bred to be a guard or protection dog. They are strong, loyal, and fearless. If you are a woman living alone, Doberman can be an excellent choice. As fearless as they are, they also make the sweetest pup to their parents. Also, if you have a Doberman at home, any intruder will think twice before breaking in, just from their reputation.",
        "energyLevel": 'High',
        "link": 'https://en.wikipedia.org/wiki/Doberman'
    },
    {
        "picture": 'https://cdn.shopify.com/s/files/1/0265/6157/7032/files/Rottweiler_169269e3-b94e-4b34-8e17-dfbde7485865.jpg?v=1699942789',
        "name": 'Rottweiler',
        "group": 'Working',
        "height": '24 to 27 inches',
        "weight": '110 to 132 pounds',
        "description": "Rottweiler has a gigantic and menacing appearance. They are protection dogs and extremely faithful to their parents. However, they also have a sweet side and luckily that is exclusively for his family. Considering their size, they might not be comfortable living in small apartments.",
        "energyLevel": 'High',
        "link": 'https://en.wikipedia.org/wiki/Rottweiler'
    },
    {
        "picture": 'https://cdn.shopify.com/s/files/1/0265/6157/7032/files/Akita_46f60c08-42cf-4ee8-b6f6-52e5f7c17d91.jpg?v=1699942860',
        "name": 'Akita Inu',
        "group": 'Hunting',
        "height": '24 to 28 inches',
        "weight": '80 to 110 pounds',
        "description": "Akita, a native dog breed of Japan, is well known for their loyalty. They are strong and have a strong sense of protectiveness towards their family. They are highly energetic and need lots of attention and exercise regularly. They are best for owners who have a yard or lawn to let them play and spend time.",
        "energyLevel": 'High',
        "link": 'https://en.wikipedia.org/wiki/Akita_Inu'
    },
    {
        "picture": 'https://cdn.shopify.com/s/files/1/0265/6157/7032/files/Great_Dane-1_36bb3fcc-ef8f-4bef-9806-b6f3aff56bfc.jpg?v=1699942906',
        "name": 'Great Dane',
        "group": 'Working',
        "height": '42.5 to 49.5 inches',
        "weight": '110 to 175 pounds',
        "description": "Great Danes are gigantic and their piercing eyes can intimidate any stranger. They are also very affectionate and amicable but strangers do not need to know that. Their commanding presence is enough to keep troubles away from you. Also, if needed, they can be aggressive and dreadful.",
        "energyLevel": 'Low',
        "link": 'https://en.wikipedia.org/wiki/Great_Dane'
    },
    {
        "picture": 'https://cdn.shopify.com/s/files/1/0265/6157/7032/files/Cavalier_King_charles_spaniels_6a3c6834-8ed0-4b13-80ca-62f1d38f3d8d.webp?v=1699942953',
        "name": 'Cavalier King Charles Spaniel',
        "group": 'Toy',
        "height": '12 to 13 inches',
        "weight": '13 to 18 pounds',
        "description": "Cavalier King Charles Spaniel is the largest among the toy dog breeds. Their appearance may deceive you into thinking they are delicate, but they are actually very sporty and join you in a hike. They are intelligent, friendly and loyal. They also make great therapy dogs.",
        "energyLevel": 'Medium',
        "link": 'https://en.wikipedia.org/wiki/Cavalier_King_Charles_Spaniel'
    },
    {
        "picture": 'https://cdn.shopify.com/s/files/1/0265/6157/7032/files/American_Staffordshire_Terrier.webp?v=1699943072',
        "name": 'American Staffordshire Terrier',
        "group": 'Terrier',
        "height": '17 to 19 inches',
        "weight": '40 to 70 pounds',
        "description": "If you are looking for a low-shedding pet who is also a sweetheart, an American Staffordshire Terrier should come to your home. They are muscular and require proper training from an early age. They are also low maintenance.",
        "energyLevel": 'Medium',
        "link": 'https://en.wikipedia.org/wiki/American_Staffordshire_Terrier'
    },
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

    const group = document.createElement('p');
    group.textContent = collection[i].group;
    group.classList.add('group');
    card.appendChild(group);

    const h2 = document.createElement('h2');
    h2.textContent = collection[i].name;
    card.appendChild(h2);

    const height = document.createElement('p');
    height.textContent = 'Height: ' + collection[i].height;
    height.classList.add('height');
    card.appendChild(height);

    const weight = document.createElement('p');
    weight.textContent = 'Weight: ' + collection[i].weight;
    weight.classList.add('weight');
    card.appendChild(weight);

    const description = document.createElement('p');
    description.textContent = collection[i].description;
    description.classList.add('description');
    card.appendChild(description);

    const energyLevel = document.createElement('p');
    energyLevel.textContent = 'Energy level: ' +  collection[i].energyLevel;
    energyLevel.classList.add('energyLevel');
    card.appendChild(energyLevel);

    const link = document.createElement('a');
    link.href = collection[i].link;
    link.textContent = 'See more';
    link.classList.add('link');
    card.appendChild(link);

    li.appendChild(card);
    section.appendChild(li);
}

window.onload = function() {
    const audio = document.querySelector('audio');
    audio.volume = 0.01;
};

