export const getConversationUser = (users, email) => {
    const user = users.find((user) => user.email !== email);
    return user.name;
}