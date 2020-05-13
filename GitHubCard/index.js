/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// function getMyData(user) {
//   axios
//     .get(`https://api.github.com/users/${user}`) //literal `....${}`
//     .then((res) => {
//       // deal with the response data in here
//       console.log(res.data);
//       let user = res.data;
//       const element = createCard(user);
//       cards.appendChild(element);
//     })

//     .catch((err) => {
//       // deal with the error in here
//       // console.log('You hit an error: ', err);
//     });
// }

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
// const cards = document.querySelector(".cards");
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [
  "PannyLewis",
  "hopeful89",
  "heedu40",
  "Codeblack32",
  "jduncan1980",
  "josiahroa18",
];

// followersArray.forEach((followers) => {
//   getMyData(followers);
// });

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
const cards = document.querySelector(".cards");

function getMyData(user) {
  axios
    .get(`https://api.github.com/users/${user}`) //literal `....${}`
    .then((res) => {
      // deal with the response data in here
      console.log(res.data);
      let user = res.data;
      const element = createCard(user);
      cards.appendChild(element);
    })

    .catch((err) => {
      // deal with the error in here
      // console.log('You hit an error: ', err);
    });
}

followersArray.forEach((followers) => {
  getMyData(followers);
});

const createCard = (user) => {
  // set html tags
  const card = document.createElement("div");
  const personImg = document.createElement("img");
  const cardInfo = document.createElement("div");
  const personName = document.createElement("h3");
  const personUserName = document.createElement("p");
  const personLocation = document.createElement("p");
  const personProfile = document.createElement("p");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  //set classlist
  card.classList.add("card");
  cardInfo.classList.add("card-info");
  personName.classList.add("name");
  personUserName.classList.add("username");

  //append
  card.appendChild(personImg);
  card.appendChild(cardInfo);
  cardInfo.appendChild(personName);
  cardInfo.appendChild(personUserName);
  cardInfo.appendChild(personLocation);
  cardInfo.appendChild(personProfile);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  //add text into the element
  personImg.src = user.avatar_url;
  personName.textContent = user.login;
  personLocation.textContent = user.login;
  personProfile.textContent = user.html_url;
  followers.textContent = user.followers;
  following.textContent = user.following;
  bio.textContent = user.bio;

  // last step
  return card;
};

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
