export const findUserImage = (user, players) => {
    if (players.length) {
        return players.find(player => player.name === user).image
    }
}
