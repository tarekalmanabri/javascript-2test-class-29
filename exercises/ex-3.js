const books = [{
        bookName: "The Nature of Software Development",
        author: "Ron Jeffries",
        coverURL: "https://cdn-images-1.medium.com/max/1200/1*CQRh-pFTZ97ReXogbefleQ.png"
    },
    {
        bookName: "Clean Code",
        author: "Robert Cecil Martin",
        coverURL: 'https://images-na.ssl-images-amazon.com/images/I/51b7XbfMIIL.jpg'
    }
]




function injectBooksToDOM(arr) {
    const newUl = document.getElementById('ul');
    arr.forEach(item => {
        const p = document.createElement('p');
        p.innerText = item.bookName + item.author
        const newImg = document.createElement('img');
        newImg.src = item.coverURL
        const listItem = document.createElement('li');
        listItem.appendChild(p);
        listItem.appendChild(newImg)
        newUl.appendChild(listItem);
    });

    return newUl;
}
injectBooksToDOM(books);