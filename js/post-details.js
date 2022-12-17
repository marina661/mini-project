function drawPostDetails (post) {
    const container = document.createElement('div');
    container.className = 'container post';

        const card = document.createElement('div');
        card.className = 'card';

            const header = document.createElement('div');
            header.className = 'header';
            header.innerHTML = 'post ' + post.id;
            card.appendChild(header);

            const body = document.createElement('div');
            body.className = 'body';

                const row1 = document.createElement('div');
                row1.className = 'row';

                    const value1 = document.createElement('div');
                    value1.className = 'value';
                    value1.innerHTML = post.title;
                    row1.appendChild(value1);

                body.appendChild(row1);

                const header2 = document.createElement('div');
                header2.className = 'header';
                header2.innerHTML = 'body';
                body.appendChild(header2);

                const row2 = document.createElement('div');
                row2.className = 'row';

                    const value2 = document.createElement('div');
                    value2.className = 'value';
                    value2.innerHTML = post.body;
                    row2.appendChild(value2);

                body.appendChild(row2);

            card.appendChild(body);

        container.appendChild(card);

    document.body.appendChild(container);
}

function drawComments (comments) {
    const container = document.createElement('div');
    container.className = 'container comments';

    for (const comment of comments) {
        const card = document.createElement('div');
        card.className = 'card';

            const header = document.createElement('div');
            header.className = 'header';
            header.innerHTML = 'comment ' + comment.id;
            card.appendChild(header);

            const body = document.createElement('div');
            body.className = 'body';

                const row = document.createElement('div');
                row.className = 'row';

                    const value = document.createElement('div');
                    value.className = 'value';
                    value.innerHTML = comment.email;
                    row.appendChild(value);

                body.appendChild(row);

                const header1 = document.createElement('div');
                header1.className = 'header';
                header1.innerHTML = 'name';
                body.appendChild(header1);

                const row1 = document.createElement('div');
                row1.className = 'row';

                    const value1 = document.createElement('div');
                    value1.className = 'value';
                    value1.innerHTML = comment.name;
                    row1.appendChild(value1);

                body.appendChild(row1);

                const header2 = document.createElement('div');
                header2.className = 'header header-inner';
                header2.innerHTML = 'body';
                body.appendChild(header2);

                const row2 = document.createElement('div');
                row2.className = 'row';

                    const value2 = document.createElement('div');
                    value2.className = 'value';
                    value2.innerHTML = comment.body;
                    row2.appendChild(value2);

                body.appendChild(row2);

            card.appendChild(body);

        container.appendChild(card);
    }

    document.body.appendChild(container);
}

const url = new URL(location.href);
const id = url.searchParams.get('id');
if (!id) location.href = '/index.html';

fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(response => response.json())
    .then(post => {
        drawPostDetails(post);
        fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
            .then(response => response.json())
            .then(drawComments);
    });

