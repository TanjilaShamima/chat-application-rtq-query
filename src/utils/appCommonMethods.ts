export const getConversationUser = (users, email) => {
    const user = users.find((user) => user.email !== email);
    return user.name;
}

export const getConversationUserDetails = (sender, receiver, email) => {
    let user = '';
    if (sender.email !== email) {
        user = sender;
    } else {
        user = receiver;
    }

    return user;
}