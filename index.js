document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);

        function fetchUserData(){
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(posts => {
                    let output = '<h2>Lists of Users</h2>';
                    output += '<ul>';
                    posts.forEach(function(post) {
                        output += `
                            <li>
                                ${post.title}
                            </li>
                        `;
                    });
                    output += '</ul>'
                    document.getElementById("response").innerHTML = output;
                });
        }
