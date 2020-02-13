export const findUserImage = (user, players) => {
    return players.find(player => player.name === user).image
}
