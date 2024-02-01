var btn = document.getElementById('btn')
var qut = document.getElementById('quote')
var author = document.getElementById('author')

var qutArr = [{quote:'“So many books, so little time.”', author: '― Frank Zappa'},
{quote: 'You only live once, but if you do it right, once is enough.”', author:'― Mae West'},
{quote: '“Be the change that you wish to see in the world.”', author: '― Mahatma Gandhi'},
{quote: '“In three words I can sum up everything I have learned about life: it goes on.”', author: '― Robert Frost '},
{quote: '“If you tell the truth, you do not have to remember anything.”', author: ' ― Mark Twain'},
{quote: '“A friend is someone who knows all about you and still loves you.”', author: '― Elbert Hubbard '},
{quote: '“Live as if you were to die tomorrow. Learn as if you were to live forever.”', author: '― Mahatma Gandhi'},
{quote: '“Without music, life would be a mistake.”', author: ' ― Friedrich Nietzsche'},
{quote: '“Insanity is doing the same thing, over and over again, but expecting different results.”', author: '― Narcotics Anonymous'}]

btn.onclick = function(){
    var randomIndex = Math.floor(Math.random()*qutArr.length)
    qut.innerHTML = qutArr[randomIndex].quote
    author.innerHTML = qutArr[randomIndex].author
}