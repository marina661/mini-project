function drawUsers(users) {
    const container = document.createElement('div');
    container.className = 'container users';

    for (const user of users) {
        const card = document.createElement('div');
            card.className = 'card';

            const header = document.createElement('div');
                header.className = 'header';
                header.innerHTML = 'user ' + user.id;
            card.appendChild(header);

            const body = document.createElement('div');
                body.className = 'body';

                const row = document.createElement('div');
                    row.className = 'row';

                    const value = document.createElement('div');
                        value.className = 'value';
                        value.innerHTML = user.name;
                    row.appendChild(value);

                body.appendChild(row);

                const footer = document.createElement('div');
                    footer.className = 'footer';

                    const link = document.createElement('a');
                        link.className = 'button';
                        link.href = './user-details.html?id=' + user.id;
                        link.innerHTML = 'more...';
                    footer.appendChild(link);

                body.appendChild(footer);

            card.appendChild(body);

        container.appendChild(card)
    }

    document.body.appendChild(container);
}

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(drawUsers);

