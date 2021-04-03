document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);

        function fetchUserData(){
            fetch('https://my-json-server.typicode.com/typicode/demo/comments')
                .then(response => response.json())
                .then(comments => {
                    let output = '<h2>Lists of Users</h2>';
                    output += '<ul>';
                    comments.forEach(function(comment) {
                        output += `
                            <li>
                                ${comment.body}
                            </li>
                        `;
                    });
                    output += '</ul>'
                    document.getElementById("response").innerHTML = output;
                });
        }
