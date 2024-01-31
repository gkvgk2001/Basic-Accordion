const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

//if thwey ask to fetch dat from api then
//first createa function that will get the data
const accordionWrapper = document.querySelector(".accordion");
//then pass the data as argunment to this function
function creteAccordionData() {
  accordionWrapper.innerHTML = data
    .map(
      (dataItem) => `

    <div class = "accordion_item">

    <div class = "accordion_tittle">

     <h3>${dataItem.question}</h3>

      <i class="fa-solid fa-arrow-down"></i>
    
    
    </div>

    
    <div class = "accordion_content">

     <p>${dataItem.answer}</p>

    
    </div>

    
    
    </div>
    
    
    
    `
    )
    .join(" ");
}

creteAccordionData();

//to ad event listener to accordion tittle in order to open and close

const getAccordionTitle = document.querySelectorAll(".accordion_tittle");

// console.log(getAccordionTitle);

getAccordionTitle.forEach((current_tittle) => {
  current_tittle.addEventListener("click", (event) => {
    //agr jo accordion khul rkha hai uspa click kiya to bnd krdo
    if (current_tittle.classList.contains("active")) {
      current_tittle.classList.remove("active");
    }
    //pehla jo accordion khul rakha hai us bnd krdo aurr crrently jispa click kiya hai ussa khol do
    else {
      let getAlreadyAddedActiveClasses = document.querySelectorAll(".active");

      getAlreadyAddedActiveClasses.forEach((currrentactiveItem) => {
        currrentactiveItem.classList.remove("active");
      });

      current_tittle.classList.add("active");
    }
  });
});
