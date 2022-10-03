import axios from 'axios';
import connectDB from '../db/connectdb';
import dotenv from 'dotenv';

import models from '../models';

dotenv.config();

// const myApiKey = process.env.MY_STEAM_API_KEY;
// const steamUserID = process.env.MY_STEAM_USER_ID;
const mongodb_uri = process.env.MONGODB_URL as string;

// const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${myApiKey}&steamid=${steamUserID}&format=json`;

// axios.get(url)
//   .then( response => {
//     return response.data.response;
//   })
//   .then( data => {
//     console.log(data.games);
//   })

async function getAllSteamGames() {
  const url = 'https://api.steampowered.com/ISteamApps/GetAppList/v2/';
  const response = await axios(url);
  const gamesWithName = response.data.applist.apps.filter( (obj: any) => {
    return obj.name !== '';
  });
  return gamesWithName;
}

// async function getOwnedGames() {
//   const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${myApiKey}&steamid=${steamUserID}&format=json`;
//   const response = await axios(url);
//   const data = response.data.response;
//   console.log(data);
// }

( async () => {
  try {
    await connectDB(mongodb_uri);
    const allGames = await getAllSteamGames();
    for(const game of allGames) {
      const {appid, name} = game;
      await models.GameDetail.create({title: name, app_id: appid});
    }
    console.log('Success');
    process.exit(0);
  } catch(error) {
    console.log(error);
    console.log('uh oh we in trouble');
    process.exit(1);
  }
  // await getAllSteamGames();
  // await getOwnedGames();
})();
