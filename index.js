quiz_data=[
    {
        question:"What is the masala used for chicken biryani",
        a:"Chicken Tikka Masala",b:"cinnamon masala",c:"kebab masala",d:"Honey Buns",
        correct_answer:"d",
    },
    {
        question:"What is the quadratic formula",
        a:"ax^2+bx+c=0",b:"y=mx+b",c:"a^2+b^2=c^2",d:"x+y=HoneyBuns",
        correct_answer:"a",
    },
]
const quizelement=document.getElementById("quiz")
const question=document.getElementById("question")
const answer=document.getElementById("answer")
const a_text=document.getElementById("a-text")
const b_text=document.getElementById("b-text")
const c_text=document.getElementById("c-text")
const d_text=document.getElementById("d-text")
const submit=document.getElementById("submit")

var score=0
var quiznumber=0
function loadquiz() {
    var currentquiz=quiz_data[quiznumber]
    // question.innerText=currentquiz.question
    a_text.innerHTML=currentquiz.a
}
    loadquiz()