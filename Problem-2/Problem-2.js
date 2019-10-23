const BTitles = document.getElementById("bTitles")
BTitles.addEventListener("click", getTitles)

async function getTitles() {
    const url = "http://jsonplaceholder.typicode.com/posts/"
    const response = await fetch(url)
    const result = await response.json()

    let titles = result.filter(result => result.userId > 0).map(r => r.title)
    titles = titles.map(function(a){return a.trim()})
    titles = titles.map(function(a){return a.split('\n')})
    let new_titles;
    //new_titles = titles.split(" ").length;

    new_titles = titles.map(function(a){return a.split(' ')})
    titles.forEach(function(mark)
    {
        console.log(mark);
    })

    console.log(titles[1])


}

