let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const saveBtn = document.getElementById("save-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )


    if (leadsFromLocalStorage) {
        myLeads = leadsFromLocalStorage
        render(myLeads)
    }



    saveBtn.addEventListener("click", ()=>{    
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            myLeads.push(tabs[0].url)
            localStorage.setItem("myLeads", JSON.stringify(myLeads) )
            render(myLeads)
        })
    })
    
    function render(leads) {
        let listItems = ""
        for (let i = 0; i < leads.length; i++) {
            listItems += `
                <li id="li-el">
                    <a target='_blank' href='${leads[i]}'>
                        ${leads[i]}
                    </a>
                </li>
            `
        }
        ulEl.innerHTML = listItems
        // const liEL = document.getElementById("li-el")
        // const single = document.getElementById("delete-el-btn")

        // single.addEventListener('click' , ()=>{
            
        // })
    }
    
    const liEL = document.getElementById("li-el")
    const single = document.getElementById("delete-el-btn")



    // when clicked should know which url displaying
    //and take that el and delte it from local storage



    deleteBtn.addEventListener("dblclick", function() {
        localStorage.clear()
        myLeads = []
        render(myLeads)
    })

    inputBtn.addEventListener("click", function() {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
