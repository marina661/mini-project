function drawRow(caption, value) {
    const row = document.createElement('div');
    row.className = 'row';

    const captionEl = document.createElement('div');
    captionEl.className = 'caption';
    captionEl.innerHTML = caption;
    row.appendChild(captionEl);

    const valueEl = document.createElement('div');
    valueEl.className = 'value';
    valueEl.innerHTML = value;
    row.appendChild(valueEl);

    return row;
}

function drawUserDetails(user) {

    const container = document.createElement('div');
    container.className = 'container user-details';

        const card = document.createElement('div');
        card.className = 'card';

            const header = document.createElement('div');
            header.className = 'header';
            header.innerHTML = 'user ' + user.id;
            card.appendChild(header);

            const body = document.createElement('div');
            body.className = 'body';

                body.appendChild(drawRow('name', user.name));
                body.appendChild(drawRow('username', user.username));
                body.appendChild(drawRow('email', user.email));
                body.appendChild(drawRow('phone', user.phone));
                body.appendChild(drawRow('website', user.website));

                const header1 = document.createElement('div');
                header1.className = 'header';
                header1.innerHTML = 'address';
                body.appendChild(header1);

                body.appendChild(drawRow('street', user.address.street));
                body.appendChild(drawRow('suite', user.address.suite));
                body.appendChild(drawRow('city', user.address.city));
                body.appendChild(drawRow('zipcode', user.address.zipcode));
                body.appendChild(drawRow('GEO lat/lng', user.address.geo.lat + ' / ' + user.address.geo.lng));

                const header2 = document.createElement('div');
                header2.className = 'header';
                header2.innerHTML = 'company';
                body.appendChild(header2);

                body.appendChild(drawRow('name', user.company.name));
                body.appendChild(drawRow('catch phrase', user.company.catchPhrase));
                body.appendChild(drawRow('bs', user.company.bs));

            card.appendChild(body);

        container.appendChild(card);

    document.body.appendChild(container);

    const button = document.createElement('button');
    button.id = 'posts-of-user';
    button.innerText = 'post of current user';
    button.onclick = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
            .then(response => response.json())
            .then(drawPosts);
    }
    document.body.append(button);
}

function drawPosts(posts) {
    const container = document.createElement('div');
    container.className = 'container user-posts';
    container.id = 'load-user-posts-list';

    for (const post of posts) {
        const card = document.createElement('div');
        card.className = 'card';

            const header = document.createElement('div');
            header.className = 'header';
            header.innerHTML = 'post ' + post.id;
            card.appendChild(header);

            const body = document.createElement('div');
            body.className = 'body';

                const row = document.createElement('div');
                row.className = 'row';

                    const value = document.createElement('div');
                    value.className = 'value';
                    value.innerHTML = post.title;
                    row.appendChild(value);

                body.appendChild(row);

                const footer = document.createElement('div');
                footer.className = 'footer';

                    const a = document.createElement('a');
                    a.href = './post-details.html?id=' + post.id;
                    a.innerHTML = 'more...';
                    footer.appendChild(a);

                body.appendChild(footer);

            card.appendChild(body);

        container.appendChild(card);
    }

    document.body.appendChild(container);

    const prevList = document.getElementById('load-user-posts-list');
    if (prevList) prevList.remove();

    document.body.appendChild(container);
}

const url = new URL(location.href);
const id = url.searchParams.get('id');
if (!id) location.href = '/index.html';

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(response => response.json())
    .then(drawUserDetails);
